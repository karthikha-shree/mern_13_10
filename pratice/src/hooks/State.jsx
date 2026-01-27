import React, { useState } from 'react'
const State = () => {
    const [count,setcount]=useState(0)
    const [like,setlike]=useState(0)

  return (<>
  <div><h2>setstate example:</h2>
  {"count : "}{count}<br></br>
  <button onClick={() => setcount(count + 1)}>Increment</button></div>
  <h4>{"LIKES:"}{like}</h4>
  <button onClick={() => setlike(like+1)}>Like👍</button>  
  
  <button onClick={()=>setlike(like-1)}>Dislike👎</button>
  </>
  )
}

export default State