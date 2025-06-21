import useData from "../../hooks/useData";

export function Form({setShowForm}) {
  const {educationData, setEducationData} = useData();

  const handleSubmitEducation = (e) => {
    e.preventDefault();

    try {
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      data.id = educationData.length + 1;

      setEducationData(prev => [...prev, data])

      e.target.reset();
      alert("Education info added!")
      setShowForm(false)

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div>
      <form 
        className="input-container"
        onSubmit={handleSubmitEducation}
        >
        <h2>Add Education</h2>
        <label>
          School
          <input 
            type="text"
            name="school"
            id="school-id"
          />
        </label>

        <label>
          Course
          <input 
            type="text"
            name="course"
            id="course-id"
          />
        </label>

        <label htmlFor="description-id">Description</label>
        <textarea name="description" id="description-id"></textarea>

        <label>
          Year
          <input 
            type="text"
            name="year"
            id="year-id"
          />
        </label>

        <label>
          Latin Honors
          <input 
            type="text"
            name="latinHonors"
            id="latin-honors-id"
          />
        </label>

        <div className="button-container">
          <button
            type="button"
            className="cancel-button"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )

}

export function EditForm({
  school,
  course,
  description,
  year,
  latinHonors,
  setIsEditForm,
  index
}) {
  const {setEducationData} = useData();

  const handleUpdateEducation = (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      setEducationData(prev => (
        prev.map((item, i) => {
          return i === index ? {...item, ...data} : item
        })
      ))

      alert("Education info update!");
      setIsEditForm(false)

    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteEducation = (e) => {
    e.preventDefault()

    setEducationData(prev => (
      prev.filter((item, i) => {
        return i !== index
      })
    ))

    alert("Education info deleted!")
  }


  return (
    <div>
      <form 
        className="edit-input-container"
        onSubmit={handleUpdateEducation}
        >
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
        name="latinHonors" 
        id="latin-honors-id" 
        defaultValue={latinHonors}
        />
      </label>

      <div className="button-container">

        <button 
          type="button"
          className="delete-button"
          onClick={handleDeleteEducation}
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
    </div>
  )
}