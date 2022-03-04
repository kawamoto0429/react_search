import React, {useState} from "react"
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import  List  from "./components/List";
import './App.css';

function App() {
  const [reload, setReload] = useState(false)

  function reset() {
    setReload(false);
    window.location.reload()
  }

  return (
    <div className="App">
      {<Search reload={reload} setReload={setReload}/>}
      <Link to="/"></Link>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
      {reload && <button onClick={reset}>リロードする</button>}  
    </div>
  )  
}

export default App;

