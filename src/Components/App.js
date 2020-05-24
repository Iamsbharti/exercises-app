import React, { Fragment } from "react";
import "../styles.css";
import { Header, Footer } from "./Layouts";
import Excercise from "./Excercises";
export default function App() {
  return (
    <Fragment>
      <Header />
      <Excercise />
      <Footer />
    </Fragment>
  );
}
