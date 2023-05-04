import React from 'react'
import "./auth.css"
import Logo from "../../img/logo.png"
import SignUp from '../../component/signUp/SignUp'
import Login from '../../component/signIn/Login'

const Auth = () => {
  return (
    <div className='auth'>
        <div className="aLeft">
            <img src={Logo} alt="" />
            <div className="webName">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        {/* <SignUp /> */}
        <Login />
    </div>
  )
}

export default Auth