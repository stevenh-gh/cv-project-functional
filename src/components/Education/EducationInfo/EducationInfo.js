import React from "react";

export default class EducationInfo extends React.Component {
  render() {
    const { institution, fromYear, toYear, degree } = this.props.eInfo;
    const { visibility } = this.props;

    return (
      <div className={!visibility ? "" : "hidden"} data-testid="educationinfo">
        <i
          className="fas fa-edit cursor-pointer"
          onClick={this.props.edit}
          data-testid="editbtn"
        ></i>
        <div>{institution}</div>
        <div>
          {fromYear} - {toYear}
        </div>
        <div>{degree}</div>
      </div>
    );
  }
}
