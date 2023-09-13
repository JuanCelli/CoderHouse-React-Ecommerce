import PanelDetailContainer from "../PanelDetailContainer/PanelDetailContainer"

import "./ItemDetail.css"

const ItemDetail = (props) => {
    const {id,title,image,category,price,description,stock} = props
    
    return (
        <div className="product-detail-container">
            <div className="product-detail-container-img">
                <img className="product-detail-img" src={image}></img>
            </div>
            <div className="product-detail-container-info">
                <h3 className="product-detail-title">{title}</h3>
                <p>${price}</p>
                <PanelDetailContainer initial={1} stock={stock} />
            </div>
        </div>
    )
}

export default ItemDetail