import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, NavbarBrand, Nav, NavLink } from "react-bootstrap";
import { Container } from "react-bootstrap";

const NavBar = ({ title, ...rest }) => { //{ title: 'ecommerce ', color='red'}
    // const { title, color } = props 
    const handleHome = () => {
      alert('Home')
    }
  
    const handleEsquis = () => {
        alert('Esquís')
    }
  
    const handleTablas = () => {
        alert('Tablas')
    }

    const handleBotas = () => {
        alert('Botas')
    }
    
    return (
        <Navbar bg="light">
            <Container>
            <Navbar.Brand href="#home">Tienda Xplora</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Esquís</Nav.Link>
                <Nav.Link>Tablas</Nav.Link>
                <Nav.Link>Botas</Nav.Link>
            </Nav>
            <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar