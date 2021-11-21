import React from "react";
import Input from "./Input/Input";

export default class Personal extends React.Component {
  render() {
    return (
      <form>
        <Input id="firstName" text="First name" />
        <Input id="lastName" text="Last name" />
        <Input id="addressLineOne" text="Address line 1" />
        <Input id="addressLineTwo" text="Address line 2" />
        <Input id="city" text="City" />
        <Input id="postalCode" text="Postal code" />
        <Input id="email" text="Email" />
        <Input id="phone" text="Phone" />
      </form>
    );
  }
}
