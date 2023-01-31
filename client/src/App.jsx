import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductDetail from './layout/ProductDetail';
import RelatedProducts from './layout/RelatedProducts';
import QuestionAnswer from './layout/QuestionAnswer';
import RatingReview from './layout/RatingReview';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [curProduct, setCurProduct] = useState({});
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    axios
      .get('/products')
      .then((res) => {
        setAllProducts(res.data);
        setCurProduct(res.data[0]);
      })
      .catch((err) => new Error(err));
  }, []);

  useEffect(() => {
    if (curProduct.id) {
      axios
        .get(`reviews/meta/?product_id=${curProduct.id}`)
        .then((res) => {
          setMetadata(res.data);
        })
        .catch((err) => new Error(err));
    }
  }, [curProduct]);

  return (
    <div className="App">
      <ProductDetail
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        metadata={metadata}
      />
      <RelatedProducts
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        metadata={metadata}
      />
      <QuestionAnswer curProduct={curProduct} />
      <RatingReview
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        metadata={metadata}
      />
    </div>
  );
}

export default App;
