import CartWidget from '../cartwidget/CartWidget';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <h3 className='title'>El Jota</h3>
        <CartWidget />
    </div>
  );
}

export default Navbar;