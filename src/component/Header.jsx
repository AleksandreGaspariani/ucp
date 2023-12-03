

import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Header.css';

const header = (props) => {
  return (
    <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}} id='test'>
      <Link style={{marginRight: '8px', textDecoration: 'none', color: 'white'}} to="/">{props.name}</Link>
      <Link style={{marginRight: '8px', color: 'white', textDecoration: 'none'}} to="/profile">Profile</Link>  
    </div>
  )
}

export default header
