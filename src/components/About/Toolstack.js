// src/components/About/Toolstack.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGrammarly,
  SiGoogle,
  SiMicrosoftword,
  SiNotion,
  SiOpenai,
  SiVisualstudiocode,
  SiWindows,
  SiLinux,
  SiGoogleanalytics,
  // SiSemrush,
  SiWordpress,
  SiMedium,
  SiGoogledrive,
  // SiSurfer,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, label: "Windows" },
    { icon: <SiLinux />, label: "Linux" },
    { icon: <SiVisualstudiocode />, label: "VS Code" },
    { icon: <SiGrammarly />, label: "Grammarly" },
    { icon: <SiMicrosoftword />, label: "MS Word" },
    { icon: <SiNotion />, label: "Notion" },
    { icon: <SiOpenai />, label: "OpenAI" },
    { icon: <SiWordpress />, label: "WordPress" },
    { icon: <SiMedium />, label: "Medium" },
    { icon: <SiGoogledrive />, label: "Google Drive" },
    { icon: <SiGoogleanalytics />, label: "Google Analytics" },
  ];

  const skills = [
  "Research", "Presentation", "Analytical Thinking",
  "Time Management", "Collaboration", "Attention to Detail",
  "Creativity", "Problem Solving"
];

  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {tools.map((tool, index) => (
          <Col xs={4} md={2} className="text-center mb-4" key={index}>
            <div style={{ fontSize: "2.5em" }}>{tool.icon}</div>
            <div style={{ fontSize: "0.9em", marginTop: "5px" }}>
              {tool.label}
            </div>
          </Col>
        ))}
      </Row>

      <h4 className="pt-3">Skills</h4>
      <Row style={{ justifyContent: "center" }}>
        {skills.map((skill, index) => (
          <Col xs={6} md={3} className="mb-2 text-center" key={index}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "8px",
              }}
            >
              {skill}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Toolstack;
