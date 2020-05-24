import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
export default props => {
  const styles = {
    Paper: { padding: 20, marginTop: 20, marginBottom: 20 }
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm>
          <LeftPane styles={styles} />
        </Grid>
        <Grid item sm>
          <RightPane styles={styles} />
        </Grid>
      </Grid>
    </div>
  );
};
