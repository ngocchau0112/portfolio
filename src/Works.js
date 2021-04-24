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
            sequence={["Previous Works", 1000, "Previous Works"]}
            wrapper="h2"
            className="works-title"
          />
          <div className="works-list">
            <div className="row">
              <div className="col-lg-4 col-sm-6 text-center">
                <a href="https://unruffled-ramanujan-db4525.netlify.app/">
                  <div className="btn work-item">
                    <div className="h4">Vanilla Weather App</div>
                    <img src={vanillaApp} alt="Vanilla Weather App"></img>
                    <div className="description">
                      Weather Application coded using only Vanilla JavaScript
                      using Bootstrap with API integration
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6 text-center">
                <a href="https://sad-brown-6c9f30.netlify.app/">
                  <div className="btn work-item">
                    <div className="h4">React Weather App</div>
                    <img src={reactWeatherApp} alt="React Weather App"></img>
                    <div className="description">
                      Weather Application coded with ReactJS using Bootstrap
                      with API integration
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6 text-center">
                <a href="https://optimistic-neumann-4ec4f1.netlify.app/">
                  <div className="btn work-item">
                    <div className="h4">React Dictionary App</div>
                    <img src={dictionaryApp} alt="React Dictionary App"></img>
                    <div className="description">
                      Dictionary Application coded with ReactJS using Bootstrap
                      with API integration
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
