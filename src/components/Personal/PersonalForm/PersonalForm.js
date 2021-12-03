import React from "react";
import Input from "../../Input/Input";

export default class PersonalForm extends React.Component {
  render() {
    const { submit, isVisible, info } = this.props;
    const { firstName } = info.firstName;
    return (
      <form
        aria-label="form"
        onSubmit={submit}
        className={isVisible ? "" : "hidden"}
      >
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
            <Input id="firstName" text="First name" val={firstName} />
          </div>
          <div className="col-span-6">
            <Input id="lastName" text="Last name" />
          </div>
          <div className="col-span-12">
            <Input id="addressLineOne" text="Address line 1" />
          </div>
          <div className="col-span-12">
            <Input id="addressLineTwo" text="Address line 2" />
          </div>
          <div className="col-span-4">
            <Input id="city" text="City" />
          </div>
          <div className="col-span-4">
            <Input id="state" text="State" />
          </div>
          <div className="col-span-4">
            <Input id="postalCode" text="Postal code" />
          </div>
          <div className="col-span-6">
            <Input id="email" text="Email" />
          </div>
          <div className="col-span-6">
            <Input id="phone" text="Phone" />
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
