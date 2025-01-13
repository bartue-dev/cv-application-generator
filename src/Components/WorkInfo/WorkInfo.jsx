import "./WorkInfo.css";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

function WorkInfo({ isActive, onShow }) {
  return (
    <div className="work-experience-info">
      <div className="heading-container">
        <h1>Work Experience</h1>
        <Icon path={mdiChevronDown} size={1} className="down-arrow" onClick={onShow} style={{display: isActive ? "none" : "block"}}/>
      </div>
      
      {isActive ? ( <form className="input-container">
        <label>
          Company
          <input type="text" name="company" id="company-id"/>
        </label>

        <label>
          Position
          <input type="text" name="position" id="position-id"/>
          </label>

        <label htmlFor="description-id">Description</label>
        <textarea name="description" id="description-id"></textarea>

        <label>
          Year
          <input type="text" name="year" id="year-id"/>
        </label>

        <label>
          Location
          <input type="text" name="location" id="location-id"/>
        </label>

        <div className="button-container">
          <button className="delete-button">Delete</button>
          <div className="button-item">
            <button className="cancel-button">Cancel</button>
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </form>) : ("")}
     
    </div>
  )
}

export default WorkInfo