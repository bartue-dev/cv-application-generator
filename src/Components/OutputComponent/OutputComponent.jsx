import "./OutputComponent.css"

function OutputComponent({personalData}) {
  return (
    <div className="output-component">

      <div className="cv-container">
        <h1>{personalData.name}</h1>
        <h1>{personalData.email}</h1>
        <h1>{personalData.phone}</h1>
        <h1>{personalData.portfolio}</h1>
      </div>

    </div>
  )
}

export default OutputComponent