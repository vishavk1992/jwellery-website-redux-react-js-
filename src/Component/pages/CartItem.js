import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../Features/Counter/CartSlice';
import '../CSS/cartitem.css';
import { useEffect } from 'react';


const CartItem = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  // useEffect(()=>{ 
  //   dispatch(getTotals());
  // },[cart , dispatch]);  //this is for cart quantity displaying 

  const handleRemove = (prod) => {
    dispatch(removeFromCart(prod));
  }

  const handleDecreaseCart = (prod) => {
    dispatch(decreaseCart(prod));
  }

  const handleIncreaseCart = (prod) => {
    dispatch(addToCart(prod));
  }

  const handleClearCart = (prod) => {
    dispatch(clearCart(prod));
  }
  return (
    <div className='container'>
      <h2>Shpping Cart</h2>
      {cart.cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className='cart-title'><div>
            <h3>Title</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
            <div className='cart-items'>
              {cart.cart?.map(item => (
                <div className='cart-item' key={item.id}>
                  <div className='cart-product'>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                    </div>
                    <div>
                      <button className="remove" onClick={() => handleRemove(item)}>Remove</button>
                    </div>
                  </div>
                  <div className='cart-price'>${item.price}</div>
                  <div className='cart-quntity'>
                    <button className='minus' onClick={() => handleDecreaseCart(item)}>-</button>
                    <div className='count'>{item.cartQuantity}</div>
                    <button className='add' onClick={() => handleIncreaseCart(item)}>+</button>
                  </div>
                  <div className='total-price'>
                    ${item.price * item.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className='summary'>
              <button onClick={() => handleClearCart()}>Clear Cart</button>
              <div className='checkout'>
                <div className='subtotal'>
                  <span>SubTotal</span>
                  <span className='amount'>${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and Shipping charges calculated at checkout</p>
                <button>checkout</button>
                <div>
                  <Link to={`/`}><span>Continue Shopping---</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartItem;