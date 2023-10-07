
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "./CartWidgetIcon.css";
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';




function CartWidgetIcon(){
    const {getQualityProducts} = useContext(CartContext)
    return (
            <div className="nav-link icon-cart btn btn-primary position-relative">
               <FontAwesomeIcon icon={faCartShopping} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id='amount-span'>
                    {getQualityProducts()}
                </span>
            </div>

    )
}

export default CartWidgetIcon