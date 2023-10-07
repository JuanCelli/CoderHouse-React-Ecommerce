import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from "../ItemDetail/ItemDetail"

import "./ItemDetailContainer.css"



const ItemDetailContainer = () => {

    const [product,setProduct] = useState()
    const {productId}= useParams()
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, "products", productId)
        getDoc(queryDoc)
        // .then(res => )
            .then(res => ({id: res.id,...res.data()}))
            .then(res=>setProduct(res))
            .catch(error=>console.log(error))
            .finally(() => setLoading(false))

        },[])

    return (
        <div className="main-container-product-detail">
            {!loading?<ItemDetail key={product?.id} product={product}></ItemDetail>:<></>}
        </div>
    )
}

export default ItemDetailContainer