import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  return (
    <div className='main'>
        <h3 id='back'>Back to Top</h3>
        <ul id='whole'>
            <ul id='get'>
                <h2>Get Us Know</h2>
                <li>About Amazon</li>
                <li>Careers</li>
                <li>Press Release</li>
                <li>Amazon Science</li>
            </ul>
            <ul id='connect'>
                <h2>Connect With Us</h2>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
            <ul id="money">
                <h2>Make Money With Us</h2>
                <li>Sell on Amazon</li>
                <li>Supply on Amazon</li>
                <li>Become an Affilite</li>
                <li>Amazon Pay</li>
                <li>Fulfilment on Amazon</li>
            </ul>
            <ul id="help">
                <h2>Let Us Help You</h2>
                <li>Your Account</li>
                <li>Return Center</li>
                <li>Amazon Protection</li>
                <li>Help</li>
            </ul>
        </ul>
    </div>
  )
}

export default Footer