import React,{useContext} from 'react'
import Dummy from "../Dummy";

export const List = () => {
  const items = Dummy.map((item) => {
    return <div key={item.id}>{item.name}</div>;
  });

  return <div>{items}</div>;
};