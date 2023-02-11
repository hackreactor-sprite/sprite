import React, { useState, useEffect } from 'react';
import Star from '../reusable/Stars';
import handleInteractions from '../../helper/handleInteractions';

export default function ProductInfo({
  curProduct,
  curStyle,
  metadata,
  reviewLength,
}) {
  // line 11 price needs to be set to the style's price
  'line 5 of product info: ', metadata;
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
    <section className="product-info">
      <h3 className="heading" data-testid="productInfo">
        Product Info
      </h3>
      <div className="info">
        <h3>{totalRank} stars</h3>
        <Star totalRanking={totalRank} />
        <a
          id="review-link"
          onClick={() =>
            handleInteractions({ element: 'reviewLink', widget: 'productInfo' })
          }
          href="#scroll"
        >
          Read {reviewLength} Reviews
        </a>
        <h3>Category: {curProduct.category}</h3>
        <h3>{curProduct.name}</h3>
        {!curStyle.sale_price ? (
          <p>${curStyle.original_price}</p>
        ) : (
          <div>
            <p className="sale">
              ${curStyle.sale_price}{' '}
              <s id="crossedOut">${curStyle.original_price}</s>
            </p>
          </div>
        )}
        <h3>Share:</h3>
        <a
          onClick={() =>
            handleInteractions({
              element: 'iconTwitter',
              widget: 'productInfo',
            })
          }
          href="https://twitter.com/intent/tweet?url=http://44.195.30.52:3000/&text=Up%20Store&via=upstorefront"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <i className="fa-brands fa-left fa-twitter" />
        </a>
        <a
          onClick={() =>
            handleInteractions({ element: 'iconFB', widget: 'productInfo' })
          }
          href="https://www.facebook.com/sharer/sharer.php?u=http://44.195.30.52:3000/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <i className="fa-brands fa-facebook" />
        </a>
        <a
          onClick={() =>
            handleInteractions({ element: 'iconPin', widget: 'productInfo' })
          }
          href="https://www.pinterest.com/pin/create/button?url=http://44.195.30.52:3000/&media=&description=Up%20Store"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <i className="fa-brands fa-pinterest" />
        </a>
      </div>
    </section>
  );
}
