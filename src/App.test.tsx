import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should add a new todo", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const button = screen.getByRole("button", { name: /Add/i });

    await userEvent.type(input, "Learn WebGL");
    await userEvent.click(button);

    expect(screen.getByText(/Learn WebGL/i)).toBeInTheDocument();
  });

  it("should render default todo list", async () => {
    render(<App />);
    const list = screen.getByRole("list", { name: /todo/i });
    expect(list).toBeInTheDocument();
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
  });
  it("should render default todo list", async () => {
    // render(<App />);
    // const input = screen.getByPlaceholderText(/Add a new task/i) as HTMLInputElement;
    // const saveButton = screen.getByRole("button", { name: /Add/i });
    // const list = screen.getByRole("list", { name: /todo/i });
    // const listContainer = within(list);
    // const item = listContainer.getAllByRole("listitem")[0];
    // const { getByRole } = within(item);
    // const editButton = getByRole("button", { name: /Edit Todo/i });
    // await userEvent.click(editButton);
    // await userEvent.type(input, " Updated");
    // await userEvent.click(saveButton);
    // expect(screen.getByText(/Learn WebGL Updated/i)).toBeInTheDocument();
  });
});
