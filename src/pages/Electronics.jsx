import React from 'react'
import './Electronics.css'
import off1 from '../images/off1.png'
import off2 from '../images/off2.png'
import off3 from '../images/off3.png'
import pay1 from '../images/pay1.png'
import pay2 from '../images/pay2.png'
import pay3 from '../images/pay3.png'
import pay4 from '../images/pay4.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from './store/cartslice/Cartslice'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { eleData, accData, watData } from './Eledata'


const Electronics = () => {
    const cartProducts = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    function showToast(message, type = "success") {
        const toast = document.getElementById("toast");

        toast.innerText = message;
        toast.className = `toast show ${type}`;

        setTimeout(() => {
            toast.className = "toast";
        }, 3000);
    }

    const addCart = (item) => {
        dispatch(addToCart(item));
        showToast("Product added to cart✅", "success");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        showToast("Product removed from cart❌", "error");
    };

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
                <div id="toast" className="toast">Product added to cart</div>
                <h3>Up to 80% off | Shop now</h3>
                <ul id="product">
                    {eleData.map((item) => {
                        return (
                            <li key={item.id}>
                                <img src={item.img} />
                                <p>{item.name}</p>
                                <h3>${item.price} <strike>{item.strike}</strike> </h3>
                                {cartProducts.find(product => product.id === item.id) ? (
                                    <button
                                        className="remove-btn"
                                        onClick={() => deleteCart(item)}
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className="add-btn"
                                        onClick={() => addCart(item)}
                                    >
                                        Add to cart
                                    </button>)}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div id="accessories">
                <h3>Up to 80% off | Shop now</h3>
                <ul id="acc-product">
                    {accData.map((item) => {
                        return (
                            <li key={item.id}>
                                <img src={item.img} />
                                <p>{item.name}</p>
                                <h3>${item.price} <strike>{item.strike}</strike> </h3>
                                {cartProducts.find(product => product.id === item.id) ? (
                                    <button
                                        className="remove-btn"
                                        onClick={() => deleteCart(item)}
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className="add-btn"
                                        onClick={() => addCart(item)}
                                    >
                                        Add to cart
                                    </button>)}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div id="air">
                <h3>Up to 80% off | Shop now</h3>
                <ul id="product">
                    {watData.map((item) => {
                        return (
                            <li key={item.id}>
                                <img src={item.img} />
                                <p>{item.name}</p>
                                <h3>${item.price} <strike>{item.strike}</strike> </h3>
                                {cartProducts.find(product => product.id === item.id) ? (
                                    <button
                                        className="remove-btn"
                                        onClick={() => deleteCart(item)}
                                    >
                                        Remove from cart
                                    </button>
                                ) : (
                                    <button
                                        className="add-btn"
                                        onClick={() => addCart(item)}
                                    >
                                        Add to cart
                                    </button>)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};


export default Electronics