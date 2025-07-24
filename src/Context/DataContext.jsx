import { createContext, useEffect, useState } from "react";
import { personal, education, workInfo, customTitle } from "../Components/data/data";

const DataContext = createContext({});

export function DataProvider({children}) {
  const [showSampleData, setShowSampleData] = useState(true);
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState([]);
  const [workInfoData, setWorkInfoData] = useState([]);
  const [customTitleList, setTitleList] = useState([]);

  useEffect(() => {
    if (showSampleData === true) {
      setPersonalData(personal);
      setEducationData(education);
      setWorkInfoData(workInfo);
      setTitleList(customTitle);
    } else {
      setPersonalData({});
      setEducationData([]);
      setWorkInfoData([]);
      setTitleList([]);
    }
  }, [showSampleData])

  const onShowSampleData = () => {
    setShowSampleData(prev => !prev);
  }


  return (
    <DataContext.Provider value={{
      personalData,
      setPersonalData,
      educationData,
      setEducationData,
      workInfoData,
      setWorkInfoData,
      customTitleList, 
      setTitleList,
      showSampleData,
      onShowSampleData
      }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;