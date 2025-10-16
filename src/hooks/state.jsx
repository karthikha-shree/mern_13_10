import React from 'react'
import { useState } from 'react'


const State = () => {
  const [count, setCount] = useState(0)
  const [like,setlike] = useState(0)
  const [dislike,setdislike] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const incrementLike = () => {
        setlike(like + 1)
    }
       const incrementDislike = () => {
        setdislike(dislike + 1)
    }
    

  return (
    <div>
    <div style={{textAlign:"center", marginTop:"50px",fontSize:"50px"   }}>
      <h1>State</h1>
      <p style={{fontSize:"50px"}}>Count: {count}</p>
      <button onClick={increment} style={{marginRight:"10px",fontSize:"30px"}}>Increment</button>
      <button onClick={decrement} style={{marginLeft:"10px",fontSize:"30px"}}>Decrement</button>
    </div>
    <div style={{textAlign:"center", marginTop:"50px",fontSize:"50px"   }}>
      <h1>👍 & 👎</h1>
      <button onClick={incrementLike} style={{fontSize:"50px",marginRight:"10px",border:"5px solid black",borderRadius:"10px"}}>👍: {like}</button>
      <button onClick={incrementDislike} style={{fontSize:"50px",marginLeft:"10px",border:"5px solid black",borderRadius:"10px"}}>👎: {dislike}</button>
    </div>
    </div>
  )
}

export default State