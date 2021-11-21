import React from "react";

export default class GeneralInformation extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="firstName">First name</label>
        <br />
        <input type="text" id="firstName" />
        <br />
        <label htmlFor="lastName">Last name</label>
        <br />
        <input type="text" id="lastName" />
        <br />
        <label htmlFor="addressLineOne">Address line 1</label>
        <br />
        <input type="text" id="addressLineOne" />
        <br />
        <label htmlFor="addressLineTwo">Address line 2</label>
        <br />
        <input type="text" id="addressLineTwo" />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input type="text" name="" id="city" />
        <br />
        <label htmlFor="postalCode">Postal code</label>
        <br />
        <input type="text" name="" id="postalCode" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" name="" id="email" />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input type="text" name="" id="phone" />
      </form>
    );
  }
}
