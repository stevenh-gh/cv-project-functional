import React from "react";
import PersonalForm from "./PersonalForm/PersonalForm";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

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
        phone: "",
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
        phone: e.target.elements[8].value,
      },
    });
  };

  edit = () => {
    // console.log("working");
    this.setState({
      formVisible: !this.state.formVisible,
    });
  };

  render() {
    return (
      <>
        <PersonalForm
          submit={this.handleSubmit}
          isVisible={this.state.formVisible}
        />
        <PersonalInfo
          pInfo={this.state.personalInfo}
          visibility={this.state.formVisible}
          edit={this.edit}
        />
      </>
    );
  }
}
