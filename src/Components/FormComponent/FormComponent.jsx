import "./FormComponent.css"
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import EducationInfo from "../EducationInfo/EducationInfo";
import WorkInfo from "../WorkInfo/WorkInfo"
import CustomInfo from "../AddMoreInfo/CustomInfo"
import CustomList from "./CustomList";
import { useState } from "react";

function FormComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputValue, setInputValue ] = useState("");
  const [customInfoList, setCustomInfoList] = useState([]);
  const [customActiveIndex, setCustomActiveIndex] = useState(3);

  console.log("custom list", customInfoList);

  return (
    <div className="form-component">
        <PersonalInfo 
          isActive={activeIndex === 0} 
          onShow={() => setActiveIndex(0)}
          />
        <EducationInfo 
          isActive={activeIndex === 1} 
          onShow={() => setActiveIndex(1)} />
        <WorkInfo 
          isActive={activeIndex === 2} 
          onShow={() => setActiveIndex(2)}/>

        {customInfoList.map((list, index) => (
           <CustomList 
            key={list.id}
            {...list}
            index={index}
            customInfoList={customInfoList}
            setCustomInfoList={setCustomInfoList}
            isActive={activeIndex === list.customActiveIndex}
            onShow={() => setActiveIndex(list.customActiveIndex)}
            />
        ))}

        <CustomInfo 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          customInfoList={customInfoList}
          setCustomInfoList={setCustomInfoList} 
          customActiveIndex={customActiveIndex}
          setCustomActiveIndex={setCustomActiveIndex}
          />
    </div>
  )
}

export default FormComponent