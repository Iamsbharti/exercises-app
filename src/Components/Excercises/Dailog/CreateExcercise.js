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
  withStyles
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
//styles
const styles=(theme)=>({
  FormControl:{
    width:500
  }
})
export default withStyles(styles) (class extends Component {
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
    const id=exercise.title.replace(/ g/,'-');
    this.props.onCreate(exercise);

    this.setState({
      exercise: {
        title: "",
        muscles: "",
        description: "",
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
    const { classes,muscles: categories } = this.props;
    return (
      <Fragment>
        <Button variant="contained" onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Create a new Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill out the from</DialogContentText>
            <form>
              <TextField
                name="title"
                label="Title"
                value={title}
                onChange={this.handleChange}
                className={classes.FormControl}
              />
              <br />
              <FormControl>
                <InputLabel>muscles</InputLabel>
                <Select
                  name="muscles"
                  value={muscles}
                  onChange={this.handleChange}
                  className={classes.FormControl}
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
                className={classes.FormControl}
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
})
