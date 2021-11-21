import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render title of page", () => {
    render(<Header />);
    const headerElement = screen.getByRole("heading", {
      name: "Odin CV Application",
    });
    expect(headerElement).toBeInTheDocument();
  });
});
