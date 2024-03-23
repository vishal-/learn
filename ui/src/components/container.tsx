import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subjects from "./pages/subjects";
import Worksheet from "./pages/worksheet";
import Header from "./molecules/header";
import Maths from "./pages/maths/maths";
import Additions from "./pages/maths/addition";
import "../App.css";

const Container = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route path="/maths/addition" element={<Additions />} /> */}
          <Route path="/maths" element={<Maths />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/worksheet" element={<Worksheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container;
