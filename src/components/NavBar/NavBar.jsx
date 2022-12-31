
import CartWidget from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


function NavBar () {
    return (
        <div>
            
            <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="link-dark">
                    <Navbar.Brand>
                    Pato Online Store
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <NavLink to="/category/pantalones" className="link-dark p-2">Pantalones</NavLink>
                    <NavLink to="/category/remeras" className="link-dark p-2">Remeras</NavLink>
                </Nav>
                <CartWidget/>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;