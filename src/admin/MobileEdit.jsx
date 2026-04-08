import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MobileEdit = () => {

  const API_URL = "https://amazon-data-bzmn.onrender.com"


  const { id } = useParams()
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    img: ""
  })

  useEffect(() => {
    fetch(`${API_URL}/mobDataList/${id}`)
      .then((res) => res.json())
      .then(((data) => setProductData(data)))
  })

  const handleUpdate = (event) => {
    event.preventDefault()
    const form = event.target
    const title = form.title.value
    const price = form.price.value
    const img = form.img.value

    const productObj = { title, price, img }
    console.log(productObj)

    fetch(`${API_URL}/mobDataUpdate/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    }).then((res) => res.json()).then((Data) => {
      alert("Update pannitan da")
      window.location.href = '/'
    })
  }

  return (
    <div id='upload-whole'>
      <form onSubmit={handleUpdate}>

        <div className="upload-title">
          <label value="title">Title</label>
          <input type="text" id="title" defaultValue={productData.title} />
        </div>

        <div className="upload-num">
          <label value="price">Price</label>
          <input type="number" id='price' defaultValue={productData.price} />
        </div>

        <div className="upload-img">
          <label value="img">Image</label>
          <input type="text" id='img' defaultValue={productData.img} />
        </div>

        <input type="submit" name="btn" value='update' id="sub-btn" />

      </form>
    </div>
  )
}

export default MobileEdit