import React from "react";

export default function Credits() {
  return (
    <div className="credits">
      <p>
        {"//"}All websites were coded and designed by{" "}
        <a
          className="credit-links"
          href="https://github.com/ngocchau0112"
          target="_blank"
          rel="noreferrer"
        >
          Ngoc Chau
        </a>{" "}
        inspired by the{" "}
        <a
          className="credit-links"
          href="https://draculatheme.com/"
          target="_blank"
          rel="noreferrer"
        >
          Dracular theme
        </a>
        <br />
        {"//"}This website is{" "}
        <a
          className="credit-links"
          href="https://github.com/ngocchau0112/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </p>
    </div>
  );
}
