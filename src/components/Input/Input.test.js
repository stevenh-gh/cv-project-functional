import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("should render label with input", () => {
    render(<Input id="firstName" text="First name" />);
    const labelElement = screen.getByLabelText(/first name/i);
    const inputElement = screen.getByRole("textbox");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
});
