import { useState } from "react";


export const Form = () => {
    const [frm,setform]=useState({
        name:"",
        email:"",
        age:"",
        department:""

    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setform((prev)=>({
           ...prev,
           [name]:value
    }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(frm)
    }

  return (
    <>
    <div>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" value={frm.name} onChange={handleChange} placeholder="Enter your Name :"></input><br/>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" value={frm.email} onChange={handleChange} placeholder="Enter your email"></input><br/>
            <label htmlFor="age">Age : </label>
            <input type="number" name="age" value={frm.age} onChange={handleChange} placeholder="Enter your age"></input><br/>
            <label htmlFor="department">Department : </label>
            <input type="text" name="department" value={frm.department} onChange={handleChange}placeholder="Enter you department"></input><br/>
            <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
    </div>
    </>
  )
}
