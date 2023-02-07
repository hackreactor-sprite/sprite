import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductDetail from './layout/ProductDetail';
import RelatedProducts from './layout/RelatedProducts';
import QuestionAnswer from './layout/QuestionAnswer';
import RatingReview from './layout/RatingReview';

function App() {
  const [curProduct, setCurProduct] = useState({});
  const [metadata, setMetadata] = useState({});
  const [curStyle, setCurStyle] = useState({});
  const [styles, setStyles] = useState([]);
  const [displayPic, setDisplayPic] = useState('');
  const [relatedProds, setRelatedProds] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    axios
      .get('/products/40346')
      .then((res) => {
        setCurProduct(res.data);
      })
      .catch((err) => new Error(err));
  }, []);

  useEffect(() => {
    setDisplayIndex(0);
    if (curProduct.id) {
      axios
        .get(`reviews/meta/?productid=${curProduct.id}`)
        .then((res) => {
          setMetadata(res.data);
          return axios.get(`/products/${curProduct.id}/styles`);
        })
        .then((res) => {
          setStyles(res.data.results);
          setCurStyle(res.data.results[0]);
          setDisplayPic(res.data.results[0].photos[0].url);
          return axios.get(`/products/${curProduct.id}/related`);
        })
        .then((res) => {
          setRelatedProds([...new Set(res.data)]);
        })
        .catch((err) => new Error(err));
    }
  }, [curProduct]);

  return (
    <div className="App">
      <ProductDetail
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        metadata={metadata}
        styles={styles}
        setStyles={setStyles}
        curStyle={curStyle}
        setCurStyle={setCurStyle}
        displayPic={displayPic}
        setDisplayPic={setDisplayPic}
        displayIndex={displayIndex}
        setDisplayIndex={setDisplayIndex}
      />
      <RelatedProducts
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        curStyle={curStyle}
        metadata={metadata}
        relatedProds={relatedProds}
        setDisplayIndex={setDisplayIndex}
      />
      <QuestionAnswer curProduct={curProduct} />
      <RatingReview
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        metadata={metadata}
      />
    </div>
  );
}

export default App;
