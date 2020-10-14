import React from "react";
import { Navbar } from "react-bootstrap";

function Nav() {
  return (
    <div>
      <Navbar className="nav">
        <Navbar.Brand clssName="navBrand" href="#home">
          <img
            className="image"
            src="https://avatars2.githubusercontent.com/u/60239169?s=460&u=1c0a81dd9225f2194e2dabc24057905219aa7ed0&v=4"
            alt=""
          />
          Welcome to my Website
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Copyright:{" "}
            <a href="https://github.com/sabina-bojadzic">
              Sabina Bojadžić 2020
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Nav;
