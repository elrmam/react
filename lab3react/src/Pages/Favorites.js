import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../Store/Actions/FavAction';

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.fav.favorites);

  const handleRemoveFromFavorites = (movieId) => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <div className="container-fluid bg-dark">
      <h1>Favorites Page</h1>
      <div className="row">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="col-lg-3 col-md-4 col-sm-12 my-3">
            <div className="card border border-danger bg-danger">
              <img src={favorite.image} className="card-img-top" alt={favorite.name} />
              <div className="card-body">
                <h5 className="card-title text-center text-white">{favorite.name}</h5>
                <button onClick={() => handleRemoveFromFavorites(favorite.id)} className="btn btn-danger">
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
