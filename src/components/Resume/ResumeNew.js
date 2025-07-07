import React from "react";
import Particle from "../Particle";
import resumePDF from "../../Assets/Rishita_Badole_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeNew() {
  return (
    <div className="resume-section">
      <Particle />

      {/* Resume Download Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <a href={resumePDF} download target="_blank" rel="noopener noreferrer">
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
            }}
          >
            <AiOutlineDownload style={{ marginRight: "8px" }} />
            Download Resume
          </button>
        </a>
      </div>

      {/* Embedded PDF Viewer */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Document
          file={resumePDF}
          onLoadError={(error) => console.error("PDF load error:", error)}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default ResumeNew;
