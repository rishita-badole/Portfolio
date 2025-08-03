import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { SiReact, SiAngular, SiNotion } from "react-icons/si";
import { FaBlog, FaRegFileAlt, FaChalkboardTeacher } from "react-icons/fa";

function getIcon(title = "", type = "") {
  const lower = `${title} ${type}`.toLowerCase();
  if (lower.includes("react")) return <SiReact size={24} color="#61DBFB" />;
  if (lower.includes("angular")) return <SiAngular size={24} color="#DD0031" />;
  if (type === "Blog") return <FaBlog size={20} />;
  if (type === "Article") return <FaRegFileAlt size={20} />;
  if (type === "Guest Post") return <FaChalkboardTeacher size={20} />;
  if (type.toLowerCase().includes("doc")) return <SiNotion size={20} />;
  return <FaRegFileAlt size={20} />;
}

function ProjectCard(props) {
  return (
    <Card
      className="project-card-view"
      style={{ height: "100%", padding: "10px" }}
    >
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex align-items-center mb-2">
          <div style={{ marginRight: "8px" }}>
            {getIcon(props.title, props.type)}
          </div>
          <div>
            <Card.Title style={{ fontSize: "1rem", marginBottom: 0 }}>
              {props.title}
            </Card.Title>
            <small className="text-muted">
             • {props.date} •
            </small>
          </div>
        </div>
        {/* <Card.Text
          style={{ textAlign: "justify", fontSize: "0.9rem", flexGrow: 1 }}
        >
          {props.description}
        </Card.Text> */}
        <div className="d-flex justify-content-between align-items-center mt-2">
          <small className="text-info">{props.status}</small>
          {props.demoLink && (
            <Button
              variant="outline-secondary"
              href={props.demoLink}
              target="_blank"
              size="sm"
            >
              <CgWebsite /> View
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
