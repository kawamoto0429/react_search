import React, {useState} from "react"
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Search from "./components/Search";
import  List  from "./components/List";
import './App.css';

function App() {
  const [reload, setReload] = useState(false)
  const navigation = useNavigate();

  function reset() {
    setReload(false);
    // navigation("/");
    location.reload();
  }

  return (
    <div className="App">
      {<Search reload={reload} setReload={setReload}/>}
      {<List reload={reload} setReload={setReload}/>}
      <Routes>
        <Route path="/list" element={<List/>}/>
      </Routes>
      {reload && <button onClick={reset}>リロードする</button>}  
    </div>
  )  
}

export default App;

