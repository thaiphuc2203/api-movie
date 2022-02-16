import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Layout from "./share/Layout";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./share/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
