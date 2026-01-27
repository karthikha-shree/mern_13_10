import React from 'react'
import Profile from './components/Profile'
import State from './hooks/State'

const App = () => {
  return (
    <>
    <div>App</div>
    <State/>
    <Profile name="oops" age ={20} skills={['HTML','CSS','JS','PY','REACT','NODE']}/>
    
    </>
  )
}

export default App