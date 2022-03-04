import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import { List } from "./components/List";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/list">home</Link>
        {<Search />}
        {<List/>}
      <Routes>
      <Route path="/list" element={<List/>}/>
      </Routes>  
    </div>
  )  
}

export default App;

