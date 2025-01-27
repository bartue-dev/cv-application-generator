import "./EducationInfo.css"
import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus, mdiPencil } from '@mdi/js';
import { useContext, useEffect, useState } from "react";
import { EditEducationForm, EducationForm } from "./EducationForm"
import { appContext } from "../utils/AppContext";

function EducationInfo({ isActive, onShow }) {
  //showForm state. Hold a boolean value that show and not show the form base on the state value
  const [showForm, setShowForm] = useState(false);

  //educationData. Hold the data that is submitted by the user
  const [educationData, setEducationData] = useState([{
    school: "Harvard University",
    course: "Bachelor of Computer Science",
    year: "2006-2010",
    latinHonors: "Summa Cum Laude",
    description: "•Theoretical computer science, •Artificial intelligence, •Privacy and security, •Data management systems, •Computational linguistics",
    id: 1
  }]);

  //isEditForm, allows the user to open the specific edit form if edit button is clicked
  const [isEditForm, setIsEditForm] = useState(0);

  // console.log("Education Data: ", educationData)

  //import appContext then use it for useContext so it would pass the collected data from here to parent component
  const context = useContext(appContext);
  const setGetEducationData = context.setGetEducationData;

  //useEffect, use this hook so it would collect the data asynchronously cause state hook is asynchronous
  useEffect(() => {
    setGetEducationData(educationData)
  }, [setGetEducationData, educationData]);


  return (

    <div className="education-info">
      
      <div className="heading-container">
        <h1>Education</h1>
        <Icon path={mdiChevronDown} size={1} className="down-arrow" onClick={onShow} style={
          {display: isActive ? "none" : "block" }
        }/>
      </div>

      
      {isActive && (

        <>

          {educationData.map((info, index) => (
                <div
                  className="education-list"
                  key={index}
                >
                  {isEditForm === info.id ?

                  <EditEducationForm
                    {...info}
                    setIsEditForm={setIsEditForm}
                    educationData={educationData}
                    setEducationData={setEducationData}
                    index={index}
                  /> :
                    
                    <>
                      <div className="title-container">
                        <h2 className="education-title1">{info.school}</h2>
                        <h3 className="education-title2"> &#183; {info.course}</h3>
                      </div>

                      <button
                        className="edit-button"
                        /* update the isEditForm */
                        onClick={() => setIsEditForm(info.id)}
                      >
                        <Icon path={mdiPencil} size={1} />
                      </button>  
                      
                    </>
                  
                  }
        
                </div>
              )
          )}


          {showForm ?
          <EducationForm
            setShowForm={setShowForm}
            educationData={educationData}
            setEducationData={setEducationData}
            /> : 
          (
          <div className="add-education-container">

            <h2>Add Education</h2>
            
            <button onClick={(e) => {
              e.preventDefault()
              setShowForm(true)}
            }>
            <Icon path={mdiPlus} size={1} className="add-icon" />
            </button>

          </div>
          )}

        
        </>


      )}
     
    </div>
  )
}

export default EducationInfo