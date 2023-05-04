import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='a-right'>
        <form className='infoForm authForm'>
          <h3>Login</h3>
          <div>
            <input type="text" placeholder='Username' className='infoInput' name='userName' />
          </div>
          <div>
            <input type="password" placeholder='Password' className='infoInput' name='password' />
          </div>
          <div>
            <a href=""><span style={{fontSize: "12px"}}>Don't have an account Sign up</span></a>
            <button className="button infoButton">Login</button>
          </div>
        </form>
    </div>
  )
}

export default Login