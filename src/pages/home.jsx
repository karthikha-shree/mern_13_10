import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div>home</div>
      <p>Welcome to the home page!    </p>
      <ul>
        <li><Link to="./State">State</Link></li>
      </ul>
    </div>
  )
}

export default Home