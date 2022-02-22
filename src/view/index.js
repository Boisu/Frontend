import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import ListComponent from "./ListComponent";
import FindComponent from "./FindComponent";
import ButtonComponent from "./ButtonComponent";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <NavbarComponent />
        <div className="container mt-4">
          <FindComponent />
          <ListComponent />
        </div>
        <div className="text-center">
          <ButtonComponent />
        </div>
      </div>
    );
  }
}
