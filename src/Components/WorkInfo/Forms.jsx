import useData from "../../hooks/useData";

export function Form({setShowForm}) {
  const {workInfoData, setWorkInfoData} = useData();

  const handleSubmitWork = (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      data.id = workInfoData.length + 1

      setWorkInfoData(prev => [...prev, data])

      alert("Work info added!")
      e.target.reset();
      setShowForm(false)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form className="input-container" onSubmit={handleSubmitWork}>
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

          <button 
            type="button" 
            className="cancel-button" 
            onClick={() => setShowForm(false)}
            >
              Cancel
          </button>

          <button 
            type="submit" className="submit-button"
          >
            Submit
          </button>

        </div>
      </form>
    </div>
  )
}

export function EditForm({
  company,
  position,
  description,
  year,
  location,
  setIsEditForm,
  index
}) {
  const {setWorkInfoData} = useData();


  const handleUpdateWork = (e) => {
    e.preventDefault();
    console.log("UPDATE BUTTON")

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      setWorkInfoData(prev => (
        prev.map((item, i) => {
          return i === index ? {...item, ...data} : item
        })
      ))

      alert("Work info updated")
      setIsEditForm(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteWork = (e) => {
    e.preventDefault();

    try {
      
      setWorkInfoData(prev => (
        prev.filter((item, i) => {
          return i !== index
        })
      ))

      alert("Work info deleted!")

    } catch (error) {
      console.error(error)
    }
  }

  return(
    <div>
      <form className="edit-input-container" onSubmit={handleUpdateWork}>
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
          onClick={handleDeleteWork}
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
    </div>
  )
}

