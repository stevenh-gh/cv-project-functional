import React from "react";

export default class PersonalInfo extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      addressLineOne,
      addressLineTwo,
      city,
      state,
      postalCode,
      email,
      phone,
    } = this.props.pInfo;
    const { formVisible } = this.props.visibility;

    return (
      <div className={!formVisible ? "" : "hidden"}>
        <div>
          {firstName} {lastName}
        </div>
        <div>
          <div>{addressLineOne}</div>
          <div>{addressLineTwo}</div>
          <div>
            {city}, {state} {postalCode}
          </div>
        </div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    );
  }
}
