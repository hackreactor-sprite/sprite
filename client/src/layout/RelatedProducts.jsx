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
      <h4 className="rel-prod-heading">Related Products</h4>
      <div className="rel-prod-list">
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
      <h4 className="outfits-heading">Your Outfit</h4>
      <div className="outfits-list">
        <Carousel>
          <div
            className="outfit-item"
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
                id="outfitPlaceholder"
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
