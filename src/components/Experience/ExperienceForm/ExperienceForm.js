import React from "react";
import Input from "../../Input/Input";

export default class ExperienceForm extends React.Component {
  render() {
    const { submit, isVisible, info } = this.props;
    const { company } = info.company;
    return (
      <form
        aria-label="form"
        onSubmit={submit}
        className={isVisible ? "" : "hidden"}
      >
        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-12">
            <Input id="company" text="Company" val={company} />
          </div>
          <div className="col-span-6">
            <Input id="position" text="Position at company" />
          </div>
          <div className="col-span-6">
            <Input id="responsiblities" text="Responsibilities" />
          </div>
          <div className="col-span-6">
            <Input id="fromYear" text="From year" />
          </div>
          <div className="col-span-6">
            <Input id="toYear" text="To year" />
          </div>
          <button
            className="col-span-2 col-start-6 py-1 bg-green-400 border-green-400 hover:border-green-500 hover:bg-green-500 text-sm border-4 text-white rounded mb-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
