import React, { Fragment } from "react";
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
import {Delete} from "@material-ui/icons"
export default ({
  exercises,
  category,
  getExercise,
  exercise: {
    id,
    title = "Welcome!!",
    description = "Please select a item from Left Pane"
  },
    onDelete
}) => {
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
    console.log('delete',id)
    onDelete(id)

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
                  <List component="ul">
                    {exercise.map(({ title, id }) => (
                      <ListItem
                        button
                        key={id}
                        onClick={() => getExercise(id)}
                      >
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
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
          <Paper style={styles.Paper}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6" style={{ marginTop: "20" }}>
              {description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
