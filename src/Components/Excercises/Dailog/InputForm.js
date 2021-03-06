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
        width:300,
        marginTop:10
    }
})
export default withStyles(styles) (class extends Component {
    state=this.initialState()

    initialState(){
        const {exercise}=this.props;
        return exercise ? exercise : {
            title:"",
            muscles:"",
            description:""
        }
    }
    //listen for state updates
    componentDidUpdate(prevProps) {
        if(this.props.exercise!==prevProps.exercise){
            this.setState({
                ...this.props.exercise
            })    
        }
        
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = () => {
        const {toggle}=this.props
        toggle && this.props.toggle();
        const { ...exercise } = this.state;
        const id=exercise.title.toLocaleLowerCase().replace(/ /g,'-');
        this.props.onSubmit({...exercise,id});
        this.initialState()
    };
    render(){
        const { title, muscles, description } = this.state;
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
                        <InputLabel>Muscles</InputLabel>
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
                            {this.state.title ?"Edit":"Create"}
                        </Button>
                </form>
            </Fragment>
        )
    }

})
