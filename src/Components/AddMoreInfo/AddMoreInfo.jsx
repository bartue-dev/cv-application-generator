import "./AddMoreInfo.css";

function AddMoreInfo() {
  return (
    <div className="add-more-info">

      <form>
        <label htmlFor="title-id">
          Add Custom Section
        </label>
        
        <div className="input-container">
          <input type="text" name="title" id="title-id" placeholder="Add title" />
          <button type="submit">Add</button>
        </div>
      </form>
      
    </div>
  )
}

export default AddMoreInfo