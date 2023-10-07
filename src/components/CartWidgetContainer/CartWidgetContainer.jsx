import { useContext } from "react"

import { CartContext } from "../../context/cartContext"
import ItemCartWidget from "../ItemCartWidget/ItemCartWidget"

import "./CartWidgetContainer.css"
import { useNavigate } from "react-router-dom"

const CartWidgetContainer = () => {
  const {cartList , cleanCartList ,getQualityProducts,getPriceCart,changeQualityProductCart,removeProduct} = useContext(CartContext)

  const handleClick = ()=>{
    navigate("/checkout")
  }

  const navigate = useNavigate()

  return (
    <div className="container-cart-widget">
      {getQualityProducts()===0?
          <h2>El carrito está vacio</h2> :
          <>
            {cartList.map(product=><ItemCartWidget 
                                        key={product.id}
                                        id={product.id}
                                        image={product.image}
                                        quality={product.quality}
                                        title={product.title}
                                        price={product.price}
                                        changeQualityProductCart={changeQualityProductCart}
                                        removeProduct={removeProduct}></ItemCartWidget>
                                      )}
            <div className="container-total-cart product-info-container product-cart-info-container ">
              <div className="total-cart-container">
                <p className="item-info-total">Cantidad de productos: {getQualityProducts()}</p>
                <p className="item-info-total">Total: ${getPriceCart()} </p>
              </div>
            </div>
            <div className="panel-buttons-cart">
              <button className="operator-button remove-products-cart-button" onClick={cleanCartList}>Vaciar</button>
              <button className="operator-button buy-cart-button" onClick={handleClick} >Comprar</button>
            </div>
          </>

    }
    </div>

  )
}

export default CartWidgetContainer