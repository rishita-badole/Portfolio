import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";

const offerings = [
  // ✍️ Writing Services
  "Articles",
  "Blogs",
  "Social Media Posts",
  "Service Pages",
  "Landing Pages",
  "Guest Posts",
  "Product Reviews",
  "Case Studies",
  "Whitepapers",
  "Scripts",

  // 📘 Technical Writing
  "Technical Manuals",
  "API Documentation",
  "User Manuals / Guides",
  "FAQs",
  "SOPs",
  "Test Cases",
  "UX Writing",

  // 📚 Educational & Academic
  "Courses",
  "Academic Content",

  // 🔧 Content Services & Strategy
  "Content Strategy",
  "Content Planning",
  "SEO Content",
  "Content Audits",
  "Content Editing",
  "Proofreading",
  "Reoptimization",
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Row 1: Intro and Avatar */}
        <Row>
          <Col md={8} className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
              GET TO <span className="purple"> KNOW </span> ME
            </h1> */}
            <p className="home-about-body">
              I enjoy storytelling, be it about a product, a feature, or a bug
              that magically disappeared before the second look.
              <br />
              <br />
              I'm currently working as a{" "}
              <i>
                <b className="purple">Technical Content Writer</b>
              </i>{" "}
              at a{" "}
              <i>
                <b className="purple">B2B SAAS organization</b>
              </i>
              , where I turn complex tech into content that actually makes sense
              (and sometimes even gets read).
              <br />
              <br />
              Background in development wanted me to fall for programming, I
              still ended up loving writing.{" "}
              <i>
                <b className="purple">
                  Explaining things simply, clearly, and in a way that doesn't
                  put people to sleep
                </b>
              </i>{" "}
              – that’s my kind of challenge.
              <br />
              <br />
              <i>
                <b className="purple">
                  If a subject needs clarity, I’m usually hovering nearby with a
                  keyboard.
                </b>
              </i>{" "}
              <br />
              <br />
              And when I’m not writing, you’ll find me reading, listening, or
              quietly rephrasing things in my head (force of habit).
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Row 2: Offerings */}
        <h4 className="pt-4 text-center" style={{ color: "#f0f0f0" }}>
          {" "}
          What's on the plate?
        </h4>
        <Row style={{ justifyContent: "center" }}>
          {offerings.map((item, index) => (
            <Col xs={6} md={3} className="mb-2 text-center" key={index}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "8px",
                  color: "#f0f0f0",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  fontWeight: "500",
                }}
              >
                {item}
              </div>
            </Col>
          ))}
        </Row>

        {/* Row 3: Social Links */}
        <Row>
          <Col md={12} className="home-about-social pt-4">
            {/* <h1> </h1> */}
            <p>
              Let's <span className="purple">get </span> in touch
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://medium.com/@rishitabadole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/rishita-badole"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rishita-badole-446541211/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rishitaaa_04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
