import axios from "axios"



export const getProductsList = () => (dispatch) =>  {
    return axios.get('https://dummyjson.com/products')
    .then((res) => {
        dispatch({
            type:  "GET_PRODUCTS",
            payload: Array.isArray(res.data.products) ? res.data.products : [], 
        })
    })
    .catch((err) => console.log(err))
} 