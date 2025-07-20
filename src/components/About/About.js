import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/wall1.jpg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "2px",
                paddingTop: "10px",
              }}
            >
              Rishita <strong className="purple">who?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{
                borderRadius: "16px", // Rounded corners
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)", // Soft shadow
                maxWidth: "100%", // Ensure it fits within the column
                height: "600px", // Maintain aspect ratio
                transition: "transform 0.3s ease-in-out", // Smooth hover effect
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
