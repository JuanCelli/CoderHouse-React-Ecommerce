import { Link } from "react-router-dom"

import "./ProductCard.css"


function ProductCard (props){
    const {id,title,image,category,price,description} = props
    return(
        <Link to={`/detail/${id}`} className="a-product-card-container">
            <div className="product-card-container">
                    <div className="product-img-container"> 
                        <img className="product-img" src={image} alt="" />
                    </div>
                    <div className="product-info-container">
                        <h3 className="product-title">{title}</h3>
                        <div className="container-description-card">
                            <p className="price-card">${price}</p>
                            <p className="category-card">{category}</p>
                        </div>
                    </div>
            </div>
        </Link>
    )
}



export default ProductCard 