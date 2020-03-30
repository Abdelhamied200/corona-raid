import React from "react";
import "./App.scss";
import Nav from "./app/nav";
import Header from "./app/header";
import Hacks from "./app/hacks";
import Latest from "./app/latest";
import News from "./app/news";
import Forums from "./app/forums";
import Footer from "./app/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Hacks />
      <Latest />
      <News />
      <Forums />
      <Footer />
    </div>
  );
}

export default App;
