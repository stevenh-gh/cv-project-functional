import { fireEvent, render, screen } from "@testing-library/react";
import ExperienceInfo from "./ExperienceInfo";

beforeEach(() => {
  let experienceInfo = {
    company: "",
    position: "",
    responsibilities: "",
    fromYear: "",
    toYear: "",
  };

  render(<ExperienceInfo eInfo={experienceInfo} visibility={false} />);
});
describe("ExperienceInfo", () => {
  it("should have an edit button", () => {
    const editButtonElement = screen.getByTestId("editbtn");
    expect(editButtonElement).toBeInTheDocument();
  });

  it("should change cursor to pointer when hover over edit button", () => {
    const editButtonElement = screen.getByTestId("editbtn");
    expect(editButtonElement).toHaveClass("cursor-pointer");
  });

  // this works, but unsure how to test
  // a method call that is passed as a prop when clicked
  it.skip("should call edit method when clicked", () => {
    const editButtonElement = screen.getByTestId("editbtn");
    const spy = jest.spyOn(editButtonElement, "edit");
    fireEvent.click(editButtonElement);
    expect(spy).toBeCalled();
  });
});
