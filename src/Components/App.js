import React, { Fragment, useState } from "react";
import "../styles.css";
import { Header, Footer } from "./Layouts";
import Excercise from "./Excercises";
import { exercises, muscles } from "../store";

export default function App() {
  const [excerciseList, setExcercise] = useState(exercises);

  const getExerciseByMuscle = () => {
    return Object.entries(
      excerciseList.reduce((excercises, excercise) => {
        const { muscles } = excercise;
        excercises[muscles] = excercises[muscles]
          ? [...excercises[muscles], excercise]
          : [excercise];
        return excercises;
      }, {})
    );
  };
  const _excerise = getExerciseByMuscle();

  return (
    <Fragment>
      <Header />
      <Excercise excercises={_excerise} />
      <Footer muscles={muscles} />
    </Fragment>
  );
}
