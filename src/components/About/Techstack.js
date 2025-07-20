import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  // SiJava,
  // SiSpring,
  SiJavascript,
  SiPython,
  SiPhp,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

function ProfessionalSkillset() {
  const webTechnologies = [
    { icon: <SiHtml5 />, label: "HTML5" },
    { icon: <SiCss3 />, label: "CSS3" },
    { icon: <SiBootstrap />, label: "Bootstrap" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <SiReact />, label: "React.js" },
    { icon: <SiAngular />, label: "Angular" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiPython />, label: "Python (Fundamentals)" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiPhp />, label: "PHP" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <Col xs={4} md={2} className="text-center mb-4" key={index}>
        <div style={{ fontSize: "2.8em" }}>{skill.icon}</div>
        <div style={{ fontSize: "0.9em", marginTop: "5px" }}>{skill.label}</div>
      </Col>
    ));

  return (
    <>
      <h4 className="text-center mt-4 mb-4">Web Technologies</h4>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {renderSkills(webTechnologies)}
      </Row>
    </>
  );
}

export default ProfessionalSkillset;
