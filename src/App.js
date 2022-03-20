import "./App.css";
import Navbar from "./components/Navbar";
import CarCard from "./components/CarCard";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <CarCard brandName="Kia" />
    </div>
  );
}

export default App;
