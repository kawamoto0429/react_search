import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import { List } from "./components/List";
import './App.css';

function App() {
  return (
    <div className="App">
      <link to="/">home</link>
        {<Search />}
        {<List/>}
      <Routes>
        <Route path="/" element={<Link/>}/>
      </Routes>  
    </div>
  )  
}

export default App;

