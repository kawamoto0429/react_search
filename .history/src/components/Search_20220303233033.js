import React, { useEffect, useState } from "react";
import List from "./List"
import dummy from "./dummy"

export default function Serach({reload, setReload}) {
  const [text, setText] = useState("");
  const [dummy, setDummy] = useState(dummy)
  const [on, setOn] = useState(false)
  useEffect(()=>{
    list()
  },[on])
  const inputValue = (e) => {
    setText(e.target.value)
  }

  const list = () => {
    dummy.map((item)=>{
      return(
        <List
          id={item.id}
          name={item.name}
        />
      )
    })
  }

  const submitValue = (e) => {
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
