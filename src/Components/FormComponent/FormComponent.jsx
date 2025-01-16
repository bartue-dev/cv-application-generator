import "./FormComponent.css"
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import EducationInfo from "../EducationInfo/EducationInfo";
import WorkInfo from "../WorkInfo/WorkInfo"
import AddMoreInfo from "../AddMoreInfo/AddMoreInfo"
import { useState } from "react";

function FormComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="form-component">
        <PersonalInfo isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}/>
        <EducationInfo isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} />
        <WorkInfo isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}/>
        <AddMoreInfo />
    </div>
  )
}

export default FormComponent