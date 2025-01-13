import "./EducationInfo.css"
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

function EducationInfo({ isActive, onShow }) {
  return (
    <div className="education-info">
      <div className="heading-container">
        <h1>Education</h1>
        <Icon path={mdiChevronDown} size={1} className="down-arrow" onClick={onShow} style={{display: isActive ? "none" : "block" }} />
      </div>
      
      {isActive ? (
         <form className="input-container">
         <label>
           School
           <input type="text" name="school" id="school-id"/>
         </label>
 
         <label>
           Course
           <input type="text" name="course" id="course-id"/>
           </label>
 
         <label htmlFor="description-id">Description</label>
         <textarea name="description" id="description-id"></textarea>
 
         <label>
           Year
           <input type="text" name="year" id="year-id"/>
         </label>
 
         <label>
           Latin honors
           <input type="text" name="latin-honors" id="latin-honors-id"/>
         </label>
 
         <div className="button-container">
           <button className="delete-button">Delete</button>
           <div className="button-item">
             <button className="cancel-button">Cancel</button>
             <button className="submit-button">Submit</button>
           </div>
         </div>
       </form> ) : ("")
       }
     
    </div>
  )
}

export default EducationInfo