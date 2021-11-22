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
    const { visibility } = this.props;

    return (
      <div className={!visibility ? "" : "hidden"}>
        <i className="fas fa-edit" data-testid="editbtn"></i>
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
