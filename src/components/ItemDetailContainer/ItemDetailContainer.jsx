import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import fetchData from "../../utils/fetchData"

import ItemDetail from "../ItemDetail/ItemDetail"

import "./ItemDetailContainer.css"



const ItemDetailContainer = () => {

    const [product,setProduct] = useState()
    const {productId}= useParams()
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        fetchData(`https://fakestoreapi.com/products`)
            .then(res=>{
                setProduct(res.find(product=>{
                                return product.id === Number(productId)
                            })
                )
                setLoading(false)
            })
            .catch(error => {
                console.error('Error:', error);
              });
      },[])

    return (
        <div className="main-container-product-detail">
            {!loading?<ItemDetail key={product?.id} title={product?.title} image={product?.image} price={product?.price}></ItemDetail>:<></>}
        </div>
    )
}

export default ItemDetailContainer