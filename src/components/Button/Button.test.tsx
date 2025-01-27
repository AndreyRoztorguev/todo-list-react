import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("should render children correct", () => {
    const handleClickMock = vi.fn();
    render(<Button handleClick={handleClickMock} children="Click me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveTextContent("Click me");
  });
  it("handleClick function should have been called", async () => {
    const handleClickMock = vi.fn();
    render(<Button handleClick={handleClickMock} children="Click me" />);
    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);
    expect(handleClickMock).toHaveBeenCalled();
  });
});
