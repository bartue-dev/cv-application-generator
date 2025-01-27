import "./FormComponent.css"
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import EducationInfo from "../EducationInfo/EducationInfo";
import WorkInfo from "../WorkInfo/WorkInfo"
import CustomInfo from "../AddMoreInfo/CustomInfo"
import CustomList from "./CustomList";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../utils/AppContext";

function FormComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [customTitleList, setCustomTitleList] = useState([{
    title: "Projects",
    customActiveIndex: 3,
    id: 1
  }, {
    title: "Skills",
    customActiveIndex: 4,
    id: 2
  }]);
  const [customListData, setCustomListData] = useState([{
    customTitle: "Projects",
    infoOne: "Fingerprint Voting System",
    infoTwo: "Google",
    infoThree: "2013-2014",
    infoFour: "Deployed",
    description: "•This project would require – 1 Voting System, a Fingerprint module, and an ARM (AdvancedRISC Machine) controller, •Paperless User Identification can be conducted after the introduction of fingerprint EVM which can save lots of time and resources, •In this project, both the candidates and the admin can view the results in real-time.",
    id: 1
  }, {
    customTitle: "Skills",
    infoOne: "Software Engineer",
    infoTwo: "Google",
    infoThree: "Testing",
    infoFour: "Object-Oriented Design (OOD)",
    description: "As a software engineer with experience at leading companies like Facebook and Google,I specialize in building scalable, high-performance systems using languages like Python,Java, and JavaScript, while expertly tackling complex problems and optimizing solutions. I’m passionate about collaboration, innovation, and leveraging the latest technologies to create impactful software that delivers exceptional user experiences.",
    id: 1
  }]);
  const [customActiveIndex, setCustomActiveIndex] = useState(3);

  console.log("custom title list:", customTitleList);

  const context = useContext(appContext);
  const setGetCustomTitle = context.setGetCustomTitle;
  const setGetCustomListData = context.setGetCustomListData;

  useEffect(() => {
    setGetCustomTitle(customTitleList);
    setGetCustomListData(customListData);
  }, [setGetCustomTitle, setGetCustomListData, customListData, customTitleList ])

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

      {customTitleList.map((list, index) => (
          <CustomList 
          key={list.id}
          {...list}
          index={index}
          customTitleList={customTitleList}
          setCustomTitleList={setCustomTitleList}
          customListData={customListData}
          setCustomListData={setCustomListData}
          isActive={activeIndex === list.customActiveIndex}
          onShow={() => setActiveIndex(list.customActiveIndex)}
          />
      ))}

      <CustomInfo 
        customTitleList={customTitleList}
        setCustomTitleList={setCustomTitleList} 
        customActiveIndex={customActiveIndex}
        setCustomActiveIndex={setCustomActiveIndex}
        />

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