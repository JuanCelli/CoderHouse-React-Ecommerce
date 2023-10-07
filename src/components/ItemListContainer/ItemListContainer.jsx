import "./ItemListContainer.css"

import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"

import {collection, getDocs, getFirestore} from "firebase/firestore"





function ItemListContainer(){
    const [arrayProducts,setArrayProducts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        getDocs(queryCollection)
            .then(res => (res.docs.map(product=>({id:product.id,...product.data()}))))
            .then(res => setArrayProducts(res.filter(product=>product.stock>0)))
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
    },[])


    return(
        <div className="container-item-list">
            {!loading ? <ItemList arrayProducts={arrayProducts}/> : <></>}
        </div>
        )
    }
        

export default ItemListContainer