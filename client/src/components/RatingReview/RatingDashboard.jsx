import React, { useState, useEffect } from 'react';

export default function RatingDashboard({ reviewList, metadata }) {
  console.log('METADATA', metadata);
  const [reviewRank, setReviewRank] = useState({});
  const [totalRank, setTotalRank] = useState(0);
  const [recPercent, setRecPercent] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

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

      setTotalRating(total);
      setTotalRank(Math.round(weight / total / 0.25) * 0.25);

      const totalrec =
        parseInt(metadata.recommended.true) +
        parseInt(metadata.recommended.false);

      const weightedAverage = parseInt(metadata.recommended.true) / totalrec;
      setRecPercent(Math.round(weightedAverage / 0.25) * 0.25);
    }
  }, [metadata]);
  return (
    <div>
      <h1>{totalRank}</h1>
      <p>{`${recPercent * 100}% of reviews recommend this product`}</p>
      {Object.keys(reviewRank).map((rank) => (
        <div className="rating-progress-bar">
          <label class="rating-bar-label">
            <ins>{`${rank} stars`}</ins>
            <progress max={1} value={reviewRank[rank] / totalRating}>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              {rank}
            </progress>
          </label>
        </div>
      ))}
      {metadata.characteristics
        ? Object.keys(metadata.characteristics).map((char) => (
            <div>
              <div>{char}</div>
              <input
                type="range"
                min="1"
                max="5"
                value={metadata.characteristics[char].value}
              />
            </div>
          ))
        : null}
    </div>
  );
}