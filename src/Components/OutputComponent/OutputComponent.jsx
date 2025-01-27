import DownloadPdfBtn from "./DownloadPdfBtn"
import "./OutputComponent.css"

function OutputComponent({
  personalData,
  educationData,
  workData,
  customTitle,
  customListData
}) {

  /* render to all the data collected to the output (component) */
  return (
    <div className="output-component">

      {/* Import DownloadPdfBtn component and pass all the data as props */}
      <DownloadPdfBtn
        personalData={personalData}
        educationData={educationData}
        workData={workData}
        customListData={customListData}
        customTitle={customTitle}
      />

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
        {workData.map(list => (
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

      {customTitle.map((titleList) => {
      return (
      
        <div className="custom-list-info" key={titleList.id}>
          <div className="title-container">
            <h1> {titleList.title} </h1>
            <hr />  
          </div>
        
          {customListData
          .filter(list =>  list.customTitle === titleList.title ) 
          .map(list => (
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