import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Rishita Badole</span> — born in
            <span className="purple"> Madhya Pradesh</span>, currently based in
            <span className="purple"> Pune</span>.
            <br />
            I *just* wrapped up my Master’s in Computer Applications from
            Savitribai Phule Pune University, the degree isn’t in hand yet, but the stress definitely is.
            <br />
            Before that, I earned my BCA from DAVV, because apparently I enjoy structured chaos and project deadlines.
            <br />
            <br />
            Outside the world of tech and documentation, I’ve got a flair for the dramatic (in a good way). Here’s what lights me up:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Owning the mic (Oratory & Presentations)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing content that’s equal part of clear and worth reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Jamming to music & getting lost in books (sometimes intentionally)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you can write it or say it well, you’ve already won half the game."
          </p>
          <footer className="blockquote-footer">Rishita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
