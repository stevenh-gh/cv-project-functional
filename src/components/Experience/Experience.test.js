import { fireEvent, render, screen } from "@testing-library/react";
import Experience from "./Experience";

beforeEach(() => {
  render(<Experience />);
});

describe("Experience", () => {
  it("should render company", () => {
    const company = screen.getByLabelText(/company/i);
    expect(company).toBeInTheDocument();
  });

  it("should render position", () => {
    const position = screen.getByLabelText(/position at company/i);
    expect(position).toBeInTheDocument();
  });

  it("should render responsibilities", () => {
    const responsibilities = screen.getByLabelText(/responsibilities/i);
    expect(responsibilities).toBeInTheDocument();
  });

  it("should render from year", () => {
    const fromYear = screen.getByLabelText(/from year/i);
    expect(fromYear).toBeInTheDocument();
  });

  it("should render to year", () => {
    const toYear = screen.getByLabelText(/to year/i);
    expect(toYear).toBeInTheDocument();
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
    it("should render company after submitting", () => {
      const company = screen.getByLabelText(/company/i);
      const formElement = screen.getByRole("form");
      fireEvent.change(firstNameElement, { target: { value: "Amazon" } });
      fireEvent.submit(formElement);

      const companyElement = screen.getByText(/amazon/i);
      expect(companyElement).toBeInTheDocument();
    });
    it("should render position after submitting", () => {
      const form = screen.getByRole("form");
      const position = screen.getByLabelText(/position at company/i);

      fireEvent.change(position, { target: { value: "junior engineer" } });
      fireEvent.submit(form);

      const positionElement = screen.getByText(/junior engineer/i);
      expect(positionElement).toBeInTheDocument();
    });
    it("should render responsibilities after submitting", () => {
      const form = screen.getByRole("form");
      const responsibilities = screen.getByLabelText(/responsibilities/i);

      fireEvent.change(responsibilities, {
        target: { value: "development of new app" },
      });
      fireEvent.submit(form);

      const rElement = screen.getByText(/development of new app/i);
      expect(rElement).toBeInTheDocument();
    });
    it("should render from year after submitting", () => {
      const form = screen.getByRole("form");
      const fromYear = screen.getByLabelText(/from year/i);

      fireEvent.change(fromYear, { target: { value: "2000" } });
      fireEvent.submit(form);
      const fyElement = screen.getByText("2000");
      expect(fyElement).toBeInTheDocument();
    });
  });
  it("should render to year after submitting", () => {
    const form = screen.getByRole("form");
    const toYear = screen.getByLabelText(/to year/i);

    fireEvent.change(toYear, { target: { value: "2009" } });
    fireEvent.submit(form);
    const tyElement = screen.getByText("2009");
    expect(tyElement).toBeInTheDocument();
  });
});

describe("after clicking the edit button", () => {
  it("should have form be visible", () => {
    const editBtnElement = screen.getByTestId("editbtn");
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    fireEvent.click(editBtnElement);
    expect(form).not.toHaveClass("hidden");
  });

  it("should have education info not be visible", () => {
    const editBtnElement = screen.getByTestId("editbtn");
    const form = screen.getByRole("form");
    const educationInfo = screen.getByTestId("educationinfo");

    fireEvent.submit(form);
    fireEvent.click(editBtnElement);

    expect(educationInfo).toHaveClass("hidden");
  });

  it("should have company as value", () => {
    const editBtnElement = screen.getByTestId("editbtn");
    const form = screen.getByRole("form");
    const company = screen.getByLabelText(/company/i);

    fireEvent.change(company, { target: { value: "Microsoft" } });
    fireEvent.submit(form);
    fireEvent.click(editBtnElement);

    expect(company).toHaveValue("Microsoft");
  });
  it("should have position as value", () => {
    const editBtnElement = screen.getByTestId("editbtn");
    const form = screen.getByRole("form");
    const position = screen.getByLabelText(/position at company/i);

    fireEvent.change(position, { target: { value: "senior engineer" } });
    fireEvent.submit(form);
    fireEvent.click(editBtnElement);

    expect(position).toHaveValue("senior engineer");
  });
  it("should have from year as value", () => {
    const editBtnElement = screen.getByTestId("editbtn");
    const form = screen.getByRole("form");
    const fromYear = screen.getByLabelText(/from year/i);

    fireEvent.change(fromYear, { target: { value: "2005" } });
    fireEvent.submit(form);
    fireEvent.click(editBtnElement);

    expect(fromYear).toHaveValue("2005");
  });
  it("should have to year as value", () => {
    const editBtnElement = screen.getByTestId("editbtn");
    const form = screen.getByRole("form");
    const toYear = screen.getByLabelText(/to year/i);

    fireEvent.change(toYear, { target: { value: "2015" } });
    fireEvent.submit(form);
    fireEvent.click(editBtnElement);

    expect(toYear).toHaveValue("2015");
  });
  it("should have responsibilities as value", () => {
    const editBtnElement = screen.getByTestId("editbtn");
    const form = screen.getByRole("form");
    const responsibilities = screen.getByLabelText(/responsibilities/i);

    fireEvent.change(responsibilities, {
      target: { value: "manage projects" },
    });
    fireEvent.submit(form);
    fireEvent.click(editBtnElement);

    expect(responsibilities).toHaveValue("manage projects");
  });
});
