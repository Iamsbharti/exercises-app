import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateExcercise from "../Excercises/Dailog/CreateExcercise";
export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            Excercises
          </Typography>
          <CreateExcercise />
        </Toolbar>
      </AppBar>
    </div>
  );
}
