import React,{useState} from 'react'

function Counter() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Inc </button>
    <h3>Component Count:{count}</h3>
    </div>
  )
}   

export default Counter