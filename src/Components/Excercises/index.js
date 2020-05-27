import React, {Fragment, useState} from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import {Delete,Edit} from "@material-ui/icons"
import InputForm from "./Dailog/InputForm";
import {muscles} from "../../store";
export default ({
  exercises,
  category,
  getExercise,
  setExercise,
  exercise,
  editExercise,
  exercise: {
    id,
    title = "Welcome!!",
    description = "Please select a item from Left Pane"
  },
    onDelete
}) => {
    const [editMode,setEditMode]=useState(false)

  const styles = {
    Paper: {
      padding: 20,
      marginTop: 20,
      marginBottom: 20,
      height: 500,
      overflowY: "auto"
    }
  };
  const handleDelete=(id)=>{
    onDelete(id)
  }
  const handleEdit=(id)=>{
      setEditMode(true)
      console.log('edit')
      setExercise(id)
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm>
          <Paper style={styles.Paper}>
            {exercises.map(([group, exercise]) =>
              !category || category === group ? (
                <Fragment key={group}>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List component="ul" key={group}>
                    {exercise.map(({ title, id }) => (
                      <ListItem
                        button
                        key={title}
                        onClick={() => getExercise(id)}
                      >
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={()=>handleEdit(id)}>
                                <Edit/>
                            </IconButton>
                          <IconButton edge="end" onClick={()=>handleDelete(id)}>
                            <Delete/>
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              ) : null
            )}
          </Paper>
        </Grid>
        <Grid item sm>
            {editMode
                ?<InputForm exercise={exercise} muscles={muscles} onSubmit={editExercise}/>
                :<Fragment>
                    <Paper style={styles.Paper}>
                        <Typography variant="h4">{title}</Typography>
                        <Typography variant="h6" style={{ marginTop: "20" }}>
                            {description}
                        </Typography>
                    </Paper>
                 </Fragment>
            }

        </Grid>
      </Grid>
    </div>
  );
};
