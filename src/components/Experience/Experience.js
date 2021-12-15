import React, { useState } from "react";
import ExperienceForm from "./ExperienceForm/ExperienceForm";
import ExperienceInfo from "./ExperienceInfo/ExperienceInfo";

const Experience = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    fromYear: "",
    toYear: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
    setExperienceInfo({
      company: e.target.elements[0].value,
      position: e.target.elements[1].value,
      responsibilities: e.target.elements[2].value,
      fromYear: e.target.elements[3].value,
      toYear: e.target.elements[4].value,
    });
  };

  const edit = () => {
    // console.log("working");
    setFormVisible(!formVisible);
  };

  return (
    <>
      <ExperienceForm
        submit={handleSubmit}
        isVisible={formVisible}
        info={experienceInfo}
      />
      <ExperienceInfo
        eInfo={experienceInfo}
        visibility={formVisible}
        edit={edit}
      />
    </>
  );
};
export default Experience;
