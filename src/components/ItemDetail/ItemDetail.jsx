import { useContext } from "react"

import { CartContext } from "../../context/cartContext"
import PanelDetailContainer from "../PanelDetailContainer/PanelDetailContainer"

import "./ItemDetail.css"

const ItemDetail = (props) => {
    const { addProduct} = useContext(CartContext)
    const {product} = props
    const {id,title,image,price,description,stock} = props?.product

    const handleAdd = (count)=>{
        addProduct(
            {...product,
            quality: count})
    }
    
    return (
        <div className="product-detail-container">
            <div className="product-detail-container-img">
                <img className="product-detail-img" src={image}></img>
            </div>
            <div className="product-detail-container-info">
                <h3 className="product-detail-title">{title}</h3>
                <p>${price}</p>
                <p>Stock: {stock}</p>
                <PanelDetailContainer initial={1} stock={stock} onAdd={handleAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail