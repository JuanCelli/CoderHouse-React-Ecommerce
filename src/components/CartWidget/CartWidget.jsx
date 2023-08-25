import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget(){
    return (
            <a className="nav-link icon-cart btn btn-primary position-relative" href="">
               <FontAwesomeIcon icon={faCartShopping} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    4
                </span>
            </a>

    )
}

export default CartWidget