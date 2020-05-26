import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default class extends Component {
  state = {
    open: false,
    excercise: {
      name: "",
      muscle: "",
      description: ""
    }
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
  handleChange = event => {
    const { name, value } = event.target;
    console.log(`${name}-${value}`);
    this.setState({
      excercise: {
        ...this.state.excercise,
        [name]: value
      }
    });
  };

  render() {
    const { name, muscle, description } = this.state.excercise;
    const { muscles: categories } = this.props;
    return (
      <Fragment>
        <Button variant="contained" onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Create a new Excercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill out the from</DialogContentText>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="name"
                label="Name"
                value={name}
                onChange={this.handleChange}
              />
              <br />
              <FormControl>
                <InputLabel>Muscle</InputLabel>
                <Select
                  name="muscle"
                  value={muscle}
                  onChange={this.handleChange}
                >
                  {categories.map(group => (
                    <MenuItem key={group} value={group}>
                      {group}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                name="description"
                label="Description"
                value={description}
                onChange={this.handleChange}
                multiline
                rows={4}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
