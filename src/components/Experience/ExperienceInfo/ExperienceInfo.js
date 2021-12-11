import React from "react";

const ExperienceInfo = (props) => {
  const { company, position, responsibilities, fromYear, toYear } = props.eInfo;
  const { visibility } = props;

  return (
    <div className={!visibility ? "" : "hidden"} data-testid="educationinfo">
      <i
        className="fas fa-edit cursor-pointer"
        onClick={props.edit}
        data-testid="editbtn"
      ></i>
      <div>{company}</div>
      <div>{position}</div>
      <div>{responsibilities}</div>
      <div>
        {fromYear} - {toYear}
      </div>
    </div>
  );
};

export default ExperienceInfo;
