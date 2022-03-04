import React, { useEffect, useState, } from "react";
import List from "./List"
import Dummy from "../Dummy"

export default function Serach({reload, setReload}) {
  const [text, setText] = useState(localStorage.getItem("hoge"));
  const [dummies, setDummies] = useState(Dummy)
  const [on, setOn] = useState(false)
  useEffect(()=>{
    if (text === "") {
      setDummies(dummies);
      return;
    }
    const data = dummies.filter((item)=>{
      const keyword = text.toLowerCase()
      const value = item.name.toLowerCase()
      return value.includes(keyword)
    })
    setDummies(data)
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
    if (window.localStorage) {
      // 保存するオブジェクト
      // オブジェクトをjsonに変換
      const txt = JSON.stringify(text);
      // jsonデータをlocalStorageに保存
      localStorage.setItem("hoge", txt);
      console.log("ok")
    }
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
