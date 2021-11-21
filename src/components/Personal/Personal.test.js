import { render, screen } from "@testing-library/react";
import Personal from "./Personal";

beforeEach(() => {
  render(<Personal />);
});

describe("Personal", () => {
  it("should render first name", () => {
    const firstNameElement = screen.getByLabelText(/first name/i);
    expect(firstNameElement).toBeInTheDocument();
  });

  it("should render last name form", () => {
    const lastNameElement = screen.getByLabelText(/last name/i);
    expect(lastNameElement).toBeInTheDocument();
  });

  it("should render address line 1", () => {
    const addressOneElement = screen.getByLabelText(/address line 1/i);
    expect(addressOneElement).toBeInTheDocument();
  });

  it("should render address line 2", () => {
    const addressTwoElement = screen.getByLabelText(/address line 2/i);
    expect(addressTwoElement).toBeInTheDocument();
  });

  it("should render city", () => {
    const cityElement = screen.getByLabelText(/city/i);
    expect(cityElement).toBeInTheDocument();
  });

  it("should render postal code", () => {
    const postalCodeElement = screen.getByLabelText(/postal code/i);
    expect(postalCodeElement).toBeInTheDocument();
  });

  it("should render email", () => {
    const emailElement = screen.getByLabelText(/email/i);
    expect(emailElement).toBeInTheDocument();
  });

  it("should render phone", () => {
    const phoneElement = screen.getByLabelText(/phone/i);
    expect(phoneElement).toBeInTheDocument();
  });

  it("should render submit button", () => {
    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();
  });
});
