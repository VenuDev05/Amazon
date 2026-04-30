import React from 'react'
import banner1 from '../images/Fasbanner1.jpeg'
import banner2 from '../images/Fasbanner2.jpeg'
import banner3 from '../images/Fasbanner3.jpeg'
import banner4 from '../images/Fasbanner4.jpeg'
import banner5 from '../images/Fasbanner5.jpeg'
import './Fashion.css'

const Fashion = () => {

  return (
    <div>
        <div className="banner">
            <img src={banner1} alt="banner1" />
            <img src={banner2} alt="banner1" />
            <img src={banner3} alt="banner1" />
            <img src={banner4} alt="banner1" />
            <img src={banner5} alt="banner1" />
        </div>
        <div className="continer">
            <ul className='category-ul'>
                <li>Mens</li>
                <li>Womens</li>
                <li>Kids</li>
            </ul>
        </div>
    </div>
  )
}

export default Fashion