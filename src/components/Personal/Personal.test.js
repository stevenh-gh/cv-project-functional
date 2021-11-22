import { fireEvent, render, screen } from "@testing-library/react";
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

  it("should be hidden when submit", () => {
    const formElement = screen.getByRole("form");
    const submitBtnElement = screen.getByRole("button");
    fireEvent.click(submitBtnElement);
    expect(formElement).toHaveClass("hidden");
  });

  describe("after submitting", () => {
    it("should render full name after submitting", () => {
      const firstNameElement = screen.getByLabelText(/first name/i);
      const lastNameElement = screen.getByLabelText(/last name/i);
      const formElement = screen.getByRole("form");
      fireEvent.change(firstNameElement, { target: { value: "john" } });
      fireEvent.change(lastNameElement, { target: { value: "doe" } });
      fireEvent.submit(formElement);
      // const nameElement = screen.getAllByRole("generic", { name: "john doe" });
      const nameElement = screen.getByText(/john doe/i);
      expect(nameElement).toBeInTheDocument();
    });
    it("should render address after submitting", () => {
      const form = screen.getByRole("form");
      const addressLineOneElement = screen.getByLabelText(/address line 1/i);
      const cityElement = screen.getByLabelText(/city/i);
      const stateElement = screen.getByLabelText(/state/i);
      const zipElement = screen.getByLabelText(/postal code/i);

      fireEvent.change(addressLineOneElement, {
        target: { value: "123 Maple Street" },
      });
      fireEvent.change(cityElement, { target: { value: "Anytown" } });
      fireEvent.change(stateElement, { target: { value: "PA" } });
      fireEvent.change(zipElement, { target: { value: 17101 } });
      fireEvent.submit(form);

      const addressElement = screen.getByText(/123 maple street/i);
      const addressElement2 = screen.getByText(/anytown, pa 17101/i);
      expect(addressElement).toBeInTheDocument();
      expect(addressElement2).toBeInTheDocument();
    });
    it("should render address line 2 if address line 2 is provided", () => {
      const form = screen.getByRole("form");
      const addressLineOneElement = screen.getByLabelText(/address line 1/i);
      const addressLineTwoEleemnt = screen.getByLabelText(/address line 2/i);
      const cityElement = screen.getByLabelText(/city/i);
      const stateElement = screen.getByLabelText(/state/i);
      const zipElement = screen.getByLabelText(/postal code/i);

      fireEvent.change(addressLineOneElement, {
        target: { value: "123 Maple Street" },
      });
      fireEvent.change(addressLineTwoEleemnt, {
        target: { value: "Example Apt, Rm 101" },
      });
      fireEvent.change(cityElement, { target: { value: "Anytown" } });
      fireEvent.change(stateElement, { target: { value: "PA" } });
      fireEvent.change(zipElement, { target: { value: 17101 } });
      fireEvent.submit(form);

      const addressElement = screen.getByText(/123 maple street/i);
      const addressElement2 = screen.getByText(/example apt, rm 101/i);
      const addressElement3 = screen.getByText(/anytown, pa 17101/i);
      expect(addressElement).toBeInTheDocument();
      expect(addressElement2).toBeInTheDocument();
      expect(addressElement3).toBeInTheDocument();
    });
    it("should render email after submitting", () => {
      const form = screen.getByRole("form");
      const email = screen.getByLabelText(/email/i);

      fireEvent.change(email, { target: { value: "example@email.com" } });
      fireEvent.submit(form);

      const emailElement = screen.getByText(/example@email.com/i);
      expect(emailElement).toBeInTheDocument();
    });
    it("should render phone number after submitting", () => {
      const form = screen.getByRole("form");
      const phone = screen.getByLabelText(/phone/i);

      fireEvent.change(phone, { target: { value: "(123) 456-7899" } });
      fireEvent.submit(form);
      const phoneElement = screen.getByText("(123) 456-7899");
      expect(phoneElement).toBeInTheDocument();
    });
  });
});
