import './index.css'

const Navbar=()=>{
    return(
        <nav className="navbar">
        <h1 className="nav-heading">Kingsukh <br/>
             Guest House</h1>
        <ul className="nav-menu-list">
          <a href="#home" className="nav-link"><li className="menu-item">Home</li></a>
          <a href="#about" className="nav-link"><li className="menu-item">About</li></a>
          <a href="#services" className="nav-link"><li className="menu-item">Services</li></a>
          <a href="#rooms" className="nav-link"><li className="menu-item">Rooms</li></a>
          <a href="#gallary" className="nav-link"><li className="menu-item">Gallary</li></a>
          <a href="#contact" className="nav-link"><li className="menu-item">Contact</li></a>
        </ul>
        <button className="book-btn">BOOK NOW</button>
      </nav>
    )
}

export default Navbar