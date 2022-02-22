import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

export default class NavbarComponent extends Component {
  render() {
    return (
      <>
        <Navbar bg="" variant="light" sticky="top">
          <Container className="justify-content-center">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="../boisu.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}
