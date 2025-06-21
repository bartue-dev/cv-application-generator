import "./WorkInfo.css";
import { useState } from "react";
import useData from "../../hooks/useData";
import { ChevronDown, SquarePen, CirclePlus } from 'lucide-react';
import { EditForm, Form } from "./Forms";


function Work({isActive, onShow}) {
  const {workInfoData} = useData();
  const [showForm, setShowForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(0);

  return (
    <div className="work-experience-info">
      <div className="heading-container">
        <h1>Work Experience</h1>
          <ChevronDown
            onClick={onShow}
            className="down-arrow"
            style={{display: isActive ? "none" : "block"}}
          />
      </div>

      {isActive
        &&  <>
              {workInfoData.map((info, i) => (
                <div key={i} className="work-info-list">
                  {isEditForm === info.id
                    ? <EditForm
                        {...info}
                        setIsEditForm={setIsEditForm}
                        index={i}
                      />
                    : <>
                        <div className="title-container">
                          <h2 className="work-info-title">{info.company}</h2>
                          <h3 className="work-info-title2">{info.position}</h3>
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
                : <div className="add-work-experience-container">
                    <h2>Add Work Experience</h2>
                    <button onClick={() => setShowForm(true)}>
                      <CirclePlus 
                      color="white"
                      className="add-icon"/>
                    </button>
                  </div>}
            </>}
    </div>
  )
}

export default Work;