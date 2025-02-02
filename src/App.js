import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Update from "./pages/Update";
import Add from "./pages/Add";
import Books from "./pages/Books";
import "./style.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/update/:id" element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
