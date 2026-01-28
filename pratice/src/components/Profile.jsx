import React from 'react'
//object destructuring 
import { useContext } from 'react'
import { usercontext } from '../App'
const Profile = ({skills}) => {
    const {user} = useContext(usercontext);
  return (
    <>
    <h1>hi ! what is it !!! {user.name} , {user.age} years old </h1>
    <ol>
      {skills.map((i)=>(
        <li>{i}</li>
      ))}
    </ol>
    </>
  )
}
export default Profile

//props
// const Profile = (props) => {
//   return (
//     <>
//     <h1>hi andd whats is it !!! {props.name},{props.age} years old </h1>
//     </>
//   )
// }

// export default Profile