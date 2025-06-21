import { createContext, useState } from "react";

const DataContext = createContext({});

export function DataProvider({children}) {
  const [personalData, setPersonalData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [workInfoData, setWorkInfoData] = useState([]);
  const [customTitleList, setTitleList] = useState([]);


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
      }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;