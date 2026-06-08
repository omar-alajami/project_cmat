import '../styles/navbar.css';
import img from '../assets/cmat_logo_col2.png';
import menu from '../assets/menu.png';
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-dark navbar-expand-lg customNavbar">
            <div className='custCont'>
                <div className="container-fluid logLink">
                    <Link className="navbar-brand" to="/">
                        <img src={img} alt="hmph" className='logo' />
                    </Link>
                    
                    <button 
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='offcanvas'
                        data-bs-target='#linkss'
                    >
                        <img src={menu} alt="|||" style={{height: '42px'}}/>
                    </button>

                    <div className='offcanvas offcanvas-end' tabIndex='-1' id='linkss'>
                        <div className='offcanvas-body'>
                            <ul className="navbar-nav ms-auto d-flex gap-3">
                                <li className='nav-item'><Link className="nav-link" to="/">Home</Link></li>
                                <li className='nav-item'><Link className="nav-link" to="/Courses">View All Courses</Link></li>
                                <li className='nav-item'><Link className="nav-link" to="/Search">Search By Code</Link></li>
                                <li className='nav-item'><Link className="nav-link" to="/About">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
