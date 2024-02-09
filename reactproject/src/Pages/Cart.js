// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Store/Actions/cartaction';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Remove items with quantity 0
  const filteredCartItems = cartItems.filter(item => item.quantity > 0);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-6 bg-dark'>
          {filteredCartItems.map(item => (
            <div className="row" key={item.id}>
              <div className="col-6 mb-3">
                <div className="card border border-danger bg-danger" style={{ width: "300px", height: "500px" }}>
                  <img src={item.image} className="card-img-top" alt={item.name} style={{ width: "300px", height: "300px" }} />
                  <div className="card-body text-center">
                    <h5 className="card-title text-center text-white">{item.name}</h5>
                    <h5 className="card-title text-center text-black"> price: {item.price} $</h5>
                    <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-warning">
                      Remove from Cart
                    </button>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <button onClick={() => handleDecreaseQuantity(item.id)} className="btn btn-secondary">
                        -
                      </button>
                      <span className="text-white">{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item.id)} className="btn btn-secondary">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='col-6 bg-secondary'>
          <ul>
            {filteredCartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} * {item.quantity} = {item.quantity * item.price}
              </li>
            ))}
          </ul>
          <p className="text-white text-center fs-1">Total Price: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
