import React from "react";
import TypeAnimation from "react-type-animation";
import vanillaApp from "./imgs/vanilla-weather-app.png";
import reactWeatherApp from "./imgs/react-weather-app.png";
import dictionaryApp from "./imgs/react-dictionary-app.png";

export default function Works() {
  return (
    <div className="previous-works">
      <div className="container works">
        <div id="works-link">
          <TypeAnimation
            cursor={true}
            sequence={["previousWorks()", 1000, "previousWorks()"]}
            wrapper="h2"
            className="works-title highlight"
          />
          <div className="works-list">
            <div className="row">
              <div className="col-lg-4 col-sm-6 text-center">
                <a
                  href="https://unruffled-ramanujan-db4525.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn work-item">
                    <div className="h4">
                      <span className="secondary">vanillaWeatherApp()</span>
                    </div>
                    <img src={vanillaApp} alt="Vanilla Weather App"></img>
                    <div className="description">
                      <span className="item">Weather Application</span> coded
                      using only{" "}
                      <span className="highlight">Vanilla JavaScript</span> and{" "}
                      <span className="highlight">Bootstrap</span> with{" "}
                      <span className="value">API integration</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6 text-center">
                <a
                  href="https://sad-brown-6c9f30.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn work-item">
                    <div className="h4">
                      <span className="secondary">reactWeatherApp()</span>
                    </div>
                    <img src={reactWeatherApp} alt="React Weather App"></img>
                    <div className="description">
                      <span className="item">Weather Application</span> coded
                      with <span className="highlight">ReactJS</span> using{" "}
                      <span className="highlight">Bootstrap</span> with{" "}
                      <span className="value">API integration</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6 text-center">
                <a
                  href="https://optimistic-neumann-4ec4f1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn work-item">
                    <div className="h4">
                      <span className="secondary">reactDictionaryApp()</span>
                    </div>
                    <img src={dictionaryApp} alt="React Dictionary App"></img>
                    <div className="description">
                      <span className="item">Dictionary Application</span> coded
                      with <span className="highlight">ReactJS</span> using{" "}
                      <span className="highlight">Bootstrap</span> with{" "}
                      <span className="value">API integration</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
