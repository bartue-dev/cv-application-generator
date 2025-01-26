export function WorkInfoForm({ setShowForm, workInfoData, setWorkInfoData, }) {

  function handleSubmitWorkInfo(e) {
    e.preventDefault();

    const workData = new FormData(e.target);
    const workDataDetails = Object.fromEntries(workData);

    workDataDetails.id = workInfoData.length + 1;

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

  //update function
  function handleUpdateWorkInfoData(e) {
    e.preventDefault();
    
      const updatedData = new FormData(e.target);
      const updatedDataDetails = Object.fromEntries(updatedData);

      setWorkInfoData(prev => (
        prev.map((item, i) => {
          return i === index ? {...item, ...updatedDataDetails} : item
        })
      ))

      alert("Work Experience info updated")
      setIsEditForm(false)
  }

  //delete function
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