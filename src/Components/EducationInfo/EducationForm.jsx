
export function EducationForm({ 
  onCancel,
  educationData,
  setEducationData,
 }) {

  function handleSubmitEducation(e) {
    e.preventDefault()

    const educationInfo = new FormData(e.target)
    const educationInfoDetails = Object.fromEntries(educationInfo)

    educationInfoDetails.id = educationData.length+1;

    setEducationData((prev) => [...prev, educationInfoDetails])

    e.target.reset()
  }

  console.log(educationData)

  return (
    <form className="input-container" onSubmit={handleSubmitEducation}>
      <h2>Add Education</h2>
      <label>
        School
        <input type="text" name="school" id="school-id"/>
      </label>

      <label>
        Course
        <input type="text" name="course" id="course-id"/>
        </label>

      <label htmlFor="description-id">Description</label>
      <textarea name="description" id="description-id"></textarea>

      <label>
        Year
        <input type="text" name="year" id="year-id"/>
      </label>

      <label>
        Latin honors
        <input type="text" name="latinHonors" id="latin-honors-id"/>
      </label>

      <div className="button-container">

          <button
           className="cancel-button" 
           onClick={onCancel}>
            Cancel
          </button>
          <button className="submit-button">Submit</button>

      </div>
    </form>
  )
}

export function EditEducationForm({
  setIsEditForm,
  school, 
  course, 
  description, 
  year, 
  latinHonors,
  index,
  onUpdate
   }) {
 
  return (
   <>

      <form className="edit-input-container">
      <h2>Edit Education</h2>
      <label>
        School
        <input 
        type="text" 
        name="school" 
        id="school-id" 
        value={school}
        onChange={(e) => onUpdate(index, "school" , e.target.value)}
        />
      </label>

      <label>
        Course
        <input 
        type="text" 
        name="course" 
        id="course-id" 
        value={course}
        onChange={(e) => onUpdate(index, "course" , e.target.value)}
        />
        </label>

      <label htmlFor="description-id">Description</label>
      <textarea 
      name="description" 
      id="description-id" 
      value={description}
      onChange={(e) => onUpdate(index, "description" , e.target.value)}
      ></textarea>

      <label>
        Year
        <input 
        type="text" 
        name="year" 
        id="year-id" 
        value={year}
        onChange={(e) => onUpdate(index, "year" , e.target.value)}
        />
      </label>

      <label>
        Latin honors
        <input 
        type="text" 
        name="latin-honors" 
        id="latin-honors-id" 
        value={latinHonors}
        onChange={(e) => onUpdate(index, "latinHonors" , e.target.value)}
        />
      </label>

      <div className="button-container">

        <button className="delete-button">Delete</button>

        <div className="button-item">
          <button 
            className="cancel-button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditForm(false)              
            }}
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
