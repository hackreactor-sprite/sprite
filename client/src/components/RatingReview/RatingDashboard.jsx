import React, { useState, useEffect } from 'react';
import Star from '../reusable/Stars';

export default function RatingDashboard({ reviewList, metadata }) {
  const [reviewRank, setReviewRank] = useState({});
  const [totalRank, setTotalRank] = useState(0);
  const [recPercent, setRecPercent] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const charList = {
    Size: ['runs small', 'just right', 'runs large'],
    Width: ['small', 'ok', 'wide'],
    Comfort: ['not good', 'just right', 'great'],
    Quality: ['not good', 'decent', 'great'],
  };

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
      setTotalRank(Math.round((weight / total) * 4) / 4);

      const totalrec =
        parseInt(metadata.recommended.true) +
        parseInt(metadata.recommended.false);

      const weightedAverage = parseInt(metadata.recommended.true) / totalrec;
      setRecPercent(Math.round(weightedAverage * 4) / 4);
    }
  }, [metadata]);
  return (
    <div className="rating-dashboard">
      <div className="rating-dashboard-header">
        <h1>{totalRank}</h1>
        <Star totalRanking={totalRank} />
      </div>
      <p>{`${recPercent * 100}% of reviews recommend this product`}</p>
      <div className="progress-bar-container">
        {Object.keys(reviewRank).map((rank, i) => (
          <div className="rating-progress-bar" key={i}>
            <label className="rating-bar-label">
              <ins>{`${rank} stars`}</ins>
              <progress max={1} value={reviewRank[rank] / totalRating}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                {rank}
              </progress>
            </label>
          </div>
        ))}
      </div>
      {totalRating && metadata.characteristics['Size']
        ? Object.keys(charList).map((char, i) => (
            <div key={i} className="rating-slider-container">
              <div>{char}</div>
              <input
                type="range"
                min="1"
                max="5"
                className="rating-slider"
                value={metadata.characteristics[char].value}
                readOnly
              />
              <div className="rating-char-desc">
                {charList[char].map((comment, i) => (
                  <sub className="greytxt" key={i}>
                    {comment}
                  </sub>
                ))}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
