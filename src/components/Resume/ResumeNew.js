import React from "react";
import Particle from "../Particle";
import resumePDF from "../../Assets/Rishita_Badole_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div className="resume-section">
      <Particle />
      <div className="resume-container">
        <h1 className="project-heading">
          My <strong className="purple">Resume</strong>
        </h1>
        <p style={{ color: "white" }}>Download or view my resume here:</p>

        <div style={{ margin: "20px 0" }}>
          <a href={resumePDF} download className="btn btn-primary">
            <AiOutlineDownload style={{ marginRight: "10px" }} />
            Download Resume (PDF)
          </a>
        </div>

        <iframe
          src={resumePDF}
          title="Resume PDF"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}

export default ResumeNew;
