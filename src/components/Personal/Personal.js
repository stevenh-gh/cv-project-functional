import React from "react";
import PersonalForm from "./PersonalForm/PersonalForm";

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
      personalInfo: {
        firstName: "",
        lastName: "",
        addressLineOne: "",
        addressLineTwo: "",
        city: "",
        state: "",
        postalCode: "",
        email: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formVisible: !this.state.formVisible,
      personalInfo: {
        firstName: e.target.elements[0].value,
        lastName: e.target.elements[1].value,
        addressLineOne: e.target.elements[2].value,
        addressLineTwo: e.target.elements[3].value,
        city: e.target.elements[4].value,
        state: e.target.elements[5].value,
        postalCode: e.target.elements[6].value,
        email: e.target.elements[7].value,
      },
    });
  };

  render() {
    let { formVisible } = this.state;
    let {
      firstName,
      lastName,
      addressLineOne,
      city,
      state,
      postalCode,
      addressLineTwo,
      email,
    } = this.state.personalInfo;
    return (
      <>
        <PersonalForm submit={this.handleSubmit} isVisible={formVisible} />
        <div className={!formVisible ? "" : "hidden"}>
          <div>
            {firstName} {lastName}
          </div>
          <div>
            <div>{addressLineOne}</div>
            <div>{addressLineTwo}</div>
            <div>
              {city}, {state} {postalCode}
            </div>
            <div>{email}</div>
          </div>
        </div>
      </>
    );
  }
}
