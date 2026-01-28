import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import { usercontext } from '../App'
import { useState } from 'react'

const Home = () => {
  const [user,setuser]=useState({name:"Karthikha", age:19});
  return (
     <>
     <div>App</div>
    <Link to ='/state'>Go to State Component</Link>
    <br />
    
    <Parent/>
    <Link to='/form'>Go to Form Component</Link>
    <br />
    <Link to ='/reducer'>Go to Reducer Component</Link>
    <usercontext.Provider value={{user,setuser}}>
      <h1>usereducer example</h1>
      <Profile  skills={['HTML','CSS','JS','PY','REACT','NODE']}/>
    
    </usercontext.Provider> 
     </>
  )
}      

export default Home