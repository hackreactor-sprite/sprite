import ProductDetail from './layout/ProductDetail.jsx';
import RelatedProducts from './layout/RelatedProducts.jsx';
import QuestionAnswer from './layout/QuestionAnswer.jsx';
import RatingReview from './layout/RatingReview.jsx';
import React, { useEffect, useState } from 'react';

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    //fetch req to grab first item
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
