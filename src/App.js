import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarSegments from "./components/CarSegments/CarSegments";
import CarModels from "./components/CarModels/CarModels";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="CarPicker/:segmentName" element={<CarModels />} />
          <Route exact path="CarPicker" element={<CarSegments />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="*" element={<h1>Page not found 😭</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
