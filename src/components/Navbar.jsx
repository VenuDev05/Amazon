import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <ul className='header-ul'>
        <li>     <Link to='/'> <img src={logo} alt="logo image" height='30px' width='100px' /></Link>
        </li>
        <li>      <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>Updated Location</h5>
        </li>
        <li>      <input type="text" className='inp' placeholder='Search Product ' /><svg className='search' id='icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        </li>
        <li>      <h5>Eng</h5>
        </li>
        <li>      <p>Hello,Sign in</p>
        </li>
        <li>      <h5>Cart</h5>
        </li>
        <ul id='list-ul'>
          <li>Mx Player</li>
          <li>Sell</li>
          <li>Today's Deal</li>
          <li><Link to='/today' id='today'> Mobiles</Link></li>
          <li><Link to='/electronics' id='today'> Electronics</Link></li>
          <li>Fashion</li>
          <li>Furniture</li>
        </ul>
      </ul>
    </>
  )
}

export default Navbar