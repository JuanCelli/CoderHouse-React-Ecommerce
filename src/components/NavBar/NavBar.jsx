import takeOutSpace from "../../utils/takeOutSpaces"

import { Link } from 'react-router-dom'
import CartWidgetIcon from '../CartWidgetIcon/CartWidgetIcon'

import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'



function NavBar(props){
    const {categories} = props


    let srcImgLogo = "/src/assets/Percha.png"

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/"><img className='navbar-brand-img' src={srcImgLogo} alt="Icon Brand" /></Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><Link className="nav-link" to="/">Inicio<span className="sr-only"></span></Link></li>
                        <li className="nav-item active">
                            <div className="nav-item collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul className="nav-item navbar-nav">
                                    <li className="nav-item dropdown">
                                    <span className="nav-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </span>
                                    <ul className="dropdown-menu">
                                        {categories?.map((category)=>{
                                            return (
                                                <li key={category}><Link className="dropdown-item" to={`/category/${takeOutSpace(category)}`}>{category}<span className="sr-only"></span></Link></li>
                                            )
                                        })}
                                    </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" >
                                <CartWidgetIcon/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default NavBar