import './App.css'
import { useState } from 'react'
import FormComponent from "./Components/FormComponent/FormComponent"
import OutputComponent from "./Components/OutputComponent/OutputComponent"
import { appContext } from './Components/utils/AppContext'


function App() {
  const [getPersonalData, setGetPersonalData] = useState([]);

  const updatedPersonalData = (data) => {
    setGetPersonalData(data)
  }

  console.log("Personal Data App comp:", getPersonalData);

  return (
    <>
    <div className="app-container">
      <appContext.Provider value={{updatedPersonalData}}>
        <FormComponent />
      </appContext.Provider>
      <OutputComponent personalData={getPersonalData} />
    </div>
    </>
  )
}

export default App
