import "./FormComponent.css"
import Education from "../EducationInfo/Education";
import { useState } from "react";
import Work from "../WorkInfo/Work";
import Personal from "../PersonalInfo/Personal";
import Custom from "../AddMoreInfo/Custom";
import CustomList from "../AddMoreInfo/CustomList";
import useData from "../../hooks/useData";

function FormComponent() {
  const {customTitleList} = useData();
  //use for accordion. displays component one at a time base on the active index
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <div className="form-component">
      <Personal 
        isActive={activeIndex === 0} 
        onShow={() => setActiveIndex(0)}
        />
      <Education 
        isActive={activeIndex === 1} 
        onShow={() => setActiveIndex(1)} />
      <Work 
        isActive={activeIndex === 2} 
        onShow={() => setActiveIndex(2)}/>

      {customTitleList.map((list, index) => (
          <CustomList
          key={`${list.id}-${index}`}
          {...list}
          index={index}
          isActive={activeIndex === list.customActiveIndex}
          onShow={() => setActiveIndex(list.customActiveIndex)}
          />
      ))}

      <Custom/>

      {/* link of github */}
      <div className="create-by">
        <a 
          href="https://github.com/bartue-dev" 
          target="_blank"
          style={{color: "white", cursor: "pointer"}}
        >
        bartue.dev
        </a>
      </div>

    </div>
  )
}

export default FormComponent