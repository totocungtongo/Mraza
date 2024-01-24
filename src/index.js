import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import DaftarPage from "./Daftar";
import PTK from "./Daftar/ProgramTk";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Daftar" element={<DaftarPage />}/>
         <Route path="/Daftar/program-tk" element={<PTK />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
