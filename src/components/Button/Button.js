import { NavLink } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const Button = ({ handleClick, children, ...rest}) => {

    return (
        <Nav.Link onClick={handleClick}>{children}</Nav.Link>
    )
}

export default Button