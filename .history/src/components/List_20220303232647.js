import React,{useContext} from 'react'
import Dummy from "../Dummy";

export default function List(props) {
  const {id, name} = props
  return (
    <div key={id}>
      {name}
    </div>
  )
}