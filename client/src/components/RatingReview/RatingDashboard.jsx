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

  useEffect(() => {
    const rank = { ...reviewRank };
    let count = 0;
    reviewList.forEach((review) => {
      rank[review.rating] += 1;
      count += review.rating;
    });

    setTotalRank(Math.ceil(4 * (count / reviewList.length)) / 4);
    setReviewRank(rank);
  }, [reviewList]);
  console.log('REVIEW LIST :', reviewList);
  return (
    <div>
      <h1>{totalRank}</h1>
      {Object.keys(reviewRank).map((rank) => (
        <div>
          <label className="rating-progress-bar">
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
