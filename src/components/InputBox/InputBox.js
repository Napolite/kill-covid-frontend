import React from 'react';
import { Link } from 'react-router-dom';
import './InputBox.css'

function InputBox() {
  return(
    <div className="login-input-box-container">
      <>
      <input type='text' placeholder="Phone No" />
      <Link to="/Patient">Log In</Link>
      </>
    </div>
  )
}

export default InputBox;