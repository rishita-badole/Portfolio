import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  const googleDriveLink =
    "https://docs.google.com/document/d/17lln5IZylihjr2SFLMvBHo7KMKUePgubyPIEb90xm70/edit?usp=sharing"; // Replace with your Google Drive link
  const googleDrivePreview =
    "https://docs.google.com/document/d/17lln5IZylihjr2SFLMvBHo7KMKUePgubyPIEb90xm70/preview"; // Preview URL

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={googleDriveLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
            aria-label="Download CV"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <iframe
            src={googleDrivePreview}
            width={width > 786 ? "80%" : "100%"} // Adjust width for responsiveness
            height="1000px" // Increased height for better visibility
            style={{
              border: "none",
              borderRadius: "8px", // Optional: Add rounded corners for aesthetics
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Subtle shadow
              margin: "0 auto",
            }}
            title="Resume Preview"
          />
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={googleDriveLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
            aria-label="Download CV"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
