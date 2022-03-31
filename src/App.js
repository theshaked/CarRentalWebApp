import "./App.css";
import Navbar from "./components/Navbar";
import CarCards from "./components/CarCards";
import CarModel from "./components/CarModel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="car_picker/:car" element={<CarModel />} />
          <Route exact path="car_picker" element={<CarCards />} />
          <Route path="*" element={<h1>Page not found :C</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
