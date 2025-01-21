export function CustomInfoForm({ 
  setAddCancelBtn,
  customListData,
  setCustomListData,
}) {

  function handleSubmitCustomListData(e) {
    e.preventDefault();

    const customData = new FormData(e.target);
    const customDataDetails = Object.fromEntries(customData);

    customDataDetails.id = customListData.length + 1;

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
            className="cancel-button"
            onClick={(e) => {
              e.preventDefault();

              setAddCancelBtn(false)
            }}
          >
            Cancel
          </button>
          <button className="submit-button">Submit</button>
          
      </div>

    </form>
  )
}

export function EditCustomInfoForm({ 
  inputValue,
  setCustomListData,
  index,
  setIsEditForm,
  infoOne,
  infoTwo,
  infoThree,
  infoFour,
  description
}) {

  //updated function
  function handleUpdateCustomListData(e) {
    e.preventDefault();

    const updatedData = new FormData(e.target);
    const updatedDataDetails = Object.fromEntries(updatedData);

    setCustomListData(prev => (
      prev.map((item, i) => {
        return i === index ? {... item, ...updatedDataDetails} : item;
      })
    ))

    alert("Data updated")
    setIsEditForm(false)
  }

  //delete function
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
        <h2>Edit {inputValue}</h2>
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
            className="delete-button"
            onClick={handleDeleteCustomListData}
          >
          Delete
          </button>

          <div className="button-item">
            <button 
              className="cancel-button"
              onClick={() => setIsEditForm(false)}
              >
                Cancel
            </button>
            <button 
            className="save-button"
            //onClick={handleSaveUpdatedData}
            >Save</button>
          </div>

        </div>
    </form>
    </>
  )
}