import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./share/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrap-content">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
