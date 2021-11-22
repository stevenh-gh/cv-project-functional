import { fireEvent, render, screen } from "@testing-library/react";
import PersonalInfo from "./PersonalInfo";

beforeEach(() => {
  let personalInfo = {
    firstName: "",
    lastName: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
  };

  render(<PersonalInfo pInfo={personalInfo} visibility={false} />);
});
describe("PersonalInfo", () => {
  it("should have an edit button", () => {
    const editButtonElement = screen.getByTestId("editbtn");
    expect(editButtonElement).toBeInTheDocument();
  });
});
