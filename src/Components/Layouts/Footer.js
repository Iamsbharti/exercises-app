import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
export default function Footer({ muscles, category, setCategory }) {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;
  const categoryToIndex = (e, index) => {
    setCategory(index === 0 ? "" : muscles[index - 1]);
  };
  return (
    <div>
      <Paper>
        <Tabs
          value={index}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={categoryToIndex}
        >
          <Tab label="All" />
          {muscles.map((muscle, index) => (
            <Tab key={index} label={muscle} />
          ))}
        </Tabs>
      </Paper>
    </div>
  );
}
