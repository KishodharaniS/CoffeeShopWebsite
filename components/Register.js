import React from 'react'
export default function Register() {
  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Name</label>
        <input className="registerInput" type="text" placeholder="Enter your Name..." />
        <div/>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your Email..." />
        <div/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your Password..." />
        <div/>
         <label>Phnone Number</label>
        <input className="registerInput" type="text" placeholder="Enter your Phone Number..." />
        <div/>
      </form><br></br>
        <button className="RegisterButton">Register</button>
    </div>
  )
}