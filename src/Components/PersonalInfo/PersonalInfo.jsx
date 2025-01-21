import "./PersonalInfo.css";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { appContext } from "../utils/AppContext";
import { useContext, useState } from "react";

function PersonalInfo({ isActive, onShow}) {
  const context = useContext(appContext)

  const [personalInfoData, setPersonalInfoData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: ""
  });

  //console.log("personal info data",personalInfoData);
  
  function handleInputChange(e) {

    const newData = {
      ...personalInfoData,
      [e.target.name] : e.target.value
    }

    setPersonalInfoData(newData)

    context.updatedPersonalData(newData)
  }

  
  return (
    <div className="personal-info">
      <div className="heading-container">
        <h1>Personal Information</h1>
        <Icon path={mdiChevronDown} size={1} className="down-arrow" onClick={onShow} style={
          {display: isActive ? "none" : "block" }
        }/>
      </div>

      {
      isActive && ( 
      <form 
        className="input-container"
      >
        <h2>Add Personal Info</h2>
        
        <label>
          Name
          <input 
          type="text" 
          name="name" 
          id="name-id"
          value={personalInfoData.name}
          onChange={(e) => 
            handleInputChange(e)
          } 
          />
          
        </label>

        <label>
          Email
          <input 
          type="email" 
          name="email" 
          id="email-id"
          value={personalInfoData.email}
          onChange={(e) => handleInputChange(e)}
          />
          
        </label>

        <label>
          Phone #
          <input 
          type="tel" 
          name="phone" 
          id="phone-id"
          value={personalInfoData.phone}
          onChange={(e) => handleInputChange(e)}
          />
          
        </label>

        <label>
          Portfolio
          <input 
          type="tel" 
          name="portfolio" 
          id="portfolio-id"
          value={personalInfoData.portfolio}
          onChange={(e) => handleInputChange(e)}
          />
          
        </label>

      </form> ) 
      }
     
    </div>
  )
}

export default PersonalInfo