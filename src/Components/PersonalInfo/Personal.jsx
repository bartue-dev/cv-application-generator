import useData from "../../hooks/useData";
import "./PersonalInfo.css";
import { ChevronDown } from 'lucide-react';

function Personal({isActive, onShow}) {
  const {personalData, setPersonalData} = useData();

  const handleInputChange = (e) => {
    const newData = {
      ...personalData,
      [e.target.name]: e.target.value
    }

    setPersonalData(newData)
  } 

  return (
   <div className="personal-info">
         <div className="heading-container">
           <h1>Personal Information</h1>
            <ChevronDown
              className="down-arrow" 
              onClick={onShow} 
              style={{display: isActive ? "none" : "block" }}
            />
         </div>
   
         {isActive 
          &&  <form 
                className="input-container"
              >
                <h2>Add Personal Info</h2>
                
                <label>
                  Name
                  <input 
                    type="text" 
                    name="name" 
                    onChange={(e) => handleInputChange(e)} 
                  />
                  
                </label>
        
                <label>
                  Email
                  <input 
                    type="email" 
                    name="email" 
                    onChange={(e) => handleInputChange(e)}
                  />
                  
                </label>
        
                <label>
                  Phone #
                  <input 
                    type="tel" 
                    name="phone" 
                    onChange={(e) => handleInputChange(e)}
                  />  
                </label>
        
                <label>
                  Address
                  <input 
                    type="text" 
                    name="address" 
                    onChange={(e) => handleInputChange(e)}
                  />
                  
                </label>
              </form>
          }  
       </div>
  )
}

export default Personal;