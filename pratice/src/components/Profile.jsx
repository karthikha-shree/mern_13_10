import React from 'react'
//object destructuring 
const Profile = ({name,age,skills}) => {
  return (
    <>
    <h1>hi andd whats is it !!! {name} , {age} years old </h1>
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