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
  MenuItem,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default class extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      muscles: "",
      description: "",
    },
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
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value,
      },
    });
  };
  handleSubmit = () => {
    this.setState({
      open: false,
    });
    const { exercise } = this.state;
    this.props.onCreate(exercise);
    this.setState({
      exercise: {
        title: "",
        muscles: "",
        description: "",
      },
    });
  };

  render() {
    const { title, muscles, description } = this.state.exercise;
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
            <form>
              <TextField
                name="title"
                label="Title"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <FormControl>
                <InputLabel>Muscle</InputLabel>
                <Select
                  name="muscles"
                  value={muscles}
                  onChange={this.handleChange}
                >
                  {categories.map((group) => (
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
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
