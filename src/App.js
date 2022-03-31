import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CarSegments from "./components/CarSegments/CarSegments";
import CarModel from "./components/CarModel/CarModel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="car_picker/:car" element={<CarModel />} />
          <Route exact path="car_picker" element={<CarSegments />} />
          <Route path="*" element={<h1>Page not found 😭</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
