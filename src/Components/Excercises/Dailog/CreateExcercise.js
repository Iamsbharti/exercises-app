import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default class extends Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  handleCreate = () => {
    console.log("Create excer");
  };
  render() {
    return (
      <Fragment>
        <Button variant="contained" mini onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Create a new Excercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill out the from</DialogContentText>
            <form />
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleCreate}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
