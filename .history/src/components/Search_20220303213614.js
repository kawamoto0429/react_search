import React, { useState } from "react";

export default function Serach() {
  const [text, setText] = useState("");
  const inputValue = (e) => {
    setText(e.target.value)
  }

  const submitValue = (e) => {
    e.preventDefault();
    console.log(text);
    
  }
  return (
    <div>
      <div>
        <input name="text" value={text} onChange={inputValue}/>
      </div>
      <button type="submit" onClick={submitValue}>検索</button>
    </div>
  );
}
