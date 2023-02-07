import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedProd from '../components/RelatedProducts/RelatedProd';
import Outfit from '../components/RelatedProducts/Outfit';
import Carousel from '../components/reusable/Carousel';

export default function RelatedProducts({
  curProduct, setCurProduct, metadata, curStyle, styles, setStyles, relatedProds,
}) {
  const [outfits, setOutfits] = useState([]);
  function handleAddOutfit(ev) {
    ev.preventDefault();
    if (outfits.filter((outfit) => outfit.style_id === curStyle.style_id).length === 0) {
      setOutfits([...outfits, curStyle]);
    }
  }
  function handleDeleteOutfit(ev) {
    ev.preventDefault();
    const updatedOutfits = outfits.filter(
      (outfit) => outfit.style_id !== Number(ev.target.parentElement.id),
    );
    setOutfits(updatedOutfits);
  }
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
                <button type="button" onClick={handleAddOutfit}>
                  <h5>Add to Outfit</h5>
                </button>
              </div>
            </div>
          </div>
          {
        outfits.map((style) => (
          <Outfit
            id={style.style_id}
            key={style.style_id}
            style={style}
            metadata={metadata}
            curProduct={curProduct}
            handleDeleteOutfit={handleDeleteOutfit}
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
};
