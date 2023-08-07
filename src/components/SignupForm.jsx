import React, { useState } from 'react';
import '../App.css';


function SignupForm(){
  return (
    <div className='Signup'>
      <form>
        <h2>Create an Account</h2>
        <div>
          <label htmlFor='email'/>
          <input autoFocus type='text' placeholder='Email' className='form-control'/>
        </div>
        <div>
          <label htmlFor='password'/>
          <input type='password' placeholder='Password' className='form-control'/>
        </div>
        <div>
          <button type='submit' className='signup-btn'>SIGN UP</button>
        </div>
      </form>
      <div>
        <p id='signup-text'><span>or sign up with</span></p>
      </div>
      <div>
        <img className='logo-google' src={require('../images/google.png')} alt='Google'/>
        <img className='logo-fb' src={require('../images/fb.png')} alt='Facebook'/>
      </div>
    </div>
    
  )
}

export default SignupForm;