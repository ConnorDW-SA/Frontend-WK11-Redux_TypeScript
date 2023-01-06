import React from "react";
import "./NavBarTop.css";
import { Navbar, Nav, FormControl } from "react-bootstrap";
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBarTop() {
  return (
    <Navbar bg="dark" variant="dark" className="navbartop">
      <Navbar className="mr-auto">
        <Nav.Link href="#home">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </Nav.Link>

        <Nav.Link href="#pricing">
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </Nav.Link>
      </Navbar>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 w-25 rounded"
      />
    </Navbar>
  );
}
