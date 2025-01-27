import "./PersonalInfo.css";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { appContext } from "../utils/AppContext";
import { useContext, useEffect, useState } from "react";

function PersonalInfo({ isActive, onShow}) {
  const [personalInfoData, setPersonalInfoData] = useState({
    name: "Light Yagami",
    email: "lightyagami@gmail.com",
    phone: "03-1234-5678",
    address: "Tokyo, Japan"
  });

  //console.log("personal info data",personalInfoData);

  //import appContext then use it for useContext so it would pass the collected data from here to parent component
  const context = useContext(appContext);
  const setGetPersonalData = context.setGetPersonalData

  //useEffect, use this hook so it would collect the data asynchronously cause state hook is asynchronous
  useEffect(() => {
    setGetPersonalData(personalInfoData);
  }, [setGetPersonalData, personalInfoData])
  

  //Collect all the data from the inputs using onChange event. Every time use type to the input it updated the value of the name(key property)  of the state array of object. Also this allows to render the data to the page real time
  function handleInputChange(e) {

    const newData = {
      ...personalInfoData,
      [e.target.name] : e.target.value
    }

    setPersonalInfoData(newData)
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
          value={personalInfoData.email}
          onChange={(e) => handleInputChange(e)}
          />
          
        </label>

        <label>
          Phone #
          <input 
          type="tel" 
          name="phone" 
          value={personalInfoData.phone}
          onChange={(e) => handleInputChange(e)}
          />
          
        </label>

        <label>
          Address
          <input 
          type="text" 
          name="address" 
          value={personalInfoData.address}
          onChange={(e) => handleInputChange(e)}
          />
          
        </label>

      </form> ) 
      }
     
    </div>
  )
}

export default PersonalInfo