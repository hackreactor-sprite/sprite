import ProductDetail from './layout/ProductDetail.jsx';
import RelatedProducts from './layout/RelatedProducts.jsx';
import QuestionAnswer from './layout/QuestionAnswer.jsx';
import RatingReview from './layout/RatingReview.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [curProduct, setCurProduct] = useState({});
  useEffect(() => {
    axios
      .get('/products')
      .then((res) => {
        setAllProducts(res.data);
        setCurProduct(res.data[0]);
      })
      .catch((err) => new Error(err));
  }, []);
  return (
    <div className='App'>
      <ProductDetail product={product} setProduct={setProduct} />
      <RelatedProducts product={product} setProduct={setProduct} />
      <QuestionAnswer product={product} setProduct={setProduct} />
      <RatingReview product={product} setProduct={setProduct} />
    </div>
  );
}

export default App;
