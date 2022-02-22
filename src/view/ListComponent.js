import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

export default class ListComponent extends Component {
  alertClicked() {
    alert("You clicked the third ListGroupItem");
  }

  componentDidMount() {
    const config = {};
    axios
      .get("https://boisu-api.mfaiztriputra.id/api/words", {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render(alertClicked) {
    return (
      <ListGroup variant="flush">
        <ListGroup.Item action onClick={alertClicked}>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item action onClick={alertClicked}>
          Porta ac consectetur ac
        </ListGroup.Item>
      </ListGroup>
    );
  }
}
