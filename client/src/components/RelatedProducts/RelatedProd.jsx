import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import getAverage from '../../helper/getAverage';

// function (number) {
//   return
// }

// TODO: sales price, mock star rating database?
export default function RelatedProd({ id }) {
  const [product, setProduct] = useState({});
  const [average, setAverage] = useState(0);
  const [photo, setPhoto] = useState('');

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
  }, [id]);

  return (
    <div className="carousel-item">
      <div className="product">
        {photo ? <img className="productPhoto" src={photo} alt="primary product style" style={{ width: '200px', height: '225px', objectFit: 'cover' }} /> : <img className="productPhoto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="not found" style={{ width: '200px', height: '225px', objectFit: 'cover' }} />}
        <div>{product.category}</div>
        <div>{product.name}</div>
        <div>
          ﹩
          {product.default_price}
        </div>
        <div>
          {average}
          /5 ★★★★★
        </div>
      </div>
    </div>
  );
}

RelatedProd.propTypes = {
  id: PropTypes.number.isRequired,
};
