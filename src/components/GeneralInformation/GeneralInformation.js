import React from "react";

export default class GeneralInformation extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="firstName">First name</label>
        <br />
        <input id="firstName" type="text" />
      </form>
    );
  }
}
