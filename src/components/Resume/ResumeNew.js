import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  const googleDriveLink = "https://docs.google.com/document/d/17lln5IZylihjr2SFLMvBHo7KMKUePgubyPIEb90xm70/edit?usp=sharing"; // Replace with your Google Drive link

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

        <Row className="resume">
          <iframe
            src="https://docs.google.com/document/d/17lln5IZylihjr2SFLMvBHo7KMKUePgubyPIEb90xm70/preview" // Replace with your Google Drive file preview URL
            width={width > 786 ? "80%" : "100%"}
            height="600"
            style={{
              border: "none",
              display: "block",
              margin: "0 auto",
            }}
            title="Resume"
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
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
