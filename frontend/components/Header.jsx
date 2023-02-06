import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <Link to = "/"><img className='site-logo' src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1675531093/websitelogo_rdddgd.png" alt="home" width="40px"/></Link>
        <div className='header-links'>
            <Link to = "/" className='header-link'>HOME</Link>
            <Link to = "/journey" className='header-link'>THE JOURNEY</Link>
            <Link to = "/team" className='header-link'>TEAM</Link>
            <Link to = "/store" className='header-link'>STORE</Link>
            <Link to = "/contact" className='header-link'>CONTACT</Link>
        </div>
        <Link to = "/login" className='login'>LOGIN</Link>
    </div>
  )
}

export default Header