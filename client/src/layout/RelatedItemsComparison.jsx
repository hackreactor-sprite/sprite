import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RelatedProd from '../components/RelatedItemsComparison/RelatedProd';
import Outfit from '../components/RelatedItemsComparison/Outfit';
import RowCarousel from '../components/reusable/RowCarousel';
import { handleAddOutfit } from '../helper/handleOutfits';
import handleInteractions from '../helper/handleInteractions';

export default function RelatedProducts({
  curProduct, setCurProduct, metadata, curStyle, relatedProds,
}) {
  const location = 'RelatedItemsComparison';
  const [outfits, setOutfits] = useState([]);
  const placeholder = (
    <div
      className="outfit-item"
      style={{
        minWidth: '200px', width: '200px', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        className="outfit"
        style={{
          position: 'relative',
        }}
      >
        <img
          id="outfitPlaceholder"
          src="https://cdn1.iconfinder.com/data/icons/shopping-and-commerce-17/64/98-512.png"
          alt="not found"
          style={{
            width: '200px', height: '225px', objectFit: 'cover',
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <button
            id="addOutfitButton"
            className="big-btn"
            type="button"
            onClick={(ev) => {
              handleAddOutfit(ev, curStyle, outfits, setOutfits);
              handleInteractions({ element: ev.target.id, widget: 'RelatedItemsComparison' });
            }}
          >
            <h5>Add to Outfit</h5>
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <section className="RelatedItemsComparison">
      <div style={{ width: 'max-content', margin: '0 auto' }}>
        <div style={{ width: 'max-content' }}>
          <header className="relatedItemsHeader rel-prod-heading">RELATED PRODUCTS</header>
          <div className="rel-prod-list" style={{ width: 'max-content' }}>
            <RowCarousel location={location} buttonSize={3}>
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
            </RowCarousel>
          </div>
        </div>
        <div style={{ width: 'max-content' }}>
          <header className="relatedItemsHeader outfits-heading">YOUR OUTFIT</header>
          <div className="outfits-list" style={{ width: 'max-content' }}>
            <RowCarousel location={location} buttonSize={3}>
              {[placeholder, ...outfits.map((style) => (
                <Outfit
                  key={style.style_id}
                  style={style}
                  metadata={metadata}
                  curProduct={curProduct}
                  outfits={outfits}
                  setOutfits={setOutfits}
                />
              ))]}
            </RowCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

// RelatedProducts.propTypes = {
//   curProduct: PropTypes.shape({
//     id: PropTypes.number,
//   }).isRequired,
//   setCurProduct: PropTypes.func.isRequired,
//   metadata: PropTypes.shape({
//     product_id: PropTypes.string,
//   }).isRequired,
//   relatedProds: PropTypes.arrayOf(PropTypes.number).isRequired,
//   curStyle: PropTypes.shape({
//     product_id: PropTypes.number,
//   }).isRequired,
// };
