import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  const googleDriveFileId = "17lln5IZylihjr2SFLMvBHo7KMKUePgubyPIEb90xm70"; // Your file ID
  const downloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
  const previewLink = `https://docs.google.com/document/d/${googleDriveFileId}/preview`;

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
  href={downloadLink} // Corrected download link
  target="_blank"
  style={{
    maxWidth: "250px",
    position: "relative",
    zIndex: 999, // Ensure the button is on top
    pointerEvents: "auto", // Ensure it's clickable
  }}
  aria-label="Download CV"
>
  <AiOutlineDownload />
  &nbsp;Download CV
</Button>

            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <iframe
            src={previewLink}
            width={width > 786 ? "80%" : "100%"}
            height="1460px"
            style={{
              border: "none",
              margin: "0 auto",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            title="Resume Preview"
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
