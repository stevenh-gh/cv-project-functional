import { fireEvent, render, screen } from "@testing-library/react";
import Education from "./Education";

beforeEach(() => {
  render(<Education />);
});

describe("Education", () => {
  it("should render name of institution", () => {
    const institution = screen.getByLabelText(/name of institution/i);
    expect(institution).toBeInTheDocument();
  });

  it("should render from year form", () => {
    const yearStart = screen.getByLabelText(/from year/i);
    expect(yearStart).toBeInTheDocument();
  });

  it("should render to year form", () => {
    const yearEnd = screen.getByLabelText(/to year/i);
    expect(yearEnd).toBeInTheDocument();
  });

  it("should render degree", () => {
    const degree = screen.getByLabelText(/degree/i);
    expect(degree).toBeInTheDocument();
  });

  it("should be hidden when submit", () => {
    const formElement = screen.getByRole("form");
    const submitBtnElement = screen.getByRole("button");
    fireEvent.click(submitBtnElement);
    expect(formElement).toHaveClass("hidden");
  });

  describe("after submitting", () => {
    it("should render institution after submitting", () => {
      const institution = screen.getByLabelText(/institution/i);
      const formElement = screen.getByRole("form");
      fireEvent.change(institution, {
        target: { value: "university of california davis" },
      });
      fireEvent.submit(formElement);
      // const nameElement = screen.getAllByRole("generic", { name: "john doe" });
      const institutionElement = screen.getByText(
        /university of california davis/i
      );
      expect(institutionElement).toBeInTheDocument();
    });
    it("should render years after submitting", () => {
      const form = screen.getByRole("form");
      const fromYearElement = screen.getByLabelText(/from year/i);
      const toYearElement = screen.getByLabelText(/to year/i);

      fireEvent.change(fromYearElement, { target: { value: "2000" } });
      fireEvent.change(toYearElement, { target: { value: "2004" } });
      fireEvent.submit(form);

      const year = screen.getByText("2000 - 2004");
      expect(year).toBeInTheDocument();
    });
    it("should render degree after submitting", () => {
      const form = screen.getByRole("form");
      const degree = screen.getByLabelText(/degree/i);

      fireEvent.change(degree, { target: { value: "B.S. Computer Science" } });
      fireEvent.submit(form);

      const degreeElement = screen.getByText(/b.s. computer science/i);
      expect(degreeElement).toBeInTheDocument();
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

      it("should have institution as value", () => {
        const editBtnElement = screen.getByTestId("editbtn");
        const form = screen.getByRole("form");
        const institution = screen.getByLabelText(/institution/i);

        fireEvent.change(institution, {
          target: { value: "university of california berkeley" },
        });
        fireEvent.submit(form);
        fireEvent.click(editBtnElement);

        expect(institution).toHaveValue("university of california berkeley");
      });
      it("should have from year as value", () => {
        const editBtnElement = screen.getByTestId("editbtn");
        const form = screen.getByRole("form");
        const fromYear = screen.getByLabelText(/from year/i);

        fireEvent.change(fromYear, { target: { value: "1990" } });
        fireEvent.submit(form);
        fireEvent.click(editBtnElement);

        expect(fromYear).toHaveValue("1990");
      });
      it("should have to year as value", () => {
        const editBtnElement = screen.getByTestId("editbtn");
        const form = screen.getByRole("form");
        const toYear = screen.getByLabelText(/to year/i);

        fireEvent.change(toYear, { target: { value: "1994" } });
        fireEvent.submit(form);
        fireEvent.click(editBtnElement);

        expect(toYear).toHaveValue("1994");
      });
      it("should have degree as value", () => {
        const editBtnElement = screen.getByTestId("editbtn");
        const form = screen.getByRole("form");
        const degree = screen.getByLabelText(/degree/i);

        fireEvent.change(degree, { target: { value: "B.S. Mathematics" } });
        fireEvent.submit(form);
        fireEvent.click(editBtnElement);

        expect(degree).toHaveValue("B.S. Mathematics");
      });
    });
  });
});
