import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateExcercise from "../Excercises/Dailog/CreateExcercise";
export default function Header({ muscles, createExcercise }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            Excercises
          </Typography>
          <CreateExcercise muscles={muscles} onCreate={createExcercise} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
