import React from 'react';
import PropTypes from 'prop-types';
import getAverage from '../../helper/getAverage';
import Star from '../reusable/Stars';
import { handleDeleteOutfit } from '../../helper/handleOutfits';

export default function Outfit({
  style, metadata, curProduct, outfits, setOutfits,
}) {
  const photo = style.photos[0].url;
  return (
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
        id={style.style_id}
      >
        <button type="button" style={{ position: 'absolute', right: '0%' }} onClick={(ev) => handleDeleteOutfit(ev, outfits, setOutfits)}>
          X
        </button>
        {photo ? <img className="productPhoto" src={photo} alt="primary product style" style={{ width: '200px', height: '225px', objectFit: 'cover' }} /> : <img className="productPhoto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" alt="not found" style={{ width: '200px', height: '225px', objectFit: 'cover' }} />}
        <div>{curProduct.category}</div>
        <div>{style.name}</div>
        {!style.sale_price ? (
          <div>
            $
            {style.original_price}
          </div>
        ) : (
          <>
            <div style={{ color: 'red' }}>
              $
              {style.sale_price}
            </div>
            <div style={{ textDecoration: 'line-through' }}>
              $
              {style.original_price}
            </div>
          </>
        )}
        <div>
          <Star totalRanking={getAverage(metadata.ratings)} />
        </div>
      </div>
    </div>
  );
}
// Outfit.propTypes = {
//   curProduct: PropTypes.shape({
//     id: PropTypes.number,
//     category: PropTypes.string,
//   }).isRequired,
//   metadata: PropTypes.shape({
//     product_id: PropTypes.string,
//     ratings: PropTypes.shape({
//       1: PropTypes.string,
//       2: PropTypes.string,
//       3: PropTypes.string,
//       4: PropTypes.string,
//       5: PropTypes.string,
//     }),
//   }).isRequired,
//   style: PropTypes.shape({
//     style_id: PropTypes.number,
//     name: PropTypes.string,
//     original_price: PropTypes.string,
//     sale_price: PropTypes.string,
//     photos: PropTypes.arrayOf(PropTypes.shape({
//       url: PropTypes.string,
//     })),
//   }).isRequired,
//   outfits: PropTypes.arrayOf(PropTypes.shape({
//     product_id: PropTypes.number,
//   })).isRequired,
//   setOutfits: PropTypes.func.isRequired,
// };
