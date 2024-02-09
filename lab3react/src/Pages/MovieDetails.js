import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detailcard from "../Components/Detailcard";

const apiKey = '4f5ae21300ce6aea9a716d45aff89c51';

function MovieDetails() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
      axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
          .then((res) => setMovieInfo(res.data))
          .catch((err) => console.log(err));
  }, [id]);

  return (
      <div className="container-fluid  bg-dark">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
             <Detailcard name={movieInfo.title} image={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path} `} language={movieInfo.original_language} vote={movieInfo.vote_average} date={movieInfo.release_date} overview={movieInfo.overview}/>
          </div>
        </div>
             
      </div>
  );
}

export default MovieDetails;