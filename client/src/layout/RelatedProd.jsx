import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function getProduct(idnumber, callback) {
  axios.get(`/products/${idnumber}`).then((result) => callback(result));
}

// TODO: sales price, mock star rating database?
export default function RelatedProd({ id, setCurProduct }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    // console.log('this useEffect ran');
    getProduct(id, (results) => {
      const { data } = results;
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <div>{product.category}</div>
      <div>{product.name}</div>
      <div>{product.default_price}</div>
    </>
  );
}

RelatedProd.propTypes = {
  id: PropTypes.number.isRequired,
  setCurProduct: PropTypes.func.isRequired,
};
