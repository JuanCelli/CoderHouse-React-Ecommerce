import './NavBar.css'


import CartWidget from '../CartWidget/CartWidget'

function NavBar(){
let srcImgLogo = "/src/assets/Percha.png"

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img className='navbar-brand-img' src={srcImgLogo} alt="Icon Brand" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Categorias<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Descuentos</a>
                    </li>
                    <li className="nav-item">
                        <CartWidget/>
                    </li>

                    </ul>
                </div>
            </nav>
    )
}

export default NavBar