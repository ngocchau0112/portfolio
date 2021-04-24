import React from "react";

export default function Credits() {
  return (
    <div className="credits">
      <p>
        //All websites were coded and designed by{" "}
        <a className="credit-links" href="https://github.com/ngocchau0112">
          Ngoc Chau
        </a>{" "}
        inspired by the{" "}
        <a className="credit-links" href="https://draculatheme.com/">
          Dracular theme
        </a>
        <br />
        //This website is{" "}
        <a
          className="credit-links"
          href="https://github.com/ngocchau0112/portfolio"
        >
          open-sourced on Github
        </a>
      </p>
    </div>
  );
}
