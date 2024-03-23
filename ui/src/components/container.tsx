import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subjects from "./pages/subjects";
import Worksheet from "./pages/worksheet";
import Header from "./molecules/header";

const Container = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/worksheet" element={<Worksheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container;
