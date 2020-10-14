import React from "react";

function About() {
  return (
    <div className="about">
      <h1 className="me">About Me</h1>
      <br />
      <p>Sabina Bojadžić</p>
      <p>Born: 09.09.1991.</p>
      <p>Web developer and Chemical engeneer</p>
      <p>Email: sabina-bojadzic@windowslive.com</p>
      <p>
        Github:{" "}
        <a href="https://github.com/sabina-bojadzic">
          https://github.com/sabina-bojadzic
        </a>
      </p>
      <p>
        My resume: {""}
        <a href="https://sabina-bojadzic.github.io/My-Resume/">
          https://sabina-bojadzic.github.io/My-Resume/
        </a>
      </p>
      <br />
      <br />
      <p>
        “Unless you try to do something beyond what you have already mastered,
        you will never grow.”― Ronald E. Osborn
      </p>
    </div>
  );
}

export default About;
