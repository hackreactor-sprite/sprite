import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RelatedProd from '../components/RelatedProducts/RelatedProd';
import Outfit from '../components/RelatedProducts/Outfit';
import Carousel from '../components/reusable/Carousel';
import { handleAddOutfit } from '../helper/handleOutfits';

export default function RelatedProducts({
  curProduct, setCurProduct, metadata, curStyle, relatedProds,
}) {
  const [outfits, setOutfits] = useState([]);
  return (
    <section className="relatedproducts">
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
          <div
            className="carousel-item"
            style={{
              minWidth: '200px', width: '200px', overflow: 'hidden', boxShadow: '0 0 2px black',
            }}
          >
            <div
              className="outfit"
              style={{
                position: 'relative',
              }}
            >
              <img
                className="outfitPlaceholder"
                src="https://cdn1.iconfinder.com/data/icons/shopping-and-commerce-17/64/98-512.png"
                alt="not found"
                style={{
                  width: '200px', height: '225px', objectFit: 'cover',
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <button type="button" onClick={(ev) => handleAddOutfit(ev, curStyle, outfits, setOutfits)}>
                  <h5>Add to Outfit</h5>
                </button>
              </div>
            </div>
          </div>
          {
        outfits.map((style) => (
          <Outfit
            key={style.style_id}
            style={style}
            metadata={metadata}
            curProduct={curProduct}
            outfits={outfits}
            setOutfits={setOutfits}
          />
        ))
        }
        </Carousel>
      </div>
    </section>
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
  relatedProds: PropTypes.arrayOf(PropTypes.number).isRequired,
  curStyle: PropTypes.shape({
    product_id: PropTypes.number,
  }).isRequired,
};
