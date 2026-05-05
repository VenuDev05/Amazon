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
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import s5 from '../images/s5.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { addToCart, deleteFromCart } from './store/cartslice/Cartslice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const Today = () => {
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

    const [mobData, setMobData] = useState([])
    const API_URL = "https://amazon-data-bzmn.onrender.com"


    useEffect(() => {
        fetch(`${API_URL}/mobDataReceive`)
            .then((res) => res.json())
            .then((data) => setMobData(data))
    })

    return (
        <div>
            <div id="toast" className="toast">Product added to cart</div>
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
          
            <div id="product">
                <ul id='product-ul'>
                    {mobData.map((item) => {
                        return (
                            <li key={item._id}>
                                <img src={item.img} />
                                <p>{item.title}</p>
                                <h3>${item.price} <strike>{item.strike}</strike> </h3>

                                {cartProducts.find(product => product._id === item._id) ? (
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