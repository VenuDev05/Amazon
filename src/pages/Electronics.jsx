import React from 'react'
import './Electronics.css'
import off1 from '../images/off1.png'
import off2 from '../images/off2.png'
import off3 from '../images/off3.png'
import pay1 from '../images/pay1.png'
import pay2 from '../images/pay2.png'
import pay3 from '../images/pay3.png'
import pay4 from '../images/pay4.png'
import logo from '../images/airLogo.gif'
import air1 from '../images/air1.jpg'
import air2 from '../images/air2.jpg'
import air3 from '../images/air3.jpg'
import air4 from '../images/air4.jpg'
import air5 from '../images/air5.jpg'
import air6 from '../images/air6.jpg'
import air7 from '../images/air7.jpg'
import air8 from '../images/air8.jpg'
import air9 from '../images/air9.jpg'
import air10 from '../images/air10.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import accLogo from '../images/acc-logo.gif'
import acc1 from '../images/acc1.jpg'
import acc2 from '../images/acc2.jpg'
import acc3 from '../images/acc3.jpg'
import acc4 from '../images/acc4.jpg'
import acc5 from '../images/acc5.jpg'
import acc6 from '../images/acc6.jpg'
import acc7 from '../images/acc7.jpg'
import acc8 from '../images/acc8.jpg'
import watLogo from '../images/watch-logo.gif'
import wat1 from '../images/wat1.jpg'
import wat2 from '../images/wat2.jpg'
import wat3 from '../images/wat3.jpg'
import wat4 from '../images/wat4.jpg'
import wat5 from '../images/wat5.jpg'
import wat6 from '../images/wat6.jpg'
import wat7 from '../images/wat7.jpg'
import wat8 from '../images/wat8.jpg'
import wat9 from '../images/wat9.jpg'
import wat10 from '../images/wat10.jpg'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Electronics = () => {
    return (
        <div>

            {/* OFFER CAROUSEL */}
            <div id="offer-carousel">
                <div
                    id="carouselOffer"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselOffer" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselOffer" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselOffer" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={off1} className="d-block w-100" alt="offer1" />
                        </div>
                        <div className="carousel-item">
                            <img src={off2} className="d-block w-100" alt="offer2" />
                        </div>
                        <div className="carousel-item">
                            <img src={off3} className="d-block w-100" alt="offer3" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" data-bs-target="#carouselOffer" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" data-bs-target="#carouselOffer" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>

            {/* PAYMENT CAROUSEL */}
            <div id="pay-carousel">
                <div
                    id="carouselPay"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselPay" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselPay" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselPay" data-bs-slide-to="2"></button>
                        <button data-bs-target="#carouselPay" data-bs-slide-to="3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={pay1} className="d-block w-100" alt="pay1" />
                        </div>
                        <div className="carousel-item">
                            <img src={pay2} className="d-block w-100" alt="pay2" />
                        </div>
                        <div className="carousel-item">
                            <img src={pay3} className="d-block w-100" alt="pay3" />
                        </div>
                        <div className="carousel-item">
                            <img src={pay4} className="d-block w-100" alt="pay4" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" data-bs-target="#carouselPay" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" data-bs-target="#carouselPay" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
            <div id="air">
                <h3>Up to 80% off | Shop now</h3>
                <ul id="product">

                    <li>
                        <img src={logo} id='img1' />
                    </li>
                    <li>
                        <img src={air1} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air2} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3></li>
                    <li>
                        <img src={air3} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air4} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air5} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air6} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air7} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air8} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air9} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={air10} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                </ul>
            </div>
            <div id="accessories">
                <h3>Up to 80% off | Shop now</h3>
                <ul id="acc-product">

                    <li>
                        <img src={accLogo} id='img1' />
                    </li>
                    <li>
                        <img src={acc1} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={acc2} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3></li>
                    <li>
                        <img src={acc3} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={acc4} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={acc5} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={acc6} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={acc7} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={acc8} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    
                </ul>
            </div>
            <div id="air">
                <h3>Up to 80% off | Shop now</h3>
                <ul id="product">

                    <li>
                        <img src={watLogo} id='img1' />
                    </li>
                    <li>
                        <img src={wat1} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat2} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3></li>
                    <li>
                        <img src={wat3} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat4} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat5} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat6} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat7} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat8} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat9} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                    <li>
                        <img src={wat10} />
                        <p>boat Airpods 141 Gen 2</p>
                        <h3>$1,099 <strike>M.R.P : $3,999</strike></h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default Electronics