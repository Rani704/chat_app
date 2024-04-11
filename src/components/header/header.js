import React from 'react'
import  ChatLogo from "./../images/chatLogo.png"
import text from "../images/text.png"
import online from "../images/online.png"
import "./header.css"
const header = () => {
  return (
    <div className='header'>
    <div>
        <img src={ChatLogo} alt="logo" />
       <div className='text'> 
       <img src={text} alt="text" />
        </div>
    </div>
    <div><img src={online} alt="online" /></div>
    </div>
  )
}

export default header