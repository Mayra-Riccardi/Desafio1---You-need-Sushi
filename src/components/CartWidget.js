import cart from '../img/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const test = useContext(CartContext);
    return(
        <Link to="/">
           { 
             <span className="position-absolute top-0 start-70 badge rounded-pill bg-danger">
             {test.notificacionCarrito()}
             </span>
}
        <img className='cart' src={cart} alt="" width="35" height="35"/>
        </Link>
    )
}

export default CartWidget;