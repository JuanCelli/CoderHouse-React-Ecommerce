import { createContext, useEffect, useState } from "react";
import {localStoarageCartRefresh , startCart} from "../utils/localStotageCart";
import Swal from "sweetalert2";

export const CartContext = createContext([])

import { useNavigate } from 'react-router-dom';
import {doc,getDoc,addDoc, collection, getFirestore, updateDoc } from "firebase/firestore";


const CartContextProvider = ({children}) => {
    // const [cartList, setCartList] = useState([])
    const [cartList, setCartList] = useState(startCart())

    const navigate = useNavigate()


    useEffect(()=>{
        localStoarageCartRefresh(cartList)
    },[cartList])


    const addProduct = (newProduct) =>{
        const productJustAdd = cartList.find((product) => product.id===newProduct.id)

        if(productJustAdd!== undefined){
            productJustAdd.quality += newProduct.quality
            setCartList([...cartList])
        }
        else{
            setCartList([...cartList,newProduct])
        }

        Swal.fire({
            title: `Genial!`,
            text: `Agregaste ${newProduct.title} al carrito.`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Seguir comprando',
            cancelButtonText: 'Ir al carrito',
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                navigate('/cart')
            }
          });
    }

    const removeProduct = (id) =>{
        
        const productRemoved = (cartList.find(product=>product.id === id))


        Swal.fire({
            title: 'Estás seguro?',
            text: `Si presionas OK quitarás ${productRemoved.title} del carrito`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
            setCartList(cartList.filter(product=>product.id !== id))

            Swal.fire(
                'Hecho!',
                `Has eliminado ${productRemoved.title} del carrito`,
                'success'
            )
            }
          })
    }

    const cleanCartList = ()=>{
        Swal.fire({
            title: 'Estás seguro?',
            text: `Si presionas OK eliminarás todos los productos del carrito`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
            setCartList([])

            Swal.fire(
                'Hecho!',
                `Has eliminado todos los productos del carrito`,
                'success'
            )
            }
          })
    }

    const changeQualityProductCart = (id,newQuality)=>{
        cartList.find(product=>product.id===id).quality = newQuality
        setCartList([...cartList])
    }

    const handleAddOrder =(dataForm)=>{
        const order = {}
        order.buyer = {
          name:dataForm.name,
          dni:dataForm.dni,
          mail:dataForm.mail,
          phone:dataForm.phone,
          payMethod:dataForm.payMethod,
          numberCard:dataForm.numberCard
        }
        order.item = cartList.map(product=>{
          refreshStockDb(product.id,product.quality)
          return ({
            id: product.id,
            title: product.title,
            price: product.price,
            quality: product.quality,
          })
        })
        order.total = getPriceCart()

        const db = getFirestore()
        const orderCollection = collection(db,"orders")
        addDoc(orderCollection, order)
          .then(res=>{
            Swal.fire({
              icon: 'success',
              title: 'Compra realizada correctamente!',
              text: `Su codigo de compra es ${res.id}`,
              confirmButtonText: 'Ok',
            })
          })
          .finally(()=>{
            setCartList([])
            navigate("/")
          })

    }
    
    const refreshStockDb = (id,quality) =>{
      const db = getFirestore()
      const queryUpdateProductStock = doc(db, "products",id)

      getDoc(queryUpdateProductStock)
        .then(res=>({...res.data()}))
        .then(res=>{
          const stockResult = (res.stock-quality)
          updateDoc(queryUpdateProductStock,{
            stock: stockResult
          })
        })
    }

    const getQualityProducts = ()=> cartList.reduce((total, product) => total + product.quality,0)

    const getPriceCart = () => cartList.reduce((total, product) => total + parseFloat(product.price*product.quality),0)

  return (
    <CartContext.Provider value={{cartList,addProduct, cleanCartList,getQualityProducts,getPriceCart,changeQualityProductCart,removeProduct,handleAddOrder}}>
        {children}
    </CartContext.Provider>
  )
}





export default CartContextProvider
