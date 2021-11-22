import React from "react";
import Input from "../Input/Input";

export default class PersonalForm extends React.Component {
  render() {
    const { submit, isVisible } = this.props;
    return (
      <form
        aria-label="form"
        onSubmit={submit}
        className={isVisible ? "" : "hidden"}
      >
        <Input id="firstName" text="First name" />
        <Input id="lastName" text="Last name" />
        <Input id="addressLineOne" text="Address line 1" />
        <Input id="addressLineTwo" text="Address line 2" />
        <Input id="city" text="City" />
        <Input id="state" text="State" />
        <Input id="postalCode" text="Postal code" />
        <Input id="email" text="Email" />
        <Input id="phone" text="Phone" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
