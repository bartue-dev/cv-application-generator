import "./WorkInfo.css";
import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus, mdiPencil } from '@mdi/js';
import { useContext, useEffect, useState } from "react";
import { WorkInfoForm, EditWOrkInfoForm} from "./WorkInfoForm";
import { appContext } from "../utils/AppContext";

function WorkInfo({ isActive, onShow }) {
  //showForm state. Hold a boolean value that show and not show the form base on the state value
  const [showForm, setShowForm] = useState(false);

   //wornInfoDAta. Hold the data that is submitted by the user
  const [workInfoData, setWorkInfoData] = useState([{
    company: "Google",
    position: "Software Engineer",
    year: "2012-2015",
    location: "1600 Amphitheatre Parkway in Mountain View, California",
    description: "A highly skilled engineer who designs, develops, tests, and deploys innovative software solutions across a variety of Google products",
    id: 1
  }, {
    company: "Facebook",
    position: "Software Engineer",
    year: "2015-2020",
    location: "Menlo Park, Unites States of America",
    description: "Designs, Develops, Tests, and Modifies software applications and systems",
    id: 2
  }]);

  //isEditForm, allows the user to open the specific edit form if edit button is clicked
  const [isEditForm, setIsEditForm] = useState(0);
  
  // console.log(isEditForm);
  // console.log("Work info Data", workInfoData)

  //import appContext then use it for useContext so it would pass the collected data from here to parent component
  const context = useContext(appContext);
  const setGetWorkData = context.setGetWorkData;

  //useEffect, use this hook so it would collect the data asynchronously cause state hook is asynchronous
  useEffect(() => {
    setGetWorkData(workInfoData)
  }, [setGetWorkData, workInfoData])

  return (
    <div className="work-experience-info">
      <div className="heading-container">
        <h1>Work Experience</h1>
        <Icon path={mdiChevronDown} size={1} className="down-arrow" onClick={onShow} style={{display: isActive ? "none" : "block"}}/>
      </div>
      
      {isActive && (
        <>

          {workInfoData.map((info, index) => (

              <div
              className="work-info-list"
              key={info.id}
              >

              {isEditForm === info.id ?
               <EditWOrkInfoForm 
                {...info}
                setIsEditForm={setIsEditForm}
                workInfoData={workInfoData}
                setWorkInfoData={setWorkInfoData}
                index={index}
               /> :

              <>
                  <div className="title-container">
                    <h2 className="work-info-title1">{info.company}</h2>
                    <h3 className="work-info-title2"> &#183; {info.position}</h3>
                  </div>

                  <button
                    className="edit-button"
                    onClick={() => 
                      /* update the isEditForm */
                      setIsEditForm(info.id)
                    }
                  >
                    <Icon path={mdiPencil} size={1} />
                  </button> 

               </>

              }

              
                    
            </div>
            ))
          }          

          {
            showForm ? 
            <WorkInfoForm
             setShowForm={setShowForm}
             workInfoData={workInfoData}
             setWorkInfoData={setWorkInfoData}
            /> :
            <div className="add-work-experience-container">
  
              <h2>Add Work Experience</h2>
              
              <button onClick={() => setShowForm(true)}>
                <Icon path={mdiPlus} size={1} className="add-icon" />
              </button>
  
            </div>
          }
        </>
      )}
     
    </div>
  )
}

export default WorkInfo