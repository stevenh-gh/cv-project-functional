import React from "react";

const EducationInfo = (props) => {
  const { institution, fromYear, toYear, degree } = props.eInfo;
  const { visibility } = props;

  return (
    <div className={!visibility ? "" : "hidden"} data-testid="educationinfo">
      <i
        className="fas fa-edit cursor-pointer"
        onClick={props.edit}
        data-testid="editbtn"
      ></i>
      <div>{institution}</div>
      <div>
        {fromYear} - {toYear}
      </div>
      <div>{degree}</div>
    </div>
  );
};

export default EducationInfo;
