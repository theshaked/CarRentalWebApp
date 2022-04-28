import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarSegments from "./components/CarSegments/CarSegments";
import CarModels from "./components/CarModels/CarModels";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'

function App()
{
  const [token, setToken] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} />
        <Routes>
          <Route path="CarPicker/:segmentName/:SDate/:EDate" element={<CarModels />} />
          <Route exact path="CarPicker" element={<CarSegments />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Login" element={<Login setToken={setToken} />} />
          <Route path="*" element={<h1>Page not found 😭</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
