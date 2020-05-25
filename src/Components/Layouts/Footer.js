import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
export default function Footer({ muscles }) {
  return (
    <div>
      <Paper>
        <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
          <Tab label="All" />
          {muscles.map((muscle, index) => (
            <Tab key={index} label={muscle} />
          ))}
        </Tabs>
      </Paper>
    </div>
  );
}
