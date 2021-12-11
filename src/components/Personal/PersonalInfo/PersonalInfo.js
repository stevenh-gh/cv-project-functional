import React from "react";

const PersonalInfo = (props) => {
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
  } = props.pInfo;
  const { visibility } = props;

  return (
    <div className={!visibility ? "" : "hidden"} data-testid="personalinfo">
      <i
        className="fas fa-edit cursor-pointer"
        onClick={props.edit}
        data-testid="editbtn"
      ></i>
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
};
export default PersonalInfo;
