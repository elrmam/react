import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import MyCard from '../Components/MyCard';
import { getMoviesList } from '../Store/Actions/movielistaction';


function Movieslist() {
  const movies = useSelector((state) => state.list.movies)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMoviesList())
},[])

return (
  <div className="container-fluid bg-dark">
    <div className="row">
      {movies.map((movie, index) => (
        <div key={movie.id} className="col-lg-3 col-md-4 col-sm-12 my-3">
          <MyCard 
            id={movie.id}
            name={movie.title}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
      ))}
    </div>
  </div>
);
      }
export default Movieslist;
