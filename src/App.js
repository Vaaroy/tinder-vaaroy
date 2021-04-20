import React from "react";
import './App.css';
import Header from "./Header";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButtons";


function App() {
  return (
    <div className="app">
     
      {/*----header---*/}
      <Header />
      {/*----Cards---*/}
      <Cards />
      {/*----Swipe Buttons---*/}
      <SwipeButtons />
    </div>
  );
}

export default App;
