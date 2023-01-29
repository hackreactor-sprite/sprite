import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductDetail from './layout/ProductDetail';
import RelatedProducts from './layout/RelatedProducts';
import QuestionAnswer from './layout/QuestionAnswer';
import RatingReview from './layout/RatingReview';
import Modal from './components/Reusable/Modal';
import AddQuestionForm from './components/Modal/AddQuestionForm';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [curProduct, setCurProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/products')
      .then((res) => {
        setAllProducts(res.data);
        setCurProduct(res.data[0]);
      })
      .catch((err) => new Error(err));
  }, []);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      {showModal ? (
        <Modal handleModal={handleModal}>
          <AddQuestionForm curProduct={curProduct} handleModal={handleModal} />
        </Modal>
      ) : null}
      <ProductDetail
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
      />
      <RelatedProducts
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
      />
      <QuestionAnswer
        curProduct={curProduct}
        handleModal={handleModal}
        showModal={showModal}
      />
      <RatingReview
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
      />
    </div>
  );
}

export default App;
