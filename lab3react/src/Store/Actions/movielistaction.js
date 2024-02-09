import axios from "axios"


const apiKey = '4f5ae21300ce6aea9a716d45aff89c51';
export const getMoviesList = () => (dispatch) =>  {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((res) => {
        dispatch({
            type:  "GET_MOVIES",
            payload: res.data.results 
        })
    })
    .catch((err) => console.log(err))
} 