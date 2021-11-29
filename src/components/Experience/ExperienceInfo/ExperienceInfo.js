import React from "react";

export default class ExperienceInfo extends React.Component {
  render() {
    const { company, position, responsibilities, fromYear, toYear } =
      this.props.eInfo;
    const { visibility } = this.props;

    return (
      <div className={!visibility ? "" : "hidden"} data-testid="educationinfo">
        <i
          className="fas fa-edit cursor-pointer"
          onClick={this.props.edit}
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
  }
}
