import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subjects from "./pages/subjects";
import Worksheet from "./pages/worksheet";

const Container = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/subject" element={<Subjects />} />
          <Route path="/worksheet" element={<Worksheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container;
