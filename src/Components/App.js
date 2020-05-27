import React, { Fragment, useState } from "react";
import "../styles.css";
import { Header, Footer } from "./Layouts";
import Exercise from "./Excercises";
import { exercises, muscles } from "../store";

export default function App() {
  const [exerciseList, setExercises] = useState(exercises);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});

  //reduce the exercises list based on the muscles type
    //console.log(exerciseList)

  const getExerciseByMuscle = () => {
    const initExercises=muscles.reduce((exercises,category)=>({
        ...exercises,
        [category]: []
    }),{})
    return Object.entries(
      exerciseList.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise]
        return exercises;
      }, initExercises)
    );
  };

  //set the category and pass it to the exercise component to display accordingly
  const handleCategory = (_category) => {
    setCategory(_category);
  };

  //find the exercise selected from footer to display it's details on Right Pane
  const handleGetExercise = (id) => {
    const _exercise = exerciseList.find((exer) => exer.id === id);
    setExercise(_exercise);
  };

  //create new exercise
  const handleCreateExercise = (newExercise) => {
      const id=newExercise.title.replace(/ /g,'-');
      newExercise={...newExercise,id}
      setExercises([...exerciseList, newExercise]);
  };
  //delete exercise
    const handleDeleteExercise=(id)=>{
        const deletedExercise=exerciseList.filter(exe=> exe.id!==id)
        setExercises(deletedExercise)
    }
  //call
  const _exercises = getExerciseByMuscle();

  return (
    <Fragment>
      <Header muscles={muscles} createExercise={handleCreateExercise} />
      <Exercise
        exercises={_exercises}
        category={category}
        getExercise={handleGetExercise}
        exercise={exercise}
        onDelete={handleDeleteExercise}
      />
      <Footer
        muscles={muscles}
        category={category}
        setCategory={handleCategory}
      />
    </Fragment>
  );
}
