import { render, screen } from "@testing-library/react";
import { TodoListTitle } from "./TodoListTitle";

describe("TodoListTitle", () => {
  it("should render title", () => {
    const title = "My Todo List";
    render(<TodoListTitle title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
