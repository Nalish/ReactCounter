import React from "react";
import './app.css'




export default function App(){
const [count,setCount] =React.useState(0)

function add(){
  setCount(prevcount => prevcount +1)
}

function Subtract(){
  setCount(prevcount => prevcount -1)
}
return(
  <div className="container">
  <h1>Click either of the two buttons</h1>

  <h2 className="count">{count}</h2>
  <div className="buttons">
  <button onClick={add}>Add </button>
  <button onClick={Subtract}>Subtract</button>
  </div>
</div>
)
}