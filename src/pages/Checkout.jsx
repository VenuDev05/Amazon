import React, { useState } from 'react'
import './Cart.css'

const Checkout = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'cod'
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const orderPlace = () => {
    const { name, email, address, payment } = form

    if (!name || !email || !address) {
      alert('Please fill all required fields')
      return
    }

    alert(`Order placed successfully using ${payment.toUpperCase()}`)
    console.log(form)
  }

  return (
    <div className='main-checkout'>
      <h2>Payment Page</h2>

      <div className="checkout-container">

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        {/* Address */}
        <textarea
          placeholder="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />

        {/* Payment Methods */}
        <div className="payment-options">
          <h4>Select Payment Method</h4>
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={form.payment === 'cod'}
              onChange={handleChange}
            />
            <span>Cash On Delivery</span>
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={form.payment === 'card'}
              onChange={handleChange}
            />
            <span>Credit / Debit Card</span>
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={form.payment === 'upi'}
              onChange={handleChange}
            />
            <span>UPI</span>
          </label>
        </div>

        {/* Conditional Fields */}
        {form.payment === 'card' && (
          <div className="card-details">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiry Date" />
            <input type="text" placeholder="CVV" />
          </div>
        )}

        {form.payment === 'upi' && (
          <input type="text" placeholder="Enter UPI ID" />
        )}

        {/* Button */}
        <button onClick={orderPlace}>
          Place Order
        </button>

      </div>
    </div>
  )
}

export default Checkout