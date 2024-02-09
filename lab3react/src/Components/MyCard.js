// MyCard.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Store/Actions/FavAction';

function MyCard(props) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.fav.favorites);

  const isFavorite = favorites.some(movie => movie.id === props.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(props.id));
    } else {
      dispatch(addToFavorites(props));
    }
  };

  return (
    <div className={`card border ${isFavorite ? "border-danger" : ""} bg-danger`}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title text-center text-white">{props.name}</h5>
        <button onClick={handleFavoriteClick}>
          <img
            src={isFavorite ? "/gold.svg" : "/gold.png"}
            style={{ width: "100", height: "50px" }}
            alt="Favorite"
          />
        </button>
      </div>
    </div>
  );
}

export default MyCard;
