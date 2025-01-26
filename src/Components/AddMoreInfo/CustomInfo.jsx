import "./CustomInfo.css";

function CustomInfo({
  customTitleList,
  setCustomTitleList,
  customActiveIndex,
  setCustomActiveIndex
}) {

  function handleSubmitTitleList(e) {
    e.preventDefault();

    setCustomActiveIndex(customActiveIndex + 1)

    const titleData = new FormData(e.target);
    const titleDataDetails = Object.fromEntries(titleData);

    titleDataDetails.id = customTitleList.length + 1
    titleDataDetails.customActiveIndex = customActiveIndex

    if (!titleDataDetails["title"]) {
      alert("Invalid Custom Title")
      return
    }

    setCustomTitleList(prev => [...prev , titleDataDetails]);

    e.target.reset();
  }


  return (
    <div className="custom-info" onSubmit={handleSubmitTitleList}>

      <form>
        <label htmlFor="title-id">
          Add Custom Section
        </label>
        
        <div className="input-container">
          <input 
            type="text" 
            name="title" 
            id="title-id" 
            placeholder="Add title"
            />
          <button 
            type="submit"
            >Add</button>
        </div>
      </form>
      
    </div>
  )
}

export default CustomInfo