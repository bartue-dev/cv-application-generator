import { PDFDownloadLink } from "@react-pdf/renderer"
import CvPdf from "./CvPdf"

function DownloadPdfBtn({ personalData, educationData, workData, customListData, customTitle}) {

  //style the download button
  const btnStyle = {
    fontFamily: "Work Sans",
    border: "transparent",
    borderRadius: "5px",
    backgroundColor: "#0284c7",
    padding: "8px",
    marginBottom: "10px",
    color: "white",
    cursor: "pointer"
  }

  return (
    /* uses PDFDownloadLink component that is built in react-pdf library that allows user to download a component as pdf */
    <PDFDownloadLink
      document={
        /* import CvPdf component and pass all the data as props. this will be the component that downloaded as a pdf */
        <CvPdf
          personalData={personalData}
          educationData={educationData}
          workData={workData}
          customListData={customListData}
          customTitle={customTitle}
        />
      }
      fileName="my-cv.pdf"
    >
      {/* button inside the react-pdf library PDFDownloadLink component */}
      <button style={btnStyle}>
        Download CV
      </button>
  </PDFDownloadLink>
  )
}

export default DownloadPdfBtn