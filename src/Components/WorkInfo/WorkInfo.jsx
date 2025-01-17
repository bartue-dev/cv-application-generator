import "./WorkInfo.css";
import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus, mdiPencil } from '@mdi/js';
import { useState } from "react";
import { WorkInfoForm, EditWOrkInfoForm} from "./WorkInfoForm";

function WorkInfo({ isActive, onShow }) {
  const [showForm, setShowForm] = useState(false);
  const [workInfoData, setWorkInfoData] = useState([]);
  const [isEditForm, setIsEditForm] = useState(0);
  
  // console.log(isEditForm);
  //console.log("Work info Data", workInfoData)
  

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
             onCancel={() => setShowForm(false)}
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