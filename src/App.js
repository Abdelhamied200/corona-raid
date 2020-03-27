import React from "react";
import "./App.scss";
import Nav from "./app/nav";
import Header from "./app/header";
import Hacks from "./app/hacks";
import Latest from "./app/latest";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Hacks />
      <Latest />
    </div>
  );
}

export default App;
