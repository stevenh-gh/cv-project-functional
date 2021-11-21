import React from "react";
import Input from "./Input/Input";
import PersonalForm from "./PersonalForm/PersonalForm";

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formVisible: !this.state.formVisible,
    });
  };

  render() {
    let { formVisible } = this.state;
    return <PersonalForm submit={this.handleSubmit} isVisible={formVisible} />;
  }
}
