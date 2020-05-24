import React, { Fragment, useState } from "react";
import "../styles.css";
import { Header, Footer } from "./Layouts";
import Excercise from "./Excercises";
import { excercise, muscles } from "../store";

export default function App() {
  const [musclesList, setMuscles] = useState(muscles);

  return (
    <Fragment>
      <Header />
      <Excercise />
      <Footer muscles={musclesList} />
    </Fragment>
  );
}
