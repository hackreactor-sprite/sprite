import React, { useState } from 'react';
import Gallery from '../components/Products/Gallery';
import StyleSelector from '../components/Products/StyleSelector';
import AddToCart from '../components/Products/AddToCart';
import ProductInfo from '../components/Products/ProductInfo';
import ProductOverview from '../components/Products/ProductOverview';

export default function ProductDetail({
  displayPic, setDisplayPic, curProduct, styles, setStyles, curStyle, setCurStyle,
}) {
  return (
    <section className="productDetail">
      <div className="left">
        <Gallery
          displayPic={displayPic}
          setDisplayPic={setDisplayPic}
          styles={styles}
          curStyle={curStyle}
        />
        <ProductOverview curStyle={curStyle} curProduct={curProduct} />
      </div>
      <div className="right">
        <ProductInfo curProduct={curProduct} curStyle={curStyle} />
        <StyleSelector
          styles={styles}
          setStyles={setStyles}
          curStyle={curStyle}
          setCurStyle={setCurStyle}
          curProduct={curProduct}
          displayPic={displayPic}
          setDisplayPic={setDisplayPic}
        />
        <AddToCart curProduct={curProduct} curStyle={curStyle} />
      </div>
    </section>
  );
}

// ProductDetail.propTypes = {
//   curProduct: PropTypes.object.isRequired,
// };
