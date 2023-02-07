import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import getAverage from '../../helper/getAverage';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../reusable/Modal';
import Star from '../reusable/Stars';

export default function RelatedProd({ id, curProduct, setCurProduct }) {
  const [product, setProduct] = useState({});
  const [average, setAverage] = useState(0);
  const [photo, setPhoto] = useState('');
  const [curProd, setCurProd] = useState({});
  const [showModal, setShowModal] = useState(false);
  const content = {
    curProd, product,
  };

  function handleProductClick(ev) {
    ev.preventDefault();
    axios.get(`/products/${ev.target.parentElement.id}`)
      .then((res) => setCurProduct(res.data))
      .catch((err) => { throw new Error(err); });
  }

  useEffect(() => {
    axios.get(`/products/${id}`)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => new Error(err));
    axios.get(`/products/${id}/styles`)
      .then((result) => {
        const photoUrl = result.data.results[0].photos[0].url;
        setPhoto(photoUrl);
      })
      .catch((err) => new Error(err));
    axios.get(`/reviews/meta/?productid=${id}`)
      .then((result) => setAverage(getAverage(result.data.ratings)))
      .catch((err) => new Error(err));
    axios.get(`/products/${curProduct.id}`)
      .then((result) => {
        setCurProd(result.data);
      })
      .catch((err) => new Error(err));
  }, [id]);

  return (
    <div
      className="carousel-item"
      style={{
        minWidth: '200px', width: '200px', overflow: 'hidden', boxShadow: '0 0 2px black',
      }}
    >
      <div
        role="button"
        className="product"
        style={{ cursor: 'pointer', position: 'relative' }}
        onClick={handleProductClick}
        onKeyPress={handleProductClick}
        tabIndex="0"
        id={id}
      >
        <button type="button" style={{ position: 'absolute', right: '0%' }} onClick={(ev) => { ev.stopPropagation(); setShowModal(!showModal); }}>
          ☆
        </button>
        {showModal && createPortal(
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <ModalRoute
              route="Comparison"
              content={content}
              state={showModal}
              setState={setShowModal}
            />
          </Modal>,
          document.body,
        )}
        {photo ? <img className="productPhoto" src={photo} alt="primary product style" style={{ width: '200px', height: '225px', objectFit: 'cover' }} /> : <img className="productPhoto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="not found" style={{ width: '200px', height: '225px', objectFit: 'cover' }} />}
        <div>{product.category}</div>
        <div>{product.name}</div>
        <div>
          ﹩
          {product.default_price}
        </div>
        <div>
          <Star totalRanking={average} />
        </div>
      </div>
    </div>
  );
}

RelatedProd.propTypes = {
  id: PropTypes.number.isRequired,
  curProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  setCurProduct: PropTypes.func.isRequired,
};
