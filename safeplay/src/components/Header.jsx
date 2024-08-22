import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Safe Play</div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;