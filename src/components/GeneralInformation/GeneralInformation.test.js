import { render, screen } from "@testing-library/react";
import GeneralInformation from "./GeneralInformation";

describe("GeneralInformation", () => {
  it("should render first name", () => {
    render(<GeneralInformation />);
    const firstNameElement = screen.getByLabelText(/first name/i);
    expect(firstNameElement).toBeInTheDocument();
  });
});
