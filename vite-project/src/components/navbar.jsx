import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    const nav = ["home","about","Contact"];
  return (
    <>
      <div className='navbar' style={{textDecoration:"none"}}>
   
        <ul style={{listStyleType:"none", display:"flex", gap:"20px", padding:"10px", margin:"10px", backgroundColor:"lightgrey", borderRadius:"10px",textAlign:"center", justifyContent:"center", alignItems:"center", fontSize:"20px", fontWeight:"bold",textDecoration:"none" }}>
            {nav.map((n)=><Link to={`/${n}`} key={n}><li>{n}</li></Link>)}
        </ul>
      </div> 
    </>
  )
}

export default Nav