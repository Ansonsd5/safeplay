import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
const currentYear = new Date().getFullYear();
  return (
    <footer id='footer' className='footer'> 
      <p>&copy; {currentYear} SafePlay. All rights reserved.</p>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;