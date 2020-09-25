import React, { Component } from "react";
import Logo from "../images/Logo.svg";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </nav>
    );
  }
}

export default Nav;
