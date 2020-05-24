import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
export default function Footer() {
  return (
    <div>
      <Paper>
        <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
          <Tab label="One" />
          <Tab label="Two" />
          <Tab label="Three" />
        </Tabs>
      </Paper>
    </div>
  );
}
