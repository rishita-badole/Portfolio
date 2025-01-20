import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import photoeditor from "../../Assets/Projects/photoeditor.jpg";
import recipe from "../../Assets/Projects/recipe.jpg";
import socialmedia from "../../Assets/Projects/socialmedia.jpg";
import studentg from "../../Assets/Projects/studentg.jpg";
import makeup from "../../Assets/Projects/makeup.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Personal Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on during my academics.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentg}
              isBlog={false}
              title="Student Grievance and Redressal system"
              description="The Student Grievance and Redressal System is a web-based platform designed to streamline the process of filing, tracking, and resolving student complaints. Developed using PHP, JavaScript, and MySQL, this system offers an intuitive interface for students to submit grievances and for administrators to manage and address them efficiently. The idea for this project originated from real-world observations of the challenges students face in communicating their issues within academic institutions, aiming to provide a transparent and effective solution."
              ghLink="https://github.com/rishita-badole/Student-Grievance-system.git"
              demoLink="http://127.0.0.1/project1/studentgrev/index.php"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoeditor}
              isBlog={false}
              title="Simple Photo Editor"
              description="The Simple Photo Editor is a web application designed to provide basic photo editing functionalities such as cropping, resizing, and applying filters. Built using HTML5, CSS, JavaScript, and Bootstrap, this user-friendly tool allows users to easily upload and modify images directly in the browser. The idea for this project stemmed from the need for a lightweight, accessible photo editing solution for quick and simple adjustments."
              ghLink="https://github.com/rishita-badole/Photo-editor-.git"
              demoLink="https://animated-dodol-b95dbe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmedia}
              isBlog={false}
              title="Social Media App"
              description="The Social Media App is a web application developed using React.js and Redux for state management. It offers core social media functionalities like user profiles, posts, comments, and likes. The app is designed to provide a seamless and interactive user experience, simulating real-world social networking platforms. The idea originated from the growing need to understand modern web development frameworks and their application in building scalable and dynamic web interfaces."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Web App"
              description="The Recipe Web App is a simple yet effective platform developed using JavaScript, HTML, and CSS. It allows users to search for recipes, save their favorites, and view detailed cooking instructions. The app was inspired by the real-world need for a digital solution to manage and explore a variety of recipes efficiently."
              ghLink="https://github.com/rishita-badole/forkify-proj.git"
              demoLink="https://resonant-alpaca-fb326b.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeup}
              isBlog={false}
              title="Beauty brand website"
              description="A sleek, minimalist beauty brand website built with HTML and CSS. It features a clean layout, intuitive navigation, and responsive design, showcasing products like skincare, makeup, and hair care in an elegant and user-friendly manner."
              ghLink="https://github.com/rishita-badole/website-for-beauty-brand.git"
              demoLink="https://unique-clafoutis-83d82b.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
