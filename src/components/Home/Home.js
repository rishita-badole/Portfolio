import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/wall.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  💌
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Rishita Badole </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              className="d-flex justify-content-center" // centers the image horizontally
              style={{ paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  width: "100%", // fills the column’s width
                  maxWidth: "320px", // you can tweak this up or down
                  height: "auto", // preserves aspect ratio
                  borderRadius: "10px",
                  objectFit: "contain", // shows the whole image—no cropping
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
