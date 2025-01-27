import { render, screen } from "@testing-library/react";
import { EmptyListMessage } from "./EmptyListMessage";

describe("EmptyListMessage", () => {
  it("should not render the empty list message when isEmpty is false", () => {
    render(<EmptyListMessage isEmpty={false} />);
    expect(screen.queryByText(/You don't have any todo!/)).toBeNull();
  });
  it("should render the empty list message when isEmpty is true", () => {
    render(<EmptyListMessage isEmpty={true} />);
    expect(screen.getByText(/You don't have any todo!/)).toBeInTheDocument();
  });
});
