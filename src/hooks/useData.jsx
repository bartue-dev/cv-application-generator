import { useContext } from "react";
import DataContext from "../Context/DataContext";

function useData() {
  return useContext(DataContext)

} 

export default useData;