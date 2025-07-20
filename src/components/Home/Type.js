import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Technical Content Writer",
          "Freelancer",
          "Orator",
          "Software Developer",
          "Tech Enthusiast",
          "Open Source Contributor",
          "Problem Solver"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
