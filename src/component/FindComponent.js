import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";

export default class FindComponent extends Component {
  render() {
    return (
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="type word here.. (soon)"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    );
  }
}
