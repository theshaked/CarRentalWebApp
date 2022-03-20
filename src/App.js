import "./App.css";
import Navbar from "./components/Navbar";
import CarCards from "./components/CarCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1>Page not found :C</h1>} />
          <Route path="car_picker" element={<CarCards />} />
          <Route
            path="car_picker/:brand"
            element={<h2>car_picker list of cars from brand</h2>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
