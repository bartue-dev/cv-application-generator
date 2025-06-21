import useData from "../../hooks/useData"

export function Form({setShowForm, customListData, index}) {
  const {setTitleList} = useData();

  const handleSubmitCustomData = (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      data.id = customListData?.length + 1 || 1;

      setTitleList(prev => (
        prev.map((item, i) => {
          return i === index ? {...item, customListData: [...item.customListData || [],   data]} : item
        })
      ))

      e.target.reset();
      setShowForm(false)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form className="input-container" onSubmit={handleSubmitCustomData}>
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
        <textarea name="description" id="description-id" />

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
            type="button"
            className="cancel-button"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>

          <button type="submit" className="submit-button"> Submit </button>

        </div>
      </form>
    </div>
  )
}

export function EditForm({title, infoOne, infoTwo, infoThree, infoFour, description, index, customIndex, setIsEditForm}) {
  const {setTitleList} = useData();

  const handleUpdateCustomData = (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      setTitleList(prev => (
        prev.map((item, i) => {
          return i === index ? {...item,
            customListData: item.customListData.map((list, j) => {
              return j === customIndex ? {...list, ...data } : list
            })}
            : item
        })
      ))

      alert("Data updated!")
      setIsEditForm(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteCustomListData = (e) => {
    e.preventDefault();

    try {
      setTitleList(prev => (
        prev.map((item, i) => {
          return i === index ? {...item, customListData: item.customListData.filter((_, j) => j !== customIndex)} : item
        })
      ))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form 
        className="edit-input-container"
        onSubmit={handleUpdateCustomData}
      >
        <h2>Edit {title}</h2>

        <label>
          info # 1
          <input 
            type="text"
            name="infoOne"
            defaultValue={infoOne}
          />
        </label>

        <label>
          info # 2
          <input 
            type="text"
            name="infoTwo"
            defaultValue={infoTwo}
          />
        </label>

        <label htmlFor="description-id">Description</label>
        <textarea name="description" id="description-id" defaultValue={description}/>

        <label>
          info # 3
          <input 
            type="text"
            name="infoThree"
            defaultValue={infoThree}
          />
        </label>

        <label>
          info # 4
          <input 
            type="text"
            name="infoFour"
            defaultValue={infoFour}
          />
        </label>

        <div className="button-container">
          <button
            type="button"
            className="delete-button"
            onClick={handleDeleteCustomListData}
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

            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}