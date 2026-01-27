import React from 'react'
import State from '../hooks/State'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import { Form } from '../hooks/Form'

const Home = () => {
  return (
     <>
     <div>App</div>
    <State/>
    <Profile name="oops" age ={20} skills={['HTML','CSS','JS','PY','REACT','NODE']}/>
    <Parent/>
    <Form/>
     </>
  )
}      

export default Home