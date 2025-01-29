import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Rooms from "./components/Rooms";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Rooms />
      <Products />
      <Footer />
    </>
  );
}

export default App;
