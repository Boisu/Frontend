import React, { Component } from "react";
import NavbarComponent from "../component/NavbarComponent";
import ListComponent from "../component/ListComponent";
import FindComponent from "../component/FindComponent";
import ButtonComponent from "../component/ButtonComponent";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default class Homepage extends Component {
  render() {
    return (
      <>
        <div className="container position-relative px-2">
          <NavbarComponent />
          <div className="">
            <FindComponent />
            <ListComponent />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="position-absolute bottom-0 right-0 text-right mb-5">
            <ButtonComponent icon={<CheckIcon />} color="bg-success text-white" id="1"/>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center">
          <div className="position-absolute bottom-0 right-0 text-right mb-5">
            <ButtonComponent icon={<AddIcon />} color="bg-warning text-white" />
          </div>
        </div> */}
        <div className="d-flex justify-content-end">
          <div className="position-absolute bottom-0 right-0 text-right mb-5">
            <ButtonComponent icon={<ClearIcon />} color="bg-danger text-white" id="2"/>
          </div>
        </div>
      </>
    );
  }
}
