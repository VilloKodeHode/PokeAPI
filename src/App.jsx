import "./App.css";
import FetchData from "./PokeAPI/FetchData";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchData />} />
      </Routes>
    </Router>
  );
}

export default App;
