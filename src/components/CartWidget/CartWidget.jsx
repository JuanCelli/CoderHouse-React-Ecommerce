
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";


function CartWidget(){
    return (
            <div className="nav-link icon-cart btn btn-primary position-relative">
               <FontAwesomeIcon icon={faCartShopping} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id='amount-span'>
                    4
                </span>
            </div>

    )
}

export default CartWidget