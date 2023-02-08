import React, { useState, useEffect } from 'react';
import Star from '../reusable/Stars';
import getAverage from '../../helper/getAverage';

export default function ProductInfo({ curProduct, curStyle, metadata }) {
  // line 11 price needs to be set to the style's price
  // console.log('line 5 of product info: ', metadata);
  const [reviewRank, setReviewRank] = useState({});
  const [totalRank, setTotalRank] = useState(0);

  useEffect(() => {
    if (metadata.product_id) {
      setReviewRank(metadata.ratings);

      const total = Object.values(metadata.ratings).reduce(
        (acc, cur) => acc + parseInt(cur),
        0,
      );
      const weight = Object.keys(metadata.ratings).reduce(
        (acc, cur) => acc + parseInt(cur) * parseInt(metadata.ratings[cur]),
        0,
      );

      // setTotalRating(total);
      setTotalRank(Math.round((weight / total) * 4) / 4);
    }
  }, [metadata]);

  return (
    <section>
      <h3 data-testid="productInfo">Product Info</h3>
      <h5>{totalRank}</h5>
      {/* <p>Read all {# of reviews} reviews</p> */}
      <Star totalRanking={totalRank} />
      <h5>{curProduct.category}</h5>
      <h3>{curProduct.name}</h3>
      {!curStyle.sale_price ? (
        <p>${curStyle.original_price}</p>
      ) : (
        <div>
          <p className="saleOut">${curStyle.sale_price}</p>
          <p className="crossOut">
            <s>${curStyle.original_price}</s>
          </p>
        </div>
      )}
    </section>
  );
}
