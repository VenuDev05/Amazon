import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()

  const [username, setUsername] = useState(
    sessionStorage.getItem('username') || 'Sign in'
  )

  useEffect(() => {
    if (location.state?.user) {
      setUsername(location.state.user)
    }
  }, [location])

  return (
    <>
      <nav className='header'>
        <ul className='header-ul'>

          <li>
            <Link to='/'>
              <img src={logo} alt="logo" height='30' width='100' />
            </Link>
          </li>

          <li>
            <h5>📍 Updated Location</h5>
          </li>

          <li>
            <input type="text" className='inp' placeholder='Search Product' />
          </li>

          <li><h5>Eng</h5></li>

          {/* ✅ FIXED */}
          <li><p>Hello, {username}</p></li>

          <li id='cart'>
            <Link to="/cart" id='cart-btn'>🛒</Link>
          </li>

          <li>
            <Link to='/user' id='loginBtn'>{username}</Link>
          </li>

        </ul>

        <ul id='list-ul'>
          
          <li><Link to='/today' id='cat'>Mobiles</Link></li>
          <li><Link to='/electronics' id='cat'>Electronics</Link></li>
          <li><Link to='/fashion' id='cat'>Fashion</Link></li>
          
        </ul>

      </nav>
    </>
  )
}

export default Navbar