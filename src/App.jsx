import './App.css'
import FormComponent from "./Components/FormComponent/FormComponent"
import OutputComponent from "./Components/OutputComponent/OutputComponent"


function App() {

  // console.log("customTitle Data:", getCustomTitle);
  // console.log("custom list Data:", getCustomListData);
  

  return (
    <div className="app-container">
      <FormComponent />
      <OutputComponent/>
    </div>
  )
}

export default App
