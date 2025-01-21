import "./CustomInfo.css";

function CustomInfo({
  inputValue,
  setInputValue,
  customInfoList,
  setCustomInfoList,
  customActiveIndex,
  setCustomActiveIndex
}) {
  return (
    <div className="custom-info">

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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
          <button 
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              if (inputValue === "") {
                alert("Invalid input")
              } else {
                setCustomActiveIndex(customActiveIndex + 1)
                setCustomInfoList([...customInfoList, {id: customInfoList.length++, customActiveIndex: customActiveIndex, inputValue}]);
  
                setInputValue("")
              }
            }}
            >Add</button>
        </div>
      </form>
      
    </div>
  )
}

export default CustomInfo