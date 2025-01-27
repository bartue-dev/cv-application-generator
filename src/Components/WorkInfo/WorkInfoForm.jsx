export function WorkInfoForm({ setShowForm, workInfoData, setWorkInfoData, }) {

  //submit the form data to workInfoData state and handle(hold) the data
  function handleSubmitWorkInfo(e) {
    e.preventDefault();

    //uses FormData Api to collect all the data from the form inputs
    const workData = new FormData(e.target);
    const workDataDetails = Object.fromEntries(workData);

    //added an id that can be use as an key and for update
    workDataDetails.id = workInfoData.length + 1;

    //Add the new data
    setWorkInfoData((prev) => [...prev, workDataDetails]);
    
    e.target.reset();
    setShowForm(false)
  }

  return (
    <form className="input-container" onSubmit={handleSubmitWorkInfo}>
      <h2>Add Work Experience</h2>
      <label>
        Company
        <input type="text" name="company" id="company-id"/>
      </label>

      <label>
        Position
        <input type="text" name="position" id="position-id"/>
      </label>

      <label htmlFor="description-id">Description</label>
      <textarea name="description" id="description-id"></textarea>

      <label>
        Year
        <input type="text" name="year" id="year-id"/>
      </label>

      <label>
        Location
        <input type="text" name="location" id="location-id"/>
      </label>

      <div className="button-container">

          <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
          <button type="submit" className="submit-button">Submit</button>

      </div>
    </form>
  )
}

export function EditWOrkInfoForm({
  setIsEditForm,
  company,
  position,
  description,
  year,
  location,
  index,
  workInfoData,
  setWorkInfoData
}) {

  //updated function. uses a onSubmit event to updated the data. But it only update a specific data if work info data index and render index match
  function handleUpdateWorkInfoData(e) {
    e.preventDefault();
    
     //use the FormData Api that collect all the data form the form inputs
      const updatedData = new FormData(e.target);
      const updatedDataDetails = Object.fromEntries(updatedData);

      setWorkInfoData(prev => (
        //update a specific data if work info data index and render index match
        prev.map((item, i) => {
          //use spread syntax to update the data base on its key property meaning the name of the input is the key property of the data
          return i === index ? {...item, ...updatedDataDetails} : item
        })
      ))

      alert("Work Experience info updated")
      setIsEditForm(false)
  }

  //delete function. Delete specific data if render index and education data index match using filter method
  function handleDeleteWorkInfoData(e) {
    e.preventDefault();

    setWorkInfoData(
      workInfoData.filter((item, i) => {
        return i !== index
      })
    )

    alert("Work info deleted!")

  }

  return (
    <>
      <form className="edit-input-container" onSubmit={handleUpdateWorkInfoData}>
      <h2>Edit Work Experience</h2>
      <label>
        Company
        <input
          type="text"
          name="company"
          id="company-id"
          defaultValue={company}
          />
      </label>

      <label>
        Position
        <input
          type="text"
          name="position"
          id="position-id"
          defaultValue={position}/>
        </label>

      <label htmlFor="description-id">Description</label>
      <textarea
      name="description"
      id="description-id"
      defaultValue={description}

      ></textarea>

      <label>
        Year
        <input
        type="text"
        name="year" 
        id="year-id"
        defaultValue={year}/>
      </label>

      <label>
        Location
        <input 
          type="text" 
          name="location" 
          id="location-id"
          defaultValue={location} />
      </label>

      <div className="button-container">

        <button 
          type="button"
          className="delete-button"
          onClick={handleDeleteWorkInfoData}
        >
          Delete
        </button>

        <div className="button-item">
          <button
            type="button"
           className="cancel-button"
           onClick={() => setIsEditForm(false)}
           >
            Cancel
          </button>

          <button 
            type="submit"
            className="submit-button"
          >Save</button>
        </div>

      </div>
    </form>

   </>
  )
}