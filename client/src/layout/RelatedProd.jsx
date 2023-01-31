import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function getAverage(rates) {
  let total = 0;
  let sum = 0;
  for (let i = 0; i < Object.keys(rates).length; i += 1) {
    const score = Object.keys(rates)[i];
    sum += Number(score) * Number(rates[score]);
    total += Number(rates[score]);
  }
  const average = sum / total;
  return Number((Math.round(average * 4) / 4).toFixed(2));
}

// TODO: sales price, mock star rating database?
export default function RelatedProd({ id }) {
  const [product, setProduct] = useState({});
  const [average, setAverage] = useState(0);

  useEffect(() => {
    axios.get(`/products/${id}`)
      .then((result) => setProduct(result.data))
      .catch((err) => new Error(err));
    axios.get(`/reviews/meta/?productid=${id}`)
      .then((result) => setAverage(getAverage(result.data.ratings)));
  }, [id]);

  return (
    <li className="carousel-item">
      <div className="product">
        <div>{product.category}</div>
        <div>{product.name}</div>
        <div>{product.default_price}</div>
        <div>
          {average}
          /5 stars
        </div>
      </div>
    </li>
  );
}

RelatedProd.propTypes = {
  id: PropTypes.number.isRequired,
  setCurProduct: PropTypes.func.isRequired,
};
