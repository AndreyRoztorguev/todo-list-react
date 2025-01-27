import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { TodoInput } from "./TodoInput";

describe("TodoInput", () => {
  it("should display the default placeholder text in the input field", () => {
    const defaultPlaceholder = "Add new task here";
    render(<TodoInput handleChange={vi.fn()} value="" />);
    const input = screen.getByPlaceholderText(defaultPlaceholder);
    expect(input).toBeInTheDocument();
  });
  it("handleChange function should have been called", async () => {
    const handleChangeMock = vi.fn();
    const placeholder = "Add new task";
    render(<TodoInput placeholder={placeholder} handleChange={handleChangeMock} value="" />);
    const input = screen.getByPlaceholderText(placeholder);
    const todoValue = "test task";
    await userEvent.type(input, todoValue);
    expect(handleChangeMock).toHaveBeenCalledTimes("test task".length);
  });
});
