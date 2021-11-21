import React from "react";

export default class Input extends React.Component {
  render() {
    const { id, text } = this.props;
    return (
      <>
        <label htmlFor={id}>{text}</label>
        <br />
        <input type="text" name="" id={id} />
        <br />
      </>
    );
  }
}
