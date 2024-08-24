import './Footer.css';

function Footer() {
const currentYear = new Date().getFullYear();
  return (
    <footer id='footer' className='footer'> 
      <p>&copy; {currentYear} SafePlay. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href='#hero'>Home</a></li>
          <li><a href='#features'>Features</a></li>
          <li><a href='#footer'>Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;