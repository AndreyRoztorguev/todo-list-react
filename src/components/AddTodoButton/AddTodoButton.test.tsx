import { render, screen } from "@testing-library/react";
import { AddTodoButton } from "./AddTodoButton";

describe("AddTodoButton", () => {
  it("should have Add label", () => {
    render(<AddTodoButton type="submit" disabled={false} />);
    const button = screen.getByRole("button", { name: /add/i });
    expect(button).toHaveTextContent("Add");
  });
  it("AddTodoButton should be enubled", () => {
    render(<AddTodoButton type="submit" disabled={false} />);
    const button = screen.getByRole("button", { name: /add/i });
    expect(button).not.toBeDisabled();
  });
  it("AddTodoButton should be disabled", () => {
    render(<AddTodoButton type="submit" disabled={true} />);
    const button = screen.getByRole("button", { name: /add/i });
    expect(button).toBeDisabled();
  });
});
