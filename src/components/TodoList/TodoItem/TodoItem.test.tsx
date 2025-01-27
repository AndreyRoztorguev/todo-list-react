import { render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../../../App";
import { userEvent } from "@testing-library/user-event";

describe("TodoItem", () => {
  it("should render todo", () => {
    const todo: Todo = { id: "1", value: "Learn WebGL" };
    const editTodoHandlerMock = vi.fn<(todo: Todo) => void>();
    const deleteTodoHandlerMock = vi.fn<(id: Todo["id"]) => void>();
    render(
      <TodoItem
        todo={todo}
        editTodoHandler={editTodoHandlerMock}
        deleteTodoHandler={deleteTodoHandlerMock}
      />
    );
    expect(screen.getByText(/Learn WebGL/));
  });
  it("should call editTodoHandler with the correct todo when edit button is clicked", async () => {
    const todo: Todo = { id: "1", value: "Learn Vitest" };
    const editTodoHandler = vi.fn();

    render(<TodoItem todo={todo} editTodoHandler={editTodoHandler} deleteTodoHandler={vi.fn()} />);

    const editButton = screen.getByRole("button", { name: "Edit Todo" });
    await userEvent.click(editButton);

    expect(editTodoHandler).toHaveBeenCalledTimes(1);
    expect(editTodoHandler).toHaveBeenCalledWith(todo);
  });

  it("should call deleteTodoHandler with the correct id when delete button is clicked", async () => {
    const todo: Todo = { id: "1", value: "Learn Vitest" };
    const deleteTodoHandler = vi.fn();

    render(
      <TodoItem todo={todo} editTodoHandler={vi.fn()} deleteTodoHandler={deleteTodoHandler} />
    );

    const deleteButton = screen.getByRole("button", { name: /Delete Todo/i }); // Look for the button containing the FaTrash icon.
    await userEvent.click(deleteButton);

    expect(deleteTodoHandler).toHaveBeenCalledTimes(1);
    expect(deleteTodoHandler).toHaveBeenCalledWith(todo.id);
  });
});
