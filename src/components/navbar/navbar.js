import './NavBar.css'

const NavBar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Esquís</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tablas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Botas</a>
                </li>
                </ul>
            </div>
      </nav>
    )
}

export default NavBar