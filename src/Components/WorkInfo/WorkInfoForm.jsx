export function WorkInfoForm({ onCancel, workInfoData, setWorkInfoData }) {

  function handleSubmitWorkInfo(e) {
    e.preventDefault();

    const workData = new FormData(e.target);
    const workDataDetails = Object.fromEntries(workData);

    workDataDetails.id = workInfoData.length + 1;

    setWorkInfoData((prev) => [...prev, workDataDetails]);
    
    e.target.reset();

  }

  console.log(workInfoData)
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

          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="submit-button">Submit</button>

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
  setWorkInfoData
}) {

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

        <button className="delete-button">Delete</button>

        <div className="button-item">
          <button
           className="cancel-button"
           onClick={() => setIsEditForm(false)}
           >
            Cancel
            </button>
          <button 
            className="submit-button"
          >Save</button>
        </div>

      </div>
    </form>

   </>
  )
}