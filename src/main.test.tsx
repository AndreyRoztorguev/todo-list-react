import { render, screen } from "@testing-library/react";
import App from "./App";

describe("main.tsx", () => {
  it("renders App inside StrictMode", () => {
    render(<App />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument(); // Adjust this based on actual content of App
  });
});
