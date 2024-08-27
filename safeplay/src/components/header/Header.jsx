import "./Header.css";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to={"/"}>
                <div className="logo">
                    <img src={logo} alt="logo image"/>
                    <h2>Safe Play</h2>
                </div>
            </Link>
            <nav>
                <Link to={"/"}>Home</Link>
            </nav>
        </header>
    );
}

export default Header;
