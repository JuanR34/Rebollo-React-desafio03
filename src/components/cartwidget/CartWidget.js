import './cartwidget.css';

import {AiOutlineShoppingCart} from 'react-icons/ai';

function CartWidget() {
  return (
    <div className="cartwidget">
        <AiOutlineShoppingCart className='icon'/>
    </div>
  );
}

export default CartWidget;