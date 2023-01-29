import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedProd from './RelatedProd';

export default function RelatedProducts({ curProduct, setCurProduct }) {
  const [relatedProds, setRelatedProds] = useState([]);
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
      <h5>RelatedProducts</h5>
      <div>
        {relatedProds.map((id) => <RelatedProd id={id} key={id} setCurProduct={setCurProduct} />)}
      </div>
    </>
  );
}

RelatedProducts.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  setCurProduct: PropTypes.func.isRequired,
};
