import React, {useState} from "react"
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import  List  from "./components/List";
import './App.css';

function App() {
  const [reload, setreload] = useState(false)

  return (
    <div className="App">
      {<Search />}
      {<List/>}
      <Routes>
        <Route path="/list" element={<List/>}/>
      </Routes>
      {reload || <button>リロードする</button>}  
    </div>
  )  
}

export default App;

