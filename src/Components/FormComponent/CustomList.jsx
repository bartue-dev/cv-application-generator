import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus, mdiPencil, mdiDeleteCircle   } from '@mdi/js';
import { CustomInfoForm, EditCustomInfoForm } from "../AddMoreInfo/CustomInfoForm";
import { useState } from 'react';

function CustomList({
  title,
  isActive,
  onShow,
  setCustomTitleList,
  index,
  customListData,
  setCustomListData
}){
  const [addCancelBtn, setAddCancelBtn] = useState(false);
  const [isEditForm, setIsEditForm] = useState(0);
  
  function handleDeleteCustomInfoList(e) {
    e.preventDefault();

    setCustomTitleList(prev => (
      prev.filter((item, i) => {
        return i !== index
      })
    ))

    alert(`${title} Deleted`)
  }

  //console.log(`custom list ${inputValue}:` ,customListData);

  return (
    <div className="custom-list">

        <div className="heading-container">
          <h1>{ title }</h1>  
         

         <div className="icon-container">

          <Icon 
          path={mdiDeleteCircle}
          size={1.8}
          color="red"
          className="delete-icon"
          onClick={handleDeleteCustomInfoList}
          />

          <Icon 
            path={mdiChevronDown}  
            size={1} className="arrow-down" 
            style={{display: isActive ? "none" : "block"}}
            onClick={onShow}  
          />
         </div>
          
          
        </div>


      {isActive &&
        (
          <>
            {customListData
            .reduce((acc, curr, index) => {
              if (curr.customTitle === title) {
                acc.push({...curr, index})
              }
              return acc
            }, []).map(list => (
              <div className="custom-list-data" key={list.id}>

                {
                  isEditForm === list.id ? 
                  (
                    <EditCustomInfoForm 
                      {...list}
                      title={title}
                      isEditForm={isEditForm}
                      setIsEditForm={setIsEditForm}
                      customListData={customListData}
                      setCustomListData={setCustomListData}
                      index={list.index}
                    />
                  )
                  :
                  (
                  <>  
                    <div className="title-container">
                      <h2 className="custom-title1">{list.infoOne}</h2>
                      <h3 className="custom-title2"> &#183; {list.infoTwo}</h3>
                    </div>

                    <button
                      className="edit-button"
                      onClick={() => setIsEditForm(list.id)}
                    >
                      <Icon path={mdiPencil} size={1} />
                    </button>  
                  </>
                  )
                }

                
              </div>
            ))}

            {addCancelBtn ? 
              (
              <CustomInfoForm
                title={title}
                setAddCancelBtn={setAddCancelBtn}
                customListData={customListData}
                setCustomListData={setCustomListData}
              />
              )
              :
              (
              <div className="add-custom-container">
                <h2>Add Custom Info</h2>

                <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddCancelBtn(true)
                }}
                >
                  <Icon path={mdiPlus} size={1} className="add-icon" />
                </button>
              </div>
              )
            }
          </>    
        )
      }
    </div>
  )
}

export default CustomList