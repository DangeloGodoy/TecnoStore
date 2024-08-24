import CartWidget from "./CartWidget"

function NavBar () {
    return (
        <nav className="navbar">
            <div className="brand-logo">TecnoStore</div>
            <ul>
                <li><a href="#phones">Celulares</a></li>
                <li><a href="#computings">Computación</a></li>
                <li><a href="#components">Componentes</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar