import { useState, useEffect } from 'react'
import fetchData from "../../utils/fetchData"
import removeDuplicate from '../../utils/removeDuplicates'

import NavBar from '../NavBar/NavBar'

const NavBarContainer = () => {
    const [arrayProducts,setArrayProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetchData('https://fakestoreapi.com/products')
            .then(res=>{
                setArrayProducts(res)
                setCategories(removeDuplicate(res,"category"))
                setLoading(false)
            })
            .catch(error => {
                console.error('Error:', error);
              });
      },[])

    return (
        <>
         {!loading ? <NavBar categories={categories}/> : <></>}
        </>
    )
}

export default NavBarContainer