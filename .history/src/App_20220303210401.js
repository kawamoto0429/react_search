import { Routes, Route, Link } from "react-router-dom";
import Search from "./Search";
import { List } from "./components/List";
import './App.css';

function App() {
  return (
    <div className="App">
      {<Search />}
      {<List />}
      
    </div>
  )  
}

export default App;
