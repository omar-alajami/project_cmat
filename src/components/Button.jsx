import { Link } from "react-router-dom";
import '../styles/home.css';

function Button({name, path}){
    return(
        <Link to={path} className="buttonPrimary">{name}</Link>
    )
}

export default Button;