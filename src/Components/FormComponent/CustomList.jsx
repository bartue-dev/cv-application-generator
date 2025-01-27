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

  //addCancelBtn state, hold a boolean value that allows user to not display the form if cancel button is clicked
  const [addCancelBtn, setAddCancelBtn] = useState(false);

  //isEditForm, allows the user to open the specific edit form if edit button is clicked
  const [isEditForm, setIsEditForm] = useState(0);
  
  //delete function. delete custom title list data
  function handleDeleteCustomTitleList(e) {
    e.preventDefault();

    setCustomTitleList(prev => (
      //delete one data if custom title index and render index match
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
          onClick={handleDeleteCustomTitleList}
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
          {/* uses reduce so it could filter the data base on the customTitle and render title and remain the original index that can be use for deletion and updating the custom list data. Then render the filtered data using map method */}
            {customListData
            .reduce((acc, curr, index) => {
              if (curr.customTitle === title) {
                //push the all the data using spread syntax if customTitle and render title match as well as its index
                acc.push({...curr, index})
              }
              return acc
            }, [])
            .map(list => (
              <div className="custom-list-data" key={list.id}>

                {
                  /* open a specific edit form if isEditForm is equal to list.id. Update the isEditForm using the onClick event pass on the edit button */
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
                      /* update the isEditForm */
                      onClick={() => setIsEditForm(list.id)}
                    >
                      <Icon path={mdiPencil} size={1} />
                    </button>  
                  </>
                  )
                }

                
              </div>
            ))}

            {
            /* if addCancelBtn state is true then do show the customInfoForm Component */
            addCancelBtn ? 
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
                  /* update the addCancelBtn to true if add button is clicked */
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