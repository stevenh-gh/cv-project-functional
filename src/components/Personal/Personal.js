import React, { useState } from "react";
import PersonalForm from "./PersonalForm/PersonalForm";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Personal = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
    setPersonalInfo({
      firstName: e.target.elements[0].value,
      lastName: e.target.elements[1].value,
      addressLineOne: e.target.elements[2].value,
      addressLineTwo: e.target.elements[3].value,
      city: e.target.elements[4].value,
      state: e.target.elements[5].value,
      postalCode: e.target.elements[6].value,
      email: e.target.elements[7].value,
      phone: e.target.elements[8].value,
    });
  };

  const edit = () => {
    // console.log("working");
    setFormVisible(!formVisible);
  };

  return (
    <>
      <PersonalForm
        submit={handleSubmit}
        isVisible={formVisible}
        info={personalInfo}
      />
      <PersonalInfo pInfo={personalInfo} visibility={formVisible} edit={edit} />
    </>
  );
};

export default Personal;
