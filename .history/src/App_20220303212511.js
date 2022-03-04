import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import { List } from "./components/List";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
        {<Search />}
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </div>
  )  
}

export default App;
