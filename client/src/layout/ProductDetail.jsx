import React, { useState } from 'react';
import Gallery from '../components/Products/Gallery';
import StyleSelector from '../components/Products/StyleSelector';
import AddToCart from '../components/Products/AddToCart';
import ProductInfo from '../components/Products/ProductInfo';
import ProductOverview from '../components/Products/ProductOverview';

export default function ProductDetail({ curProduct }) {
  const [styles, setStyles] = useState([]);
  const [curStyle, setCurStyle] = useState({});
  const [displayPic, setDisplayPic] = useState('');

  return (
    <section className="productDetail">
      <section className="left">
        <Gallery
          displayPic={displayPic}
          setDisplayPic={setDisplayPic}
          styles={styles}
          curStyle={curStyle}
        />
        <ProductOverview curStyle={curStyle} curProduct={curProduct} />
      </section>
      <section className="right">
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
        <AddToCart curProduct={curProduct} />
      </section>
    </section>
  );
}

// ProductDetail.propTypes = {
//   curProduct: PropTypes.object.isRequired,
// };
