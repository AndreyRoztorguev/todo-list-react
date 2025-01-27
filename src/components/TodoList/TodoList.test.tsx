import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";
import { Todo } from "../../App";

describe("TodoList", () => {
  it("should render todos", () => {
    const todos: Todo[] = [{ id: "1", value: "test" }];
    const editTodoHandlerMock = vi.fn<(todo: Todo) => void>(); //: (todo: Todo) => void;
    const deleteTodoHandlerMock = vi.fn<(id: Todo["id"]) => void>(); // (id: string) => void;
    render(
      <TodoList
        editTodoHandler={editTodoHandlerMock}
        deleteTodoHandler={deleteTodoHandlerMock}
        todos={todos}
      />
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
