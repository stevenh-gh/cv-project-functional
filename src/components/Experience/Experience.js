import React from "react";
import ExperienceForm from "./ExperienceForm/ExperienceForm";
import ExperienceInfo from "./ExperienceInfo/ExperienceInfo";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
      experienceInfo: {
        company: "",
        position: "",
        responsibilities: "",
        fromYear: "",
        toYear: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formVisible: !this.state.formVisible,
      experienceInfo: {
        company: e.target.elements[0].value,
        position: e.target.elements[1].value,
        responsibilities: e.target.elements[2].value,
        fromYear: e.target.elements[3].value,
        toYear: e.target.elements[4].value,
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
        <ExperienceForm
          submit={this.handleSubmit}
          isVisible={this.state.formVisible}
          info={this.state.experienceInfo}
        />
        <ExperienceInfo
          eInfo={this.state.experienceInfo}
          visibility={this.state.formVisible}
          edit={this.edit}
        />
      </>
    );
  }
}
