import { useState } from "react";
import useData from "../../hooks/useData";
import { ChevronDown, SquarePen, CirclePlus } from 'lucide-react';
import { Form, EditForm } from "./Forms";
import "./EducationInfo.css"

function Education({isActive, onShow}) {
  const {educationData} = useData();
  const [showForm, setShowForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(0);

  
  return (
    <div className="education-info">

      <div className="heading-container">
        <h1>Education</h1>
          <ChevronDown 
            className="down-arrow"
            onClick={onShow}
            style={{display: isActive ? "none" : "block"}}
          />
      </div>

      {isActive
        &&  <div>
              {educationData.map((info, i) => (
                <div key={i} className="education-list">

                  {isEditForm === info.id
                    ? <EditForm
                        {...info}
                        setIsEditForm={setIsEditForm}
                        index={i}
                      />
                    : <>
                        <div className="title-container">
                          <h2 className="education-title1"> {info.school} </h2>
                          <h3 className="education-title2">&#183; {info.course}</h3>
                        </div>
                        <button 
                            className="edit-button"
                            onClick={() => setIsEditForm(info.id)}
                          >
                            <SquarePen color="white"/>
                          </button>
                      </>}
                  </div>
                ))}

                {showForm
                  ? <Form
                      setShowForm={setShowForm}
                    />
                  : <div className="add-education-container">
                      <h2>Add Education</h2>
                      <button
                        onClick={() => setShowForm(true)}
                      >
                        <CirclePlus color="white"/>
                      </button>
                    </div>}
              </div>
        }
    </div>
  )
}

export default Education;