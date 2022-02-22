import React, { Component } from "react";
import { Container, Button, Link, lightColors, darkColors } from "react-floating-action-button";

export default class ButtonComponent extends Component {
  render() {
    return (
      <Container>
        <Link href="#" tooltip="Create note link" icon="fas fa-sticky-note" styles={{backgroundColor: darkColors.green, color: lightColors.yellow}} />
        <Link href="#" tooltip="Add user link" icon="fas fa-user-plus" className="fab-item btn btn-link btn-lg text-white" />
        <Link href="#" tooltip="Add user link" icon="fas fa-user-plus" className="fab-item btn btn-link btn-lg text-white" />
        <Link href="#" tooltip="Add user link" icon="fas fa-user-plus" className="fab-item btn btn-link btn-lg text-white" />
        <Button
          tooltip="The big plus button!"
          icon="fas fa-plus"
          rotate={true}
          onClick={() => alert("FAB Rocks!")}
        />
      </Container>
    );
  }
}
