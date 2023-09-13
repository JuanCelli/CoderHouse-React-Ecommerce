import "./ItemListContainer.css"

import { useState, useEffect } from 'react'
import fetchData from "../../utils/fetchData"
import ItemList from "../ItemList/ItemList"





function ItemListContainer(){
    const [arrayProducts,setArrayProducts] = useState([])
    const [loading,setLoading] = useState(true)




   



    useEffect(()=>{
        fetchData('https://fakestoreapi.com/products')
            .then(res=>{
                setArrayProducts(res)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error:', error);
              });
      },[])


    return(
        <div className="container-item-list">
            {!loading ? <ItemList arrayProducts={arrayProducts}/> : <></>}
        </div>
        )
    }
        

export default ItemListContainer