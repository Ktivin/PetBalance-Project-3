import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ExpertProfile from "./ExpertProfile";   // ✅

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experts from "./Experts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/experts/:slug" element={<ExpertProfile />} /> {/* ✅ детальна сторінка */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);