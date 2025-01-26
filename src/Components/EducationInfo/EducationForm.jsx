
export function EducationForm({ 
  setShowForm,
  educationData,
  setEducationData,
 }) {

  function handleSubmitEducation(e) {
    e.preventDefault()

    const educationInfo = new FormData(e.target)
    const educationInfoDetails = Object.fromEntries(educationInfo)

    educationInfoDetails.id = educationData.length+1;

    setEducationData((prev) => [...prev, educationInfoDetails])

    e.target.reset();
    setShowForm(false)
  }

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
            type="button"
           className="cancel-button" 
           onClick={() => setShowForm(false)}>
            Cancel
          </button>
          <button type="submit" className="submit-button">Submit</button>

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
  educationData,
  setEducationData
   }) {

  // Update function
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

  // Delete function
  function handleDeleteEducationData(e) {
    e.preventDefault();

    setEducationData(
      educationData.filter((item, i) => {
        return i !== index
      })
    )

    alert("Education info deleted!")

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
        />
      </label>

      <label>
        Course
        <input 
        type="text" 
        name="course" 
        id="course-id" 
        defaultValue={course}
        />
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
        defaultValue={year}
        />
      </label>

      <label>
        Latin honors
        <input 
        type="text" 
        name="latin-honors" 
        id="latin-honors-id" 
        defaultValue={latinHonors}
        />
      </label>

      <div className="button-container">

        <button 
          type="button"
          className="delete-button"
          onClick={handleDeleteEducationData}
        >
        Delete
        </button>

        <div className="button-item">
          <button 
            type="button"
            className="cancel-button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditForm(false)              
            }}
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
