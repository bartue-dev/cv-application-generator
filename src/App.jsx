import './App.css'
import { useState } from 'react'
import FormComponent from "./Components/FormComponent/FormComponent"
import OutputComponent from "./Components/OutputComponent/OutputComponent"
import { appContext } from './Components/utils/AppContext'


function App() {
  const [getPersonalData, setGetPersonalData] = useState([]);
  const [getEducationData, setGetEducationData] = useState([]);
  const [getWorkData, setGetWorkData] = useState([]);
  const [getCustomTitle, setGetCustomTitle] = useState([]);
  const [getCustomListData, setGetCustomListData] = useState([]);

  // console.log("customTitle Data:", getCustomTitle);
  // console.log("custom list Data:", getCustomListData);
  

  return (
    <div className="app-container">
      <appContext.Provider value={{
        setGetPersonalData,
        setGetEducationData,
        setGetWorkData,
        setGetCustomTitle,
        setGetCustomListData
        }}>
        <FormComponent />
      </appContext.Provider>

      <OutputComponent 
        personalData={getPersonalData}
        educationData={getEducationData}
        workData={getWorkData}
        customTitle={getCustomTitle}
        customListData={getCustomListData}
      />
    </div>
  )
}

export default App
