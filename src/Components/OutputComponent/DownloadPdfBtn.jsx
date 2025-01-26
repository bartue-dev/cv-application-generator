import { PDFDownloadLink } from "@react-pdf/renderer"
import CvPdf from "./CvPdf"

function DownloadPdfBtn({ personalData, educationData, workData, customListData, customTitle}) {


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
    <PDFDownloadLink
    document={
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
    <button style={btnStyle}>
      Download CV
    </button>
  </PDFDownloadLink>
  )
}

export default DownloadPdfBtn