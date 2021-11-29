import React from "react";
import Input from "../../Input/Input";

export default class ExperienceForm extends React.Component {
  render() {
    const { submit, isVisible, info } = this.props;
    const { company } = info.company;
    return (
      <form
        aria-label="form"
        onSubmit={submit}
        className={isVisible ? "" : "hidden"}
      >
        <Input id="company" text="Company" val={company} />
        <Input id="position" text="Position at company" />
        <Input id="responsiblities" text="Responsibilities" />
        <Input id="fromYear" text="From year" />
        <Input id="toYear" text="To year" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
