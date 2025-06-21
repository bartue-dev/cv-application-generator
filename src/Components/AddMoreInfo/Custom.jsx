import "./CustomInfo.css";
import useData from "../../hooks/useData";

function Custom() {
  const {customTitleList, setTitleList} = useData();

  const handleSubmitTitle = (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData);

      data.id = customTitleList.length + 1;
      data.customActiveIndex = customTitleList.length + 3

      if (!data["title"]) {
        alert("Invalid Custom Title")
        return
      }

      setTitleList(prev => [...prev, data]);

      e.target.reset();

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="custom-info">
      <form onSubmit={handleSubmitTitle}>
        <label htmlFor="title-id"> Add Custom Section</label>
        <div className="input-container">
          <input 
            type="text"
            name="title"
            id="title-id"
            placeholder="Add title"
          />

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Custom;
