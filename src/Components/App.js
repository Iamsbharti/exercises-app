import React, { Fragment, useState } from "react";
import "../styles.css";
import { Header, Footer } from "./Layouts";
import Exercise from "./Excercises";
import { exercises, muscles } from "../store";

export default function App() {
  const [exerciseList, setExercises] = useState(exercises);
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState({});
  const [editMode,setEditMode] =  useState(false);

  //reduce the exercises list based on the muscles type
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
    setEditMode(false)
  };

  //create new exercise
  const handleCreateExercise = (newExercise) => {
      setExercises([...exerciseList, newExercise]);
  };
  //delete exercise
    const handleDeleteExercise=(id)=>{
        const deletedExercise=exerciseList.filter(exe=> exe.id!==id)
        setExercises(deletedExercise)
        setEditMode(false)
        setExercise({})
    }
    //set exercise for edit mode
     const handleSetExercise=(id)=>{
        const selectedExercise= exerciseList.find(exercise=> exercise.id===id)
         setExercise(selectedExercise)
         setEditMode(true)
     }
     //edit exercise
    const handleEditExercise=(_newExercise)=>{
        console.log('edit ex',_newExercise.title)
        const editedExercise=exerciseList.filter(exercise=> exercise.id!==_newExercise.id)
        console.log(editedExercise)
        setExercise(editedExercise)
        setExercises([...editedExercise,_newExercise])
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
        setExercise={handleSetExercise}
        editMode={editMode}
        editExercise={handleEditExercise}
      />
      <Footer
        muscles={muscles}
        category={category}
        setCategory={handleCategory}
      />
    </Fragment>
  );
}
