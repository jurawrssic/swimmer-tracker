import logo from '../swimming.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" />

      <div>
        <h1>Swimming Tracker</h1>
        <p>Track your swimming progress!</p>
      </div>
    </header>
  );
};

export default Header;
