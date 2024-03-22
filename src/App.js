import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import MovieDetail from "./components/MovieDetail/MovieDetail.js";
import Home from "./components/Home/Home.js";
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetail} />
          <Route Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
