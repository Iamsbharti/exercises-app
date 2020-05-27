import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

export default ({
  exercises,
  category,
  getExercise,
  exercise: {
    id,
    title = "Welcome!!",
    description = "Please select a item from Left Pane"
  }
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
