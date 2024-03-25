import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subjects from "./pages/subjects";
import Worksheet from "./pages/worksheet";
import Header from "./molecules/header";
import Maths from "./pages/maths/maths";
import "../App.css";
import Home from "./pages/home";
import { ROUTES } from "./static/routes";

const Container = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />

        <Routes>
          {ROUTES.map(({ path, Component }) => (
            <Route key={path} path={path} Component={Component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container;
