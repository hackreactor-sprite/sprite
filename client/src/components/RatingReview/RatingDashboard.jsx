import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RatingDashboard({ reviewList }) {
  const [reviewRank, setReviewRank] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [totalRank, setTotalRank] = useState(0);
  const [recPercent, setRecPercent] = useState(0);

  useEffect(() => {
    const rank = { ...reviewRank };
    let count = 0;
    let recommendCount = 0;
    reviewList.forEach((review) => {
      if (review.recommend) recommendCount += 1;
      rank[review.rating] += 1;
      count += review.rating;
    });
    setRecPercent(recommendCount / reviewList.length);
    setTotalRank(Math.ceil(4 * (count / reviewList.length)) / 4);
    setReviewRank(rank);
  }, [reviewList]);
  console.log('REVIEW LIST :', reviewList);
  return (
    <div>
      <h1>{totalRank}</h1>
      <p>{`${recPercent * 100}% of reviews recommend this product`}</p>
      {Object.keys(reviewRank).map((rank) => (
        <div className="rating-progress-bar">
          <label>
            <ins>{`${rank} stars`}</ins>
            <progress max={reviewList.length} value={reviewRank[rank]}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              {rank}
            </progress>
          </label>
        </div>
      ))}
      <p>Size</p>
      <p>Comfort</p>
    </div>
  );
}
