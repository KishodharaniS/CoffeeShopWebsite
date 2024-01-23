import React from 'react'
export default function Loggin() {
  return (
    <div className='login'>
    <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <div/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <div/>
        <button className="loginButton">Login</button>
      </form><br></br>
        <p>Don't have an account? <a href=''>Register</a></p>
    </div>
  )
}