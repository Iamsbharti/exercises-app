import React, {Component, Fragment} from 'react'

import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    withStyles
} from '@material-ui/core'
//styles
const styles=(theme)=>({
    FormControl:{
        width:500
    }
})
export default withStyles(styles) (class extends Component {
    state={
        exercise:{
            title:"",
            muscles:"",
            description: ""
        }
    }

    /*initialState=()=>{
        const {exercise}=this.props;
        return exercise ? exercise :{
            title:"",
            muscle:"",
            description:""
        }
    }*/
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
        this.props.toggle();
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
    render(){
        const { title, muscles, description } = this.state.exercise;
        const { classes,muscles: categories } = this.props;
        return(
            <Fragment>
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
                    <br/>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={this.handleSubmit}
                            style={{marginTop:15}}
                        >
                            Create
                        </Button>
                </form>
            </Fragment>
        )
    }

})
