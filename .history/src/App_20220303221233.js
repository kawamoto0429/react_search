import React, {useState} from "react"
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import  List  from "./components/List";
import './App.css';

function App() {
  const [reload, setReload] = useState(false)

  return (
    <div className="App">
      {<Search reload={reload} setReload={setReload}/>}
      {<List reload={reload} setReload={setReload}/>}
      <Routes>
        <Route path="/list" element={<List/>}/>
      </Routes>
      {reload && <button>リロードする</button>}  
    </div>
  )  
}

export default App;

