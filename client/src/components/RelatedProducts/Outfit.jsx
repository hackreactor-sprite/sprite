import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import getAverage from '../../helper/getAverage';

export default function Outfit({ curProduct, curStyle, metadata }) {
  const [photo, setPhoto] = useState('');
  useEffect(() => {
    axios.get(`/products/${curProduct.id}/styles`)
      .then((result) => {
        const allStyles = result.data.results;
        const selectedStyle = allStyles.filter((style) => style.style_id === curStyle.style_id);
        const photoUrl = selectedStyle[0].photos[0].url;
        setPhoto(photoUrl);
      })
      .catch((err) => new Error(err));
  }, [curStyle]);

  return (
    <div className="carousel-item">
      <div className="outfit">
        {photo ? <img className="productPhoto" src={photo} alt="primary product style" style={{ width: '200px', height: '225px', objectFit: 'cover' }} /> : <img className="productPhoto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="not found" style={{ width: '200px', height: '225px', objectFit: 'cover' }} />}
        <div>{curProduct.category}</div>
        <div>{curStyle.name}</div>
        <div>
          $
          {curStyle.original_price}
        </div>
        <div>
          {getAverage(metadata.ratings)}
          /5 ★★★★★
        </div>
      </div>
    </div>
  );
}

Outfit.propTypes = {
  id: PropTypes.number.isRequired,
};
