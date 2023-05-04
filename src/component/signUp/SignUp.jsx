import React from 'react'
import "./signUp.css"

const SignUp = () => {
  return (
    <div className='aRight'>
        <form className='infoForm authForm'>
            <h3>Sign Up</h3>
            <div>
                <input type="text" placeholder='First Name' name='firstName' className='infoInput' />
                <input type="text" placeholder='Last Name' name='lastName' className='infoInput' />
            </div>
            <div>
                <input type="text" placeholder='Username' name='userName' className='infoInput' />
            </div>
            <div>
                <input type="password" placeholder='Password' name='password' className='infoInput' />
                <input type="password" placeholder='Confirm Password' name='confirmPassword' className='infoInput' />
            </div>
            <div>
                <a href=""><span style={{fontSize: "12px"}}>Already have an account. Login!</span></a>
                <button type="submit" className='button infoButton'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp