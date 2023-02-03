import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedProd from '../components/RelatedProducts/RelatedProd';
import Outfit from '../components/RelatedProducts/Outfit';
import Carousel from '../components/reusable/Carousel';

export default function RelatedProducts({
  curProduct, setCurProduct, metadata, curStyle,
}) {
  const [relatedProds, setRelatedProds] = useState([]);
  const [outfits, setOutfits] = useState([]);
  // todo: save entire curstyle
  function handleAddOutfit(ev) {
    ev.preventDefault();
    if (outfits.indexOf(curStyle.style_id) === -1) {
      setOutfits([curStyle.style_id, ...outfits]);
    }
  }
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
      <div className="carousel-list">
        <Carousel>
          {
        relatedProds.map((id) => (
          <RelatedProd
            id={id}
            key={id}
            curProduct={curProduct}
            setCurProduct={setCurProduct}
            metadata={metadata}
          />
        ))
        }
        </Carousel>
      </div>
      <h4>Your Outfit</h4>
      <div className="carousel-list">
        <Carousel>
          <div className="carousel-item">
            <div className="product">
              <img
                className="outfitPlaceholder"
                src="https://cdn1.iconfinder.com/data/icons/shopping-and-commerce-17/64/98-512.png"
                alt="not found"
                style={{
                  width: '200px', height: '225px', objectFit: 'cover', border: '1px solid black',
                }}
              />
              <div style={{ cursor: 'pointer' }} onClick={handleAddOutfit} onKeyPress={handleAddOutfit} role="button" tabIndex="0">
                Add to Outfit
              </div>
            </div>
          </div>
          {
        outfits.map((id) => (
          <Outfit
            id={id}
            key={id}
            curProduct={curProduct}
            setCurProduct={setCurProduct}
            metadata={metadata}
            curStyle={curStyle}
          />
        ))
        }
        </Carousel>
      </div>
    </>
  );
}

RelatedProducts.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  setCurProduct: PropTypes.func.isRequired,
  metadata: PropTypes.shape({
    product_id: PropTypes.string,
  }).isRequired,
};
