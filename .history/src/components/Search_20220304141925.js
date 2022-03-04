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
      return (
        new RegExp(text).test(item)
      )
    })
    console.log(data)
  },[on])
  const inputValue = (e) => {
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
