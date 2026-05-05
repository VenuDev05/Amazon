import React from 'react'
import banner1 from '../images/Fasbanner1.jpeg'
import banner2 from '../images/Fasbanner2.jpeg'
import banner3 from '../images/Fasbanner3.jpeg'
import banner4 from '../images/Fasbanner4.jpeg'
import banner5 from '../images/Fasbanner5.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from './store/cartslice/Cartslice'
import { useState,useEffect } from 'react'
import './Fashion.css'

const Fashion = () => {
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

    const [fashion, setFashion] = useState([])
        const API_URL = "https://amazon-data-bzmn.onrender.com"

    useEffect(()=>{
        fetch(`${API_URL}/fasDataReceive`)
        .then((res)=>res.json())
        .then((data)=>setFashion(data))
    },[])

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
        <div className="fasProduct">
            {fashion.map((item) => {
                        return (
                            <li key={item._id}>
                                <img src={item.img} alt={item.title}/>
                                <p>{item.title}</p>
                                <h3>${item.price} </h3>
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
        </div>
    </div>
  )
}

export default Fashion