import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

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
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className="navbar-brand">{title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Button handleClick={handleHome}>
                    Home
                    </Button>
                </li>
                <li className="nav-item">
                <Button handleClick={handleEsquis}>
                    Esquís
                    </Button>
                </li>
                <li className="nav-item">
                <Button handleClick={handleTablas}>
                    Tablas
                    </Button>
                </li>
                <li className="nav-item">
                    <Button handleClick={handleBotas}>
                    Botas
                    </Button>
                </li>
                </ul>
            </div>
            <CartWidget />
      </nav>
    )
}

export default NavBar