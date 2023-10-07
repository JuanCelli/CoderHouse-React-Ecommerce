import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import { Link } from 'react-router-dom'

import "../ProductCard/ProductCard.css"
import "./ItemCartWidget.css"

const ItemCartWidget = (props) => {
    const {id,image,quality,title,price, changeQualityProductCart, removeProduct} = props

    const [product,setProduct] = useState()


    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, "products", id)
        getDoc(queryDoc)
            .then(res => ({id: res.id,...res.data()}))
            .then(res=>setProduct(res))
            .catch(error=>console.log(error))

        },[])

    const onChangeQuality = (event) =>{
        changeQualityProductCart(id,parseInt(event.target.value))
    }

    const onClickRemove = () =>{
        removeProduct(id)
    }

    return (
        <div className='product-card-container container-product-cart'>
            <img className='product-img product-cart-img' src={image} alt={`imagen de ${title}`} />
            <div className='product-info-container product-cart-info-container'>
                <Link className='link-product-detail' to={`/detail/${id}`}>
                    <h2 className="product-title">{title}</h2>
                </Link>
                <p>${price}</p>
                <p>${parseFloat(price*quality)}</p>
                <input className='input-quality' type="number" value={quality} onChange={onChangeQuality} min={1} max={product?.stock} step={1}/>
                <button className='operator-button remove-product-cart-button' onClick={onClickRemove}>Quitar</button>
            </div>
        </div>
    )
}

export default ItemCartWidget
