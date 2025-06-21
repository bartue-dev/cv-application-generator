import { useState } from "react";
import useData from "../../hooks/useData";
import { ChevronDown, SquarePen, CirclePlus, Trash2 } from 'lucide-react';
import { EditForm, Form } from "./Forms";

function CustomList({title, customListData, index, isActive, onShow}) {
  const {setTitleList} = useData();
  const [showForm, setShowForm] = useState(false);
  const [isEditForm, setIsEditForm] = useState(0);

  const handleDeleteTitle = (e) => {
    e.preventDefault();

    try {
      setTitleList(prev => (
        prev.filter((item, i) => {
          return i !== index
        })
      ))

      alert(`${title} Deleted`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="custom-list">
      <div className="heading-container">
        <h1>{title}</h1>

        <div className="icon-container">
          <Trash2
            color="red"
            className="delete-icon"
            onClick={handleDeleteTitle}
          />
          <ChevronDown
            className="arrow-down"
            style={{display: isActive ? "none" : "block"}}
            onClick={onShow}
          />
        </div>
      </div>

      {isActive
        &&  <>
              {customListData?.map((list, i) => (
                <div key={list.id} className="custom-list-data">

                  {isEditForm === list.id
                    ? <EditForm
                        {...list}
                        setIsEditForm={setIsEditForm}
                        index={index}
                        customIndex={i}
                      />
                    : <>
                        <div className="title-container">
                          <h2 className="custom-title-1">{list.infoOne}</h2>
                          <h3 className="custom-title2">&#183; {list.infoTwo}</h3>
                        </div>

                        <button 
                          className="edit-button"
                          onClick={() => setIsEditForm(list.id)}  
                        >
                          <SquarePen color="white"/>
                        </button>
                      </>}
                </div>
              ))}

              {showForm
                ?  <>
                    <Form
                      setShowForm={setShowForm}
                      customListData={customListData}
                      index={index}
                    />
                    </>
                : <div className="add-custom-container">
                    <h2>Add Custom Info</h2>

                    <button
                      onClick={() => setShowForm(true)}
                    >
                      <CirclePlus 
                        color="white"
                        className="add-icon"  
                      />
                    </button>
                  </div>}
            </>}
    </div>
  )
}

export default CustomList;