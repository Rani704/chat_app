import React from 'react'
import "./footer.css"
import paperclip from '../images/paperclip.png'


const footer = () => {
  return (
    < div className='type'>
      <input type="text" placeholder='Type our message'/>
      <img src={paperclip} alt=""/>
    </div>
  )
}

export default footer