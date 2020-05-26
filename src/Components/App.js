import React, { Fragment, useState } from "react";
import "../styles.css";
import { Header, Footer } from "./Layouts";
import Excercise from "./Excercises";
import { exercises, muscles } from "../store";

export default function App() {
  const [excerciseList, setExcercises] = useState(exercises);
  const [category, setCategory] = useState("");
  const [excercise, setExcercise] = useState({});
  console.log("store_exer", typeof excerciseList);
  //reduce the excerises list based on the muscles type
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

  //set the category and pass it to the excercise component to display accordingly
  const handleCategory = _category => {
    setCategory(_category);
  };

  //find the excericise selected from footer to display it's details on Right Pane
  const handleGetExcercise = id => {
    const _excerise = excerciseList.find(exer => exer.id === id);
    setExcercise(_excerise);
  };

  //create excerice
  const handleCreateExcercise = newExcercise => {
    console.log(newExcercise);
    setExcercises(newExcercise);
  };
  //call
  const _excerises = getExerciseByMuscle();

  return (
    <Fragment>
      <Header muscles={muscles} createExcercise={handleCreateExcercise} />
      <Excercise
        excercises={_excerises}
        category={category}
        getExcercise={handleGetExcercise}
        excercise={excercise}
      />
      <Footer
        muscles={muscles}
        category={category}
        setCategory={handleCategory}
      />
    </Fragment>
  );
}
