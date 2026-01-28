import React from 'react'
import { useState,useEffect } from 'react'
import { data } from 'react-router-dom';
const About = () => {
  const [users,setusers]=useState([]);
  useEffect(()=>{  fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  // .then(data=> console.log(data))
  .then(data => setusers(data))},[]
  );
  return (
    <>
    <h1>USERS</h1>
   <hr style={{borderTop: "1px solid black"}} ></hr>
     { users.map((ids)=>(
 <div  key={ids.id }>
  <h2>Name:{ids.name.firstname} {ids.name.lastname}</h2>
  <h3>Username:{ids.username}</h3>
  <h4>Email:{ids.email}</h4>
  <h4>Phone:{ids.phone}</h4>
  <h5>Address: {ids.address.number} {ids.address.street}, {ids.address.city}, {ids.address.zipcode}</h5>
<hr style={{borderTop: "1px solid black"}} ></hr>

 </div>
     )
    
    )}
      
    
    </>
  )
}

export default About