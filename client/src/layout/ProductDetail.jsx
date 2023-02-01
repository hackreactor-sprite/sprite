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
  console.log('line 12 styles: ', styles);
  // want displayPic to just be an index number of array of current styles pictures

  // const [allSkus, setAllSkus] = useState([]);
  // ask about moving this to original get call
  // set the state of all skus that are given using Object.entries
  // to push objects containing id, size, and quantity into an array state
  // then I can access the state and grab the id, size, and quantity
  // whenever I need

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
        <AddToCart curProduct={curProduct} curStyle={curStyle} />
      </section>
    </section>
  );
}

// ProductDetail.propTypes = {
//   curProduct: PropTypes.object.isRequired,
// };
