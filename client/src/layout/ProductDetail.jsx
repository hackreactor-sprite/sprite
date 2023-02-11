import React, { useState } from 'react';
import Gallery from '../components/Products/Gallery';
import StyleSelector from '../components/Products/StyleSelector';
import AddToCart from '../components/Products/AddToCart';
import ProductInfo from '../components/Products/ProductInfo';
import ProductOverview from '../components/Products/ProductOverview';

export default function ProductDetail({
  curProduct,
  styles,
  setStyles,
  curStyle,
  setCurStyle,
  metadata,
  setMetadata,
  displayIndex,
  setDisplayIndex,
  reviewLength,
}) {
  // const [styles, setStyles] = useState([]);
  // want displayPic to just be an index number of array of current styles pictures
  const [sizeId, setSizeId] = useState('');

  // const [allSkus, setAllSkus] = useState([]);
  // ask about moving this to original get call
  // set the state of all skus that are given using Object.entries
  // to push objects containing id, size, and quantity into an array state
  // then I can access the state and grab the id, size, and quantity
  // whenever I need

  //  ('line 19: ', metadata.ratings);

  return (
    <section className="productDetail">
      <div className="left">
        <Gallery
          curStyle={curStyle}
          displayIndex={displayIndex}
          setDisplayIndex={setDisplayIndex}
        />
        <ProductOverview curStyle={curStyle} curProduct={curProduct} />
      </div>
      <div className="right">
        <ProductInfo
          reviewLength={reviewLength}
          curProduct={curProduct}
          curStyle={curStyle}
          metadata={metadata}
          setMetadata={setMetadata}
        />
        <StyleSelector
          styles={styles}
          setStyles={setStyles}
          curStyle={curStyle}
          setCurStyle={setCurStyle}
          curProduct={curProduct}
          sizeId={sizeId}
          setSizeId={setSizeId}
        />
        <AddToCart
          curProduct={curProduct}
          curStyle={curStyle}
          sizeId={sizeId}
          setSizeId={setSizeId}
        />
      </div>
    </section>
  );
}

// ProductDetail.propTypes = {
//   curProduct: PropTypes.object.isRequired,
// };
