import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='footer' className='footer'>
            <p>&copy; {currentYear} SafePlay. All rights reserved.</p>
            <nav>
                <Link to={'/'}>Home</Link>
            </nav>
        </footer>
    );
}

export default Footer;