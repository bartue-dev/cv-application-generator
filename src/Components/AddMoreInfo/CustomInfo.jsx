import "./CustomInfo.css";

function CustomInfo({
  customTitleList,
  setCustomTitleList,
  customActiveIndex,
  setCustomActiveIndex
}) {

  //submit the title that is create by the user
  function handleSubmitTitleList(e) {
    e.preventDefault();

    //set custom active for accordion
    //so if new custom section added it allows to display the component one at a time
    setCustomActiveIndex(customActiveIndex + 1)

    //  //uses FormData Api to collect all the data from the form inputs
    const titleData = new FormData(e.target);
    const titleDataDetails = Object.fromEntries(titleData);

    //added an id that can be use as an key and for update
    titleDataDetails.id = customTitleList.length + 1

    //add the custom active index in the customTitle state
    titleDataDetails.customActiveIndex = customActiveIndex

    //add validation. If input title is empty or falsy it wont submit the data of the form
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