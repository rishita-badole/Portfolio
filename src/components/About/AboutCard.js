import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./About.css";

function AboutCard() {
  return (
    <Card className="quote-card-view about-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-text">
            Born in Maharashtra, sown and grown in
            <span className="purple"> Madhya Pradesh</span>, <br />
            <br />
            currently criticizing food and learning Marathi in
            <span className="purple"> Pune</span>.
            <br />
            <br />
            <br />I{" "}
            <b>
              <u>JUST</u>
            </b>{" "}
            wrapped up my MCA! The degree isn’t in hand yet, but the stress
            <span className="purple"> definitely is.</span>
            <br />
            <br />
            <br />
            Outside the world of tech and documentation,I like
          </p>
          <div className="activity-container">
            <div className="activity-box">
              <span>Owning the mic</span>
            </div>
            <div className="activity-box">
              <span>Jamming to music</span>
            </div>
            <div className="activity-box">
              <span>Getting lost in books [Quite literally]</span>
            </div>
          </div>

          <p className="about-quote">
            "If you can write it or say it well, you’ve already won half the
            game."
          </p>
          <footer className="blockquote-footer">Rishita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
