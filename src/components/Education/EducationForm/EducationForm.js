import React from "react";
import Input from "../../Input/Input";

export default class EducationForm extends React.Component {
  render() {
    const { submit, isVisible, info } = this.props;
    const { institution } = info.institution;
    return (
      <form
        aria-label="form"
        onSubmit={submit}
        className={isVisible ? "" : "hidden"}
      >
        <Input id="institution" text="Name of institution" val={institution} />
        <Input id="fromYear" text="From year" />
        <Input id="toYear" text="To year" />
        <Input id="degree" text="Degree" />
       <button type="submit">Submit</button>
      </form>
    );
  }
}
