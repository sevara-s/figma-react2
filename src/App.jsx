import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Rooms from "./components/Rooms";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Rooms />
    </>
  );
}

export default App;
