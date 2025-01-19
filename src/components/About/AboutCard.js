import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishita Badole </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />
            I am currently pursuing Master's in Computer Applications from
            Savitribai Phule Pune University.
            <br />
            I have completed graduation in the same from DAVV.
            <br />
            <br />
            Apart from programming, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Oratory and Presentation
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and Creating Content
            </li>
            <li className="about-activity">
              <ImPointRight /> Music and Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rishita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
