import React, { useEffect, useState } from "react";
import List from "./List"
import Dummy from "../Dummy"

export default function Serach({reload, setReload}) {
  const [text, setText] = useState("");
  const [dummies, setDummies] = useState(Dummy)
  const [on, setOn] = useState(false)
  useEffect(()=>{
    if (text === "") {
      setDummies(dummies);
      console.log(dummies)
      return;
    }
    const data = dummies.filter((item)=>{
      console.log(item)
      const keyword = text.toLowerCase()
      const value = item.name.toLowerCase()
      console.log(keyword)
      return value.includes(keyword)
    })
    console.log(data)
    setDummies(data)
  },[on])
  const inputValue = (e) => {
    const value = localStorage.setItem(e.target.value)
    console.log(value)
    setText(e.target.value)
  }

  const list = dummies.map((item)=>{
    return(
      <List
        key={item.id}
        id={item.id}
        name={item.name}
      />
    )
  })

  function submitValue(e) {
    e.preventDefault();
    console.log(text);
    setReload(true);
    setOn(!on);
  }
  return (
    <div>
      <div>
        <input name="text" value={text} onChange={inputValue}/>
      </div>
      <button type="submit" onClick={submitValue}>検索</button>
      <div>
        {list}
      </div>
    </div>
  );
}