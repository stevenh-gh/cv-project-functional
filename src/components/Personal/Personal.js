import React from "react";
import Input from "./Input/Input";

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
    return (
      <form
        aria-label="form"
        onSubmit={this.handleSubmit}
        className={formVisible ? "" : "hidden"}
      >
        <Input id="firstName" text="First name" />
        <Input id="lastName" text="Last name" />
        <Input id="addressLineOne" text="Address line 1" />
        <Input id="addressLineTwo" text="Address line 2" />
        <Input id="city" text="City" />
        <Input id="postalCode" text="Postal code" />
        <Input id="email" text="Email" />
        <Input id="phone" text="Phone" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
