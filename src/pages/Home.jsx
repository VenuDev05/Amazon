import React from 'react'
import './Home.css'
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import card11 from '../images/card11.png'
import card12 from '../images/card12.png'
import card13 from '../images/card13.png'
import card14 from '../images/card14.png'
import card21 from '../images/card21.png'
import card22 from '../images/card22.png'
import card23 from '../images/card23.png'
import card24 from '../images/card24.png'
import card31 from '../images/card31.png'
import card32 from '../images/card32.png'
import card33 from '../images/card33.png'
import card34 from '../images/card34.png'
import card41 from '../images/card41.png'
import card42 from '../images/card42.png'
import card43 from '../images/card43.png'
import card44 from '../images/card44.png'
import fur1 from '../images/fur1.webp'
import fur2 from '../images/fur2.webp'
import fur3 from '../images/fur3.webp'
import fur4 from '../images/fur4.jpeg'
import fur5 from '../images/fur5.jpeg'
import fur6 from '../images/fur6.avif'
import fur7 from '../images/fur7.png'
import fur8 from '../images/fur8.jpg'
import fur9 from '../images/fur9.webp'
import fur10 from '../images/fur10.jpg'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/13.jpg'
import img14 from '../images/14.jpg'
import img21 from '../images/21.jpg'
import img22 from '../images/22.jpg'
import img23 from '../images/23.jpg'
import img24 from '../images/24.jpg'
import img41 from '../images/41.jpg'
import img42 from '../images/42.jpg'
import img43 from '../images/43.jpg'
import img44 from '../images/44.jpg'
import img31 from '../images/31.jpg'
import app1 from '../images/app1.jpg'
import app2 from '../images/app2.jpg'
import app3 from '../images/app3.jpg'
import app4 from '../images/app4.jpg'
import app5 from '../images/app5.jpg'
import app6 from '../images/app6.jpg'
import app7 from '../images/app7.jpg'
import app8 from '../images/app8.jpg'
import app9 from '../images/app9.jpg'
import app10 from '../images/app10.jpg'


const Home = () => {
    return (
        <div>
            {/* carousel slide */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="Banner 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="Banner 2" />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* cards */}
            <div className="whole-container">
                <div id="card1">
                    <ul>
                        <h3>Bulk Order Discount + Upto 18% GST Savings.</h3>
                        <li>
                            <img src={card11} alt="first" />
                            <p>Upto 40% off</p>
                        </li>
                        <li>
                            <img src={card12} alt="second" />
                            <p>Up to 60% off</p>
                        </li>
                        <li>
                            <img src={card13} alt="third" />
                            <p>Up to 50% off</p>
                        </li>
                        <li>
                            <img src={card14} alt="fourth" />
                            <p>Up to 60% off</p>
                        </li>
                    </ul>
                </div>
                <div id="card2">
                    <ul>
                        <h3>Revamp your home in style</h3>
                        <li>
                            <img src={card21} alt="first" />
                            <p>Cushion covers</p>
                        </li>
                        <li>
                            <img src={card22} alt="second" />
                            <p>Figurines,vases</p>
                        </li>
                        <li>
                            <img src={card23} alt="third" />
                            <p>Home Storage</p>
                        </li>
                        <li>
                            <img src={card24} alt="fourth" />
                            <p>Lighting Solutions</p>
                        </li>
                    </ul>
                </div>
                <div id="card3">
                    <ul>
                        <h3>Appliances for your home | Upto 55% off</h3>
                        <li>
                            <img src={card31} alt="first" />
                            <p>Air conditioners</p>
                        </li>
                        <li>
                            <img src={card32} alt="second" />
                            <p>Refrigerators</p>
                        </li>
                        <li>
                            <img src={card33} alt="third" />
                            <p>Microwaves</p>
                        </li>
                        <li>
                            <img src={card34} alt="fourth" />
                            <p>Washing Machines</p>
                        </li>
                    </ul>
                </div>
                <div id="card4">
                    <ul>
                        <h3>Starting $49 | Deals on home essentials</h3>
                        <li>
                            <img src={card41} alt="first" />
                            <p>Cleaning supplies</p>
                        </li>
                        <li>
                            <img src={card42} alt="second" />
                            <p>Bathroom accessories</p>
                        </li>
                        <li>
                            <img src={card43} alt="third" />
                            <p>Home tools</p>
                        </li>
                        <li>
                            <img src={card44} alt="fourth" />
                            <p>Wallpapers</p>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Furnitures */}
            <div className="product">
                <h3>Up to 60% off | Smart furniture for every room</h3>
                <div className="furniture">
                    <img src={fur1} alt="" />
                    <img src={fur2} alt="" />
                    <img src={fur3} alt="" />
                    <img src={fur4} alt="" />
                    <img src={fur5} alt="" />
                    <img src={fur6} alt="" />
                    <img src={fur7} alt="" />
                    <img src={fur8} alt="" />
                    <img src={fur9} alt="" />
                    <img src={fur10} alt="" />
                </div>
            </div>

            <div className="whole-container">
                <div id="card1">
                    <ul>
                        <h3>Bulk Order Discount + Upto 18% GST Savings.</h3>
                        <li>
                            <img src={img11} alt="first" />
                        </li>
                        <li>
                            <img src={img12} alt="second" />
                        </li>
                        <li>
                            <img src={img13} alt="third" />
                        </li>
                        <li>
                            <img src={img14} alt="fourth" />
                        </li>
                    </ul>
                </div>
                <div id="card2">
                    <ul>
                        <h3>Revamp your home in style</h3>
                        <li>
                            <img src={img21} alt="first" />
                        </li>
                        <li>
                            <img src={img22} alt="second" />
                        </li>
                        <li>
                            <img src={img23} alt="third" />
                        </li>
                        <li>
                            <img src={img24} alt="fourth" />
                        </li>
                    </ul>
                </div>
                <div id="card3">
                    <ul>
                        <h3>Appliances for your home | Upto 55% off</h3>
                        <li>
                            <img src={img31} alt="first" />
                        </li>
                        <li>
                            <p>Branded Ghar soap used for remove Tin on skin.</p>
                        </li>
                        <li>
                            <h2>$299<strike>M.R.P : $599</strike></h2>
                        </li>
                    </ul>
                </div>
                <div id="card4">
                    <ul>
                        <h3>Starting $49 | Deals on home essentials</h3>
                        <li>
                            <img src={img41} alt="first" />
                        </li>
                        <li>
                            <img src={img42} alt="second" />
                        </li>
                        <li>
                            <img src={img43} alt="third" />
                        </li>
                        <li>
                            <img src={img44} alt="fourth" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="kitechen-product">
                <h3>Up to 60% off | Smart furniture for every room</h3>
                <div className="items">
                    <img src={app1} alt="" />
                    <img src={app2} alt="" />
                    <img src={app3} alt="" />
                    <img src={app4} alt="" />
                    <img src={app5} alt="" />
                    <img src={app6} alt="" />
                    <img src={app7} alt="" />
                    <img src={app8} alt="" />
                    <img src={app9} alt="" />
                    <img src={app10} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home