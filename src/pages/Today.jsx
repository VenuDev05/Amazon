import React from 'react'
import './Today.css'
import lat1 from '../images/lat1.jpg'
import lat2 from '../images/lat2.jpg'
import lat3 from '../images/lat3.jpg'
import lat4 from '../images/lat4.jpg'
import lat5 from '../images/lat5.jpg'
import lat6 from '../images/lat6.jpg'
import lat7 from '../images/lat7.jpg'
import lat8 from '../images/lat8.jpg'
import lat9 from '../images/lat9.jpg'
import lat10 from '../images/lat10.png'
import banner1 from '../images/mobile-banner.png'
import banner2 from '../images/banner3.jpg'
import banner3 from '../images/new-banner.png'
import banner4 from '../images/banner4.png'
import mob1 from '../images/mob1.jpg'
import mob2 from '../images/mob2.jpg'
import mob3 from '../images/mob3.jpg'
import mob4 from '../images/mob4.jpg'
import mob5 from '../images/mob5.jpg'
import mob6 from '../images/mob6.jpg'
import mob7 from '../images/mob7.jpg'
import mob8 from '../images/mob8.jpg'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import s5 from '../images/s5.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Today = () => {
    return (
        <div>
            <div id="latest-div">
                <h3>Latest Launch</h3>
                <div id="latest">
                    <img src={lat1} alt="" />
                    <img src={lat2} alt="" />
                    <img src={lat3} alt="" />
                    <img src={lat4} alt="" />
                    <img src={lat5} alt="" />
                    <img src={lat6} alt="" />
                    <img src={lat7} alt="" />
                    <img src={lat8} alt="" />
                    <img src={lat9} alt="" />
                    <img src={lat10} alt="" />
                </div>
            </div>
            <div id="banner">
                <img src={banner4} id='banner1' />
                <img src={banner2} id='banner2' />
            </div>
            <div id="product">
                <ul id='product-ul'>
                    <li>
                        <img src={mob1} />
                        <p>Nothing phone (3a Lite)</p>
                        <h3>$19,999 <strike>M.R.P : 22,999</strike> </h3>
                    </li>
                    <li>
                        <img src={mob2} />
                        <p>Motorola G67 Power 5G</p>
                        <h3>$14,030 <strike>M.R.P : 17,999</strike> </h3>
                    </li>
                    <li>
                        <img src={mob3} />
                        <p>Samsung Galaxy S25 plus 5G</p>
                        <h3>$72,899 <strike>M.R.P : 99,999</strike> </h3>
                    </li>
                    <li>
                        <img src={mob4} />
                        <p>CMF BY NOTHING phone 2 Pro 5G</p>
                        <h3>$18,249 <strike>M.R.P : 22,999</strike> </h3>
                    </li>
                    <li>
                        <img src={mob5} />
                        <p>Nothing phone (3a)</p>
                        <h3>$25,999 <strike>M.R.P : 27,999</strike> </h3>
                    </li>
                    <li>
                        <img src={mob6} />
                        <p>Nothing phone (3a) Lite</p>
                        <h3>$20,999 <strike>M.R.P : 22,999</strike> </h3>
                    </li>
                    <li>
                        <img src={mob7} />
                        <p>Nothing phone (3a) Pro 5G</p>
                        <h3>$34,200 <strike>M.R.P : 36,999</strike> </h3>
                    </li>
                    <li>
                        <img src={mob8} />
                        <p>Google Pixel 9A</p>
                        <h3>$39,199 <strike>M.R.P : 49,999</strike> </h3>
                    </li>
                </ul>
            </div>
            <div id="new-banner">
                <img src={banner3} />
            </div>
            <div id="carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={s1} className="d-block w-100" alt="slide1" />
                        </div>
                        <div className="carousel-item">
                            <img src={s2} className="d-block w-100" alt="slide2" />
                        </div>
                        <div className="carousel-item">
                            <img src={s3} className="d-block w-100" alt="slide3" />
                        </div>
                        <div className="carousel-item">
                            <img src={s4} className="d-block w-100" alt="slide4" />
                        </div>
                        <div className="carousel-item">
                            <img src={s5} className="d-block w-100" alt="slide5" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" id='prev'></span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" id='prev'></span>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Today