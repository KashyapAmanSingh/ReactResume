import   { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useRouter from next/router
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PDFGenerator() {
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Function to navigate back to the previous page
  const goBackPage = () => {
    navigate(-1);

  };
  // Function to handle changes in the file name input
  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  // Function to generate a PDF from the HTML content
  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });

    if (typeof window !== "undefined") {
      const resumeContent = document.getElementById("resume-content");

            // Convert the resume content to an image using html2canvas
      html2canvas(resumeContent).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        // Add the image to the PDF
        pdf.addImage(imgData, "PNG", 0, 0, 210, 0);

        if (fileName) {
          pdf.save(fileName + ".pdf"); // Save the PDF with the specified file name

        }
      });
    }
  };

 
  return (
    <div className="my-5">
      <h4 className="mb-3 text-mute fs-2 ">Enter File Name</h4>
      <div className="container">
        <div className="row">
          <input
            type="text"
            placeholder="Enter PDF file name"
            value={fileName}
            onChange={handleFileNameChange}
          />

          <div className="d-flex justify-content-around my-3">
            <button
              className="btn btn-warning btn-block"
              onClick={generatePDF}
            >
              Generate PDF
            </button>

            <button
              className="btn btn-warning mx-4  "
              onClick={goBackPage}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFGenerator;
