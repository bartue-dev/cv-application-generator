import "./PersonalInfo.css";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

function PersonalInfo({ isActive, onShow }) {

  return (
    <div className="personal-info">
      <div className="heading-container">
      <h1>Personal Information</h1>
      <Icon path={mdiChevronDown} size={1} className="down-arrow" onClick={onShow} style={{display: isActive ? "none" : "block" }} />
      </div>

      {
      isActive ? ( <form className="input-container">
      <label>
        Name
        <input type="text" name="name" id="name-id"/>
      </label>

      <label>
        Email
        <input type="email" name="email" id="email-id"/>
       </label>

      <label>
        Phone #
        <input type="tel" name="phone" id="phone-id"/>
      </label>

      <label>
        Portfolio
        <input type="tel" name="portfolio" id="portfolio-id"/>
      </label>

    </form> ) : ( "" )  
      }
     
    </div>
  )
}

export default PersonalInfo