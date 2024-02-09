import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detailcard from "../Components/Detailcard";

function MovieDetails() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
      axios(`https://dummyjson.com/products/${id}`)
          .then((res) => setMovieInfo(res.data))
          .catch((err) => console.log(err));
  }, [id]);

  return (
      <div className="container-fluid  bg-dark">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
             <Detailcard name={movieInfo.title} image={`https://cdn.dummyjson.com/product-images/${id}/1.jpg`} price={movieInfo.price} brand={movieInfo.brand} stock={movieInfo.stock} category={movieInfo.category} description={movieInfo.description}/>
          </div>
        </div>
             
      </div>
  );
}

export default MovieDetails;