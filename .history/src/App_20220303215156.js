import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import  List  from "./components/List";
import Home from "./Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )  
}

export default App;

