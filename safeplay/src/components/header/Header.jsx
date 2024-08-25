import './Header.css';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt="logo image"/>
            <h2>Safe Play</h2>
        </div>
      <nav>
        <ul>
          <li><a href='#hero'>Home</a></li>
          <li><a href='#features'>Features</a></li>
          <li><a href='#footer'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;