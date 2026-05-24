import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LayoutWrapper from "./pages/LayoutWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<LayoutWrapper />} />
      </Routes>
    </>
  );
}

export default App;
