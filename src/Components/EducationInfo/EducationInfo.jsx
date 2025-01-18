import "./EducationInfo.css"
import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus, mdiPencil } from '@mdi/js';
import { useState } from "react";
import { EditEducationForm, EducationForm } from "./EducationForm"

function EducationInfo({ isActive, onShow }) {
  const [addCancelBtn, setAddCancelBtn] = useState(false);
  const [educationData, setEducationData] = useState([]);
  const [isEditForm, setIsEditForm] = useState(0);

  console.log("Education Data: ", educationData)

  // function handleEducationDataChange(index, name, value) {
  //   const changeData = educationData.map((item, i) => {
  //     return i === index ? {...item, [name]: value} : item;
  //   })
    
  //   setEducationData(changeData)
  // }

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
                  //onUpdate={handleEducationDataChange}
                 /> :
                  
                  <>
                    <div className="title-container">
                    <h2 className="education-title1">{info.school}</h2>
                    <h3 className="education-title2"> &#183; {info.course}</h3>
                  </div>

                  <button
                    className="edit-button"
                    onClick={() => setIsEditForm(info.id)}
                  >
                    <Icon path={mdiPencil} size={1} />
                  </button>  
                    
                  </>
                 
                }
      
              </div>
            )
          )}


          {addCancelBtn ?
          <EducationForm
            onCancel={() => setAddCancelBtn(false)}
            educationData={educationData}
            setEducationData={setEducationData}
            /> : 
          (
          <div className="add-education-container">

            <h2>Add Education</h2>
            
            <button onClick={(e) => {
              e.preventDefault()
              setAddCancelBtn(true)}
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