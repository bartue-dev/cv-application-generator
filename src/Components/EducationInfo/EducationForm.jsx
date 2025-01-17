
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
  setEducationData
  //onUpdate
   }) {

  function handleUpdateEducationData(e) {
    e.preventDefault();

    const updatedData = new FormData(e.target);
    const updatedDataDetails = Object.fromEntries(updatedData);

    setEducationData(prev => (
      prev.map((item, i) => {
        return i === index ? {...item, ...updatedDataDetails} : item
      })
    ))

    alert("Education Info Updated")
    setIsEditForm(false);
  }
 
  return (
   <>

      <form className="edit-input-container" onSubmit={handleUpdateEducationData}>
      <h2>Edit Education</h2>
      <label>
        School
        <input 
        type="text" 
        name="school" 
        id="school-id" 
        defaultValue={school}
        // onChange={(e) => onUpdate(index, "school" , e.target.value)}
        />
      </label>

      <label>
        Course
        <input 
        type="text" 
        name="course" 
        id="course-id" 
        defaultValue={course}
        // onChange={(e) => onUpdate(index, "course" , e.target.value)}
        />
        </label>

      <label htmlFor="description-id">Description</label>
      <textarea 
      name="description" 
      id="description-id" 
      defaultValue={description}
      // onChange={(e) => onUpdate(index, "description" , e.target.value)}
      ></textarea>

      <label>
        Year
        <input 
        type="text" 
        name="year" 
        id="year-id" 
        defaultValue={year}
        // onChange={(e) => onUpdate(index, "year" , e.target.value)}
        />
      </label>

      <label>
        Latin honors
        <input 
        type="text" 
        name="latin-honors" 
        id="latin-honors-id" 
        defaultValue={latinHonors}
        // onChange={(e) => onUpdate(index, "latinHonors" , e.target.value)}
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
