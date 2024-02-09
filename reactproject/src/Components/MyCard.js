import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Store/Actions/FavAction';
import { addToCart, removeFromCart } from '../Store/Actions/cartaction';

function MyCard(props) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.fav.favorites);
  const cartItems = useSelector(state => state.cart.cartItems);

  const isFavorite = favorites.some(movie => movie.id === props.id);
  const isInCart = cartItems.some(item => item.id === props.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(removeFromFavorites(props.id));
    } else {
      dispatch(addToFavorites(props));
    }
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    if (isInCart) {
      dispatch(removeFromCart(props.id));
    } else {
      dispatch(addToCart(props));
    }
  };

  return (
    <div className="card border border-white bg-danger ">
      <img src={props.image} className="card-img-top" alt={props.name} style={{ width: "100", height: "300px" }} />
      <div className="card-body text-center">
        <h5 className="card-title text-center text-white ">{props.name}</h5>
        <h5 className="card-title text-warning text-start"><span className="text-black fs-4">price : </span>{props.price} $</h5>
        <h5 className="card-title text-warning text-start"><span className="text-black fs-4">stock : </span>{props.stock}</h5>
        <h5 className="card-title text-warning text-start"><span className="text-black fs-4">brand : </span>{props.brand}</h5>
        <h5 className="card-title text-warning text-start"><span className="text-black fs-4">category : </span>{props.category}</h5>
        <button className="btn btn-warning" onClick={handleFavoriteClick}>
          {isFavorite ? "Remove from Wish List" : "Add to WishList"}
        </button>
        <button className="btn btn-success mx-2" onClick={handleCartClick}>
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default MyCard;
