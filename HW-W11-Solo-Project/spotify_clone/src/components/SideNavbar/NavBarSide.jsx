import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";

export default function NavBarSide() {
  return (
    <div className="pl-4 navbar-nav">
      <FontAwesomeIcon
        icon={faSpotify}
        className=" mb-5 spotify-icon color-light"
      />
      <h5 className="py-2 px-2 rounded onFocusNav">
        <FontAwesomeIcon icon={faHome} className="pr-4" />
        Home
      </h5>
      <h5 className="py-2 px-2 rounded onFocusNav">
        <FontAwesomeIcon icon={faSearch} className="pr-4" />
        Search
      </h5>
      <h5 className="py-2 px-2 rounded onFocusNav">
        <FontAwesomeIcon icon={faLinesLeaning} className="pr-4" /> Library
      </h5>
    </div>
  );
}
