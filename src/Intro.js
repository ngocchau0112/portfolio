import React from "react";
import TypeAnimation from "react-type-animation";
import TextLoop from "react-text-loop";

export default function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <h2 className="hello secondary">helloIAm()</h2>
        <TypeAnimation
          cursor={true}
          sequence={["{Ngoc Le Thao Chau}", 1000, "{Ngoc Chau}"]}
          wrapper="h1"
        />
        <h3>
          <span className="secondary">frontEndDeveloper()</span>{" "}
          <span className="highlight">&&</span>{" "}
          <span className="secondary">designer()</span> based in{" "}
          <span className="item">Ho Chi Minh City()</span>,
          <span className="value">Vietnam</span>
        </h3>
        <h2>
          My main passion is <span className="item">drawing</span>, but I
          started <span className="item">learning coding</span> on{" "}
          <span className="value">March 2021</span> and fell in love with{" "}
          <span className="highlight">
            <TextLoop
              springConfig={{ stiffness: 180, damping: 8 }}
              children={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "NodeJS",
                "Bootstrap",
                "Flexbox",
                "Visual Studio Code",
                "GitHub",
              ]}
            />
          </span>
        </h2>
        <div className="links">
          <a href="mailto:ngocchau0112@gmail.com">
            <div className="btn secondary">Contact me</div>
          </a>
          <a href="#works-link">
            <div className="btn secondary">Previous Works</div>
          </a>
        </div>
      </div>
    </div>
  );
}
