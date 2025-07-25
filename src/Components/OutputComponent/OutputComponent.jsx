import DownloadPdfBtn from "./DownloadPdfBtn"
import "./OutputComponent.css"
import useData from "../../hooks/useData";

function OutputComponent() {
  const {personalData, educationData, workInfoData, customTitleList} = useData();
  const {onShowSampleData, showSampleData} = useData();


  const btnStyle = {
    fontFamily: "Work Sans",
    border: "transparent",
    borderRadius: "5px",
    backgroundColor: "#08af5bff",
    padding: "8px",
    marginBottom: "10px",
    color: "white",
    cursor: "pointer",
    width: "110px"
  }

  /* render to all the data collected to the output (component) */
  return (
    <div className="output-component">

      {/* Import DownloadPdfBtn component */}
      <div className="dl-btn">
        <DownloadPdfBtn/>
        <button
          style={btnStyle}
          onClick={onShowSampleData}
        >
          <span>{showSampleData ? "Hide " : "Show "}</span>
          Sample
        </button>
      </div>
    
      <div className="cv-container">
        
        <div className="personal-info-output">
          <h1 className="name"> {personalData.name} </h1>
          <h2 className="phone"> {personalData.phone} </h2>
          <h2 className="address"> {personalData.address} </h2>
          <h2 className="email"> <u>{personalData.email} </u> </h2>
        </div>

      <div className="education-info-output" >
        <div className="title-container">
            <h1>Education</h1>
            <hr /> 
        </div>
        {educationData.map((list) => (
            <div className="education-list" key={list.id}>   
                <div className="left">
                  <p> <b> {list.school} </b> </p>
                  <p> {list.course} </p>
                </div>
                <div className="right">
                  <p> {list.year} </p>
                  <p> {list.latinHonors} </p>
                </div>
                <div className="last">
                  <p> {list.description} </p>
              </div>
            </div>
        ))}
      </div>
 
      <div className="work-info-output" >
        <div className="title-container">
          <h1>Work Experience</h1>
          <hr />
        </div>
        {workInfoData.map(list => (
            <div className="work-list" key={list.id}>
              <div className="left">
                <p> <b> {list.company} </b> </p>
                <p> {list.location} </p>
              </div>
              <div className="right">
                <p> {list.position} </p>
                <p> {list.year} </p>
              </div>
              <div className="last">
                <p> {list.description} </p>
              </div>
            </div>
        ))}
      </div>

      {customTitleList.map((list) => {
      return (
      
        <div className="custom-list-info" key={list.id}>
          <div className="title-container">
            <h1> {list.title} </h1>
            <hr />  
          </div>
        
          {list?.customListData?.map(list => (
            <div className="custom-list" key={list.id}>
              <div className="left">
                <p> <b> {list.infoOne} </b> </p>
                <p> {list.infoTwo} </p>
              </div>
              <div className="right">
                <p> {list.infoThree} </p>
                <p> {list.infoFour} </p>
              </div>
              <div className="last">
                <p> {list.description} </p>
              </div>
          </div> 
          ))}

        </div>
                
      )})}
        
      </div> 

    </div>
  )
}

export default OutputComponent