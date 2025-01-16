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

export function EditWOrkInfoForm({ setIsEditForm }) {

  return (
    <>
      <form className="edit-input-container" >
      <h2>Edit Work Experience</h2>
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

        <button className="delete-button">Delete</button>

        <div className="button-item">
          <button
           className="cancel-button"
           onClick={() => setIsEditForm(false)}
           >
            Cancel
            </button>
          <button className="submit-button">Submit</button>
        </div>

      </div>
    </form>

   </>
  )
}