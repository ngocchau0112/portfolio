import React from "react";
import TypeAnimation from "react-type-animation";
import TextLoop from "react-text-loop";
import Works from "./Works";

export default function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <h2 className="hello">Hello, I am</h2>
        <TypeAnimation
          cursor={true}
          sequence={["Ngoc Le Thao Chau", 1000, "Ngoc Chau"]}
          wrapper="h1"
        />
        <h3>
          Front-end Developer and Designer based in Ho Chi Minh City, Vietnam
        </h3>
        <h2>
          My main passion is to draw, but I started to learn coding on March
          2021 and fell in love with{" "}
          <TextLoop
            springConfig={{ stiffness: 180, damping: 8 }}
            children={[
              "HTML",
              "CSS",
              "JavaScript",
              "ReactJS",
              "NodeJS",
              "Bootstrap",
            ]}
          />
        </h2>
        <div className="links">
          <a href="mailto:ngocchau0112@gmail.com">
            <div className="btn">Contact me</div>
          </a>
          <a href="#works-link">
            <div className="btn">Previous Works</div>
          </a>
        </div>
      </div>

      <Works />
    </div>
  );
}
