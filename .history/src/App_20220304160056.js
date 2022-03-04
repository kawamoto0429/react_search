import React, {useState} from "react"
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import  List  from "./components/List";
import './App.css';

function App() {

  return (
    <div className="App">
      {<Search reload={reload} setReload={setReload}/>}
    </div>
  )  
}

export default App;

