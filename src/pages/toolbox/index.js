import React from 'react';
import { FaHome, FaUserAlt, FaEnvelope } from 'react-icons/fa'
import './styles.css';



export default function index({ match }) {




  return (
<div id="footer">
<div onClick={()=>{document.location.hash="/messagens"}} className="buttons ff"><FaEnvelope  size={60} color="#000000"/></div>

<div onClick={()=>{document.location.hash="/home"}} className="buttons "><FaHome  size={60} color="#000000"/></div>

<div onClick={()=>{document.location.hash="/profile"}} className="buttons "><FaUserAlt  size={60} color="#000000"/></div>
</div>
  )
}
