import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import InputForm from "./InputForm";


export default  class extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {muscles,onCreate}=this.props
    return (
      <Fragment>
        <Button variant="contained" onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Create a new Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill out the from</DialogContentText>
              <InputForm muscles={muscles} onCreate={onCreate} toggle={this.handleToggle}/>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
