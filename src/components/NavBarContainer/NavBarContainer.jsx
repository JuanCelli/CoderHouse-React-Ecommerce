import { useState, useEffect } from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import removeDuplicate from '../../utils/removeDuplicates'

import NavBar from '../NavBar/NavBar'

const NavBarContainer = () => {
    const [arrayProducts,setArrayProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [categories, setCategories] = useState([])


    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        getDocs(queryCollection)
            .then(res=>setCategories(removeDuplicate(res.docs.map(product=>({id:product.id,...product.data()})),"category")))
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
    },[])

    return (
        <>
         {!loading ? <NavBar categories={categories}/> : <></>}
        </>
    )
}

export default NavBarContainer