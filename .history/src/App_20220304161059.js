import React, {useState} from "react"
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import  List  from "./components/List";
import Dummy from "./Dummy";
import './App.css';

function App() {
  const [displayList, setDisplayList] = useState(true)

  return (
    <div className="App">
      {<Search setDisplayList={setDisplayList}/>}
      {displayList && Dummy.map((item)=>{
        <List
          key={item.id}
          id={item.id}
          name={item.name}
        />
      })}
    </div>
  )  
}

export default App;

