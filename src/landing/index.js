import React, { Component } from "react";
import NavbarComponent from "../component/NavbarComponent";
import FindComponent from "../component/FindComponent";

export default class Homepage extends Component {
  render() {
    return (
      <>
        <div className="container position-relative px-2">
          <NavbarComponent />
          <div className="">
            <FindComponent />
          </div>
        </div>
      </>
    );
  }
}
