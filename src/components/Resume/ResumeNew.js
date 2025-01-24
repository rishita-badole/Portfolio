import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "src/Assets/Resume.pdf"; // Updated PDF path
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DownloadButton = ({ pdf }) => (
  <Button
    variant="primary"
    href={pdf}
    target="_blank"
    style={{ maxWidth: "250px" }}
    aria-label="Download CV"
  >
    <AiOutlineDownload />
    &nbsp;Download CV
  </Button>
);

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton pdf={pdf} />
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadError={(error) =>
              console.error("Error while loading PDF:", error)
            }
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton pdf={pdf} />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
