import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedProd from './RelatedProd';
import Carousel, { handleLeftClick, handleRightClick } from '../components/reusable/Carousel';

export default function RelatedProducts({ curProduct, setCurProduct }) {
  const [relatedProds, setRelatedProds] = useState([]);
  const [outfit, setOutfit] = useState([]);
  useEffect(() => {
    if (curProduct.id) {
      axios.get(`/products/${curProduct.id}/related`)
        .then((result) => {
          setRelatedProds(result.data);
        });
    }
  }, [curProduct]);
  return (
    <>
      <h4 className="carousel">Related Products</h4>
      <ul className="carousel-list">
        <Carousel>
          {
        relatedProds.map((id) => <RelatedProd id={id} key={id} setCurProduct={setCurProduct} />)
        }
        </Carousel>
      </ul>
      <h4>Your Outfit</h4>
      <ul className="carousel-list">
        <li>Add to Outfit</li>
      </ul>
    </>
  );
}

RelatedProducts.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  setCurProduct: PropTypes.func.isRequired,
};
