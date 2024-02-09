import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import MyCard from '../Components/MyCard';
import { getProductsList } from '../Store/Actions/movielistaction';
import { Link } from 'react-router-dom'

function ProductsList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); 
  const allProducts = useSelector((state) => state.list.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then(response => {
          setFilteredProducts(Array.isArray(response.data.products) ? response.data.products : []);
        })
        .catch(error => console.error('Error fetching filtered products:', error));
      setCurrentPage(1); 
    } else {
      setFilteredProducts(allProducts);
    }
  }, [selectedCategory, allProducts]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-secondary'>
      <select style={{height:"50px"}} className='bg-secondary-subtle text-primary fs-4' onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
        <div className="container-fluid bg-dark">
          <div className="row">
            {currentProducts.map((product, index) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-12 my-3">
                <Link to={`/${product.id}`} className="text-decoration-none"><MyCard
                  id={product.id}
                  name={product.title}
                  image={`https://cdn.dummyjson.com/product-images/${product.id}/1.jpg`}
                  price={product.price} brand={product.brand} stock={product.stock} category={product.category}
                /></Link>
              </div>
            ))}
          </div>
        </div>

      <div className="pagination" style={{height:"50px"}}>
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
          <button className='m-1 bg-secondary-subtle text-primary fs-4'  key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
