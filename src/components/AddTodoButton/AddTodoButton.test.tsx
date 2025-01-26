import { render, screen } from "@testing-library/react";
import { AddTodoButton } from "./AddTodoButton";

describe("AddTodoButton", () => {
  it("AddTodoButton should be enubled1", () => {
    render(<AddTodoButton type="submit" disabled={false} />);
    const button = screen.getByRole("button", { name: /add/i });
    expect(button).not.toBeDisabled();
  });
});
