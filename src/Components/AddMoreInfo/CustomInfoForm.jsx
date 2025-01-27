export function CustomInfoForm({ 
  setAddCancelBtn,
  customListData,
  setCustomListData,
  title
}) {

  //submit the custom list data
  //customListData is a state of data that handle the information submitted by user
  //customListData is in the FormComponent(Parent Component of CustomInfo Component)
  function handleSubmitCustomListData(e) {
    e.preventDefault();

    //uses FormData Api to collect all the data from the form inputs
    const customData = new FormData(e.target);
    const customDataDetails = Object.fromEntries(customData);

    //added an id that can be use as an key and for update
    customDataDetails.id = customListData.length + 1;

    //added a customTitle that can be use for categories all the custom list data base on custom title
    customDataDetails.customTitle = title

    //Add the new data
    setCustomListData((prev) => [...prev, customDataDetails]);

    e.target.reset();
    setAddCancelBtn(false)
  }

  return (
    <form className="input-container" onSubmit={handleSubmitCustomListData}>
      <h2>Add Custom Info</h2>

      <label>
        Info # 1
        <input type="text" name="infoOne" />
      </label>

      <label>
        Info # 2
        <input type="text" name="infoTwo" />
      </label>

      <label htmlFor="description-id"> Description </label>
      <textarea type="text" name="description" id="description-id" />

      <label>
        Info # 3
        <input type="text" name="infoThree" />
      </label>

      <label>
        Info # 4
        <input type="text" name="infoFour" />
      </label>

      <div className="button-container">

          <button 
            type="button"
            className="cancel-button"
            onClick={(e) => {
              e.preventDefault();

              setAddCancelBtn(false)
            }}
          >
            Cancel
          </button>
          <button type="submit" className="submit-button">Submit</button>
          
      </div>

    </form>
  )
}

export function EditCustomInfoForm({ 
  title,
  setCustomListData,
  index,
  setIsEditForm,
  infoOne,
  infoTwo,
  infoThree,
  infoFour,
  description
}) {

  //updated function. uses a onSubmit event to updated the data. But it only update a specific data if custom list data index and render index match
  function handleUpdateCustomListData(e) {
    e.preventDefault();

    //use the FormData Api that collect all the data form the form inputs
    const updatedData = new FormData(e.target);
    const updatedDataDetails = Object.fromEntries(updatedData);

    setCustomListData(prev => (
      //update a specific data if custom list index and render index match
      prev.map((item, i) => {
      //use spread syntax to update the data base on its key property meaning the name of the input is the key property of the data
        return i === index ? {... item, ...updatedDataDetails} : item;
      })
    ))

    alert("Data updated")
    setIsEditForm(false)
  }

  //delete function. Delete specific data if render index and custom list data index match using filter method
  function handleDeleteCustomListData(e) {
    e.preventDefault();

    setCustomListData(prev => (
      prev.filter((item, i) => {
        return i !== index
      })
    ))

    alert(`${infoOne} and its info Deleted`)
  }


  return (
    <>
      <form className="edit-input-container" onSubmit={handleUpdateCustomListData}>
        <h2>Edit {title}</h2>
        <label>
          Info # 1
          <input 
          type="text" 
          name="infoOne" 
          defaultValue={infoOne}
          />
        </label>

        <label>
          Info # 2
          <input 
          type="text" 
          name="infoTwo" 
          defaultValue={infoTwo}
          />
        </label>

        <label htmlFor="description-id">Description</label>
        <textarea 
          name="description" 
          id="description-id" 
          defaultValue={description}
        ></textarea>

        <label>
          Info # 3
          <input 
          type="text" 
          name="infoThree" 
          defaultValue={infoThree}
          />
        </label>

        <label>
          Info # 4
          <input 
          type="text" 
          name="InfoFour" 
          defaultValue={infoFour}
          />
        </label>

        <div className="button-container">

          <button 
            type="button"
            className="delete-button"
            onClick={handleDeleteCustomListData}
          >
          Delete
          </button>

          <div className="button-item">
            <button 
              type="button"
              className="cancel-button"
              onClick={() => 
                //do not show edit form if isEditForm state is false
                setIsEditForm(false)}
              >
                Cancel
            </button>
            <button 
              type="submit"
              className="save-button"
            >Save</button>
          </div>

        </div>
    </form>
    </>
  )
}