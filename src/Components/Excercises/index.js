import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

export default ({ excercises }) => {
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
            {excercises.map(([group, excercise]) => (
              <Fragment>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {excercise.map(({ title }) => (
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ))}
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles.Paper}>
            <Typography variant="h4">Welcome!!</Typography>
            <Typography variant="h6" style={{ marginTop: "20" }}>
              Please select a item from Left
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
