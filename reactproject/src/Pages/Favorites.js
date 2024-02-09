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
      <div className="row">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="col-lg-3 col-md-4 col-sm-12 my-3">
            <div className="card border border-danger bg-danger" style={{width:"300px",height:"400px"}}>
              <img src={favorite.image} className="card-img-top" alt={favorite.name} style={{width:"300px",height:"300px"}}/>
              <div className="card-body text-center">
                <h5 className="card-title text-center text-white">{favorite.name}</h5>
                <button onClick={() => handleRemoveFromFavorites(favorite.id)} className="btn btn-warning">
                  Remove from Wish List
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
