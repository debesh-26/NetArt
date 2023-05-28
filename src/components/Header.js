import React from 'react'; 
import logo from "../asserts/logo.png";
import "./Header.css"

const header = () => {
  return (
    <div className='header'>
        <img src={logo} className="header-img" alt='img'/>
    </div>
  )
}

export default header;

//this is the new repo 