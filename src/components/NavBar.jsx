import '../styles/navbar.css';
import img from '../assets/cmat_logo_col2.png';
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg customNavbar">
            <div className="custCont">
                <Link className="navbar-brand" to="/">
                    <img src={img} alt="hmph" className='logo' />
                </Link>

                <div className="ms-auto d-flex gap-5">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/Courses">View All Courses</Link>
                    <Link className="nav-link" to="/Search">Search Course By ID</Link>
                    <Link className="nav-link" to="/About">About Us</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
