import "./App.css";
import FetchData from "./PokeAPI/FetchData";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokeDexV2 from "./PokeAPI/PokeDexV2";

function App() {
  return (
    <Router>
      <div className="flex flex-col gap-4 absolute top-4 left-4">
        <Link to="/">
          <button className="border py-2 px-4 bg-red-700 font-bold">V.1</button>
        </Link>
        <Link to="/v2">
          <button className="border py-2 px-4 bg-red-700 font-bold">V.2</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="/v2" element={<PokeDexV2 />} />
      </Routes>
    </Router>
  );
}

export default App;
