import React from "react";
import { useState } from "react/cjs/react.development";
import EducationForm from "./EducationForm/EducationForm";
import EducationInfo from "./EducationInfo/EducationInfo";

const Education = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [educationInfo, setEducationInfo] = useState({
    institution: "",
    fromYear: "",
    toYear: "",
    degree: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
    setEducationInfo({
      institution: e.target.elements[0].value,
      fromYear: e.target.elements[1].value,
      toYear: e.target.elements[2].value,
      degree: e.target.elements[3].value,
    });
  };

  const edit = () => {
    // console.log("working");
    setFormVisible(!formVisible);
  };

  return (
    <>
      <EducationForm
        submit={handleSubmit}
        isVisible={formVisible}
        info={educationInfo}
      />
      <EducationInfo
        eInfo={educationInfo}
        visibility={formVisible}
        edit={edit}
      />
    </>
  );
};
export default Education;
