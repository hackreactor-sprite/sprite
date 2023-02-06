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
  const [curStyle, setCurStyle] = useState({});
  const [styles, setStyles] = useState([]);
  const [displayPic, setDisplayPic] = useState('');

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
    axios
      .get(`/reviews/meta/?productid=${curProduct.id}`)
      .then((res) => {
        setMetadata(res.data);
        return axios.get(`/products/${curProduct.id}/styles`);
      })
      .then((res) => {
        setStyles(res.data.results);
        setCurStyle(res.data.results[0]);
        setDisplayPic(res.data.results[0].photos[0].url);
      })
      .catch((err) => new Error(err));
  }, [curProduct]);

  return (
    <div className="App">
      <ProductDetail
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        metadata={metadata}
        styles={styles}
        setStyles={setStyles}
        curStyle={curStyle}
        setCurStyle={setCurStyle}
        displayPic={displayPic}
        setDisplayPic={setDisplayPic}
      />
      <RelatedProducts
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        curStyle={curStyle}
        styles={styles}
        setStyles={setStyles}
        metadata={metadata}
      />
      <QuestionAnswer curProduct={curProduct} />
      <RatingReview curProduct={curProduct} metadata={metadata} />
    </div>
  );
}

export default App;
