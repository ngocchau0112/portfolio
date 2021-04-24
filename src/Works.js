import React from "react";
import TypeAnimation from "react-type-animation";

export default function Works() {
  return (
    <div className="works">
      <div className="container">
        <div id="works-link">
          <TypeAnimation
            cursor={true}
            sequence={["Previous Works", 1000, "Previous Works"]}
            wrapper="h2"
            className="works-title"
          />
          <div className="works-list">
            <div className="row">
              <div className="col-sm-4">
                <h4>Vanilla Weather App</h4>
                <img src="" alt="Vanilla Weather App"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
