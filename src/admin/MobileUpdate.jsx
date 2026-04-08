import React, { useEffect, useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const MobileUpdate = () => {

    const API_URL = "https://amazon-data-bzmn.onrender.com"


    const [productItems, setProductItems] = useState([])
    useEffect(() => {
        fetch(`${API_URL}/mobDataReceive`).then((res) => res.json()).then((data) => setProductItems(data), [])
    })
    const deleteItems = (id) => {
        fetch(`${API_URL}/mobDataDelete/${id}`, {
            method: "DELETE"
        }).then((res) => res.json()).then((data) => {
            alert("Data deleted successfully")
            setProductItems((prevProduct) => prevProduct.filter((Item) => Item._id !== id))
        })
    }

    return (
        <div id='update-whole'>
            <li>
                <Link to='/mobUpload' id='updateBtn'>⬅️Upload</Link>
            </li>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {productItems.map((Item) => (
                        <tr key={Item._id}>
                            <td>{Item.title}</td>
                            <td>{Item.price}</td>
                            <td>
                                <img src={Item.img} alt="product" width="60" />
                            </td>
                            <td>
                                <ul id='btn-ul'>
                                    <li>
                                        <button
                                            id='delete-btn'
                                            type='button'
                                            onClick={() => deleteItems(Item._id)}
                                        >
                                            Delete
                                        </button></li>
                                    <li><Link to={`/mobEdit/${Item._id}`} id='edit-btn'>Edit</Link></li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MobileUpdate