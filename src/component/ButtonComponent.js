import React, { Component } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export default class ButtonComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Fab className={this.props.color} aria-label="add">
          {this.props.icon}
        </Fab>
      </>
    );
  }
}
