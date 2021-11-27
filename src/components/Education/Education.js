import React from "react";
import EducationForm from "./EducationForm/EducationForm";
import EducationInfo from "./EducationInfo/EducationInfo";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
      educationInfo: {
        institution: "",
        fromYear: "",
        toYear: "",
        degree: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formVisible: !this.state.formVisible,
      educationInfo: {
        institution: e.target.elements[0].value,
        fromYear: e.target.elements[1].value,
        toYear: e.target.elements[2].value,
        degree: e.target.elements[3].value,
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
        <EducationForm
          submit={this.handleSubmit}
          isVisible={this.state.formVisible}
          info={this.state.educationInfo}
        />
        <EducationInfo
          eInfo={this.state.educationInfo}
          visibility={this.state.formVisible}
          edit={this.edit}
        />
      </>
    );
  }
}
