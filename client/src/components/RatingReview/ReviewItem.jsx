/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Helpful from '../Reusable/Helpful';
import Report from '../Reusable/Report';
import Star from '../Reusable/Stars';

export default function ReviewItem({ review }) {
  const [reported, setReported] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  };
  const convertedDate = new Date(review.date).toLocaleDateString(
    undefined,
    options,
  );
  return (
    <div className="review-item">
      <div className="reviewitem-header">
        <Star totalRanking={review.rating} />

        <small>
          {'by '}
          {review.reviewer_name}
          {', '}
          {convertedDate}
        </small>
      </div>
      <h5>{review.summary.substring(0, 60)}</h5>
      <p className="reviewitem-body">
        {!showBody ? review.body : review.body.substring(0, 250)}
      </p>
      <div className="review-item-photos">
        {review.photos.map((photo) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={photo} alt="review-photo" />
        ))}
      </div>
      {review.recommend ? <div>I recommend this product</div> : null}
      {review.response ? <div>{review.response}</div> : null}
      {review.photos.map((photo) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={photo} alt="review-photo" />
      ))}
      <div className="small-container review-detail">
        <Helpful helpful={review.helpfulness} answerid={review.id} />
        {!reported ? (
          <Report
            id={review.id}
            type="review"
            setReported={setReported}
            reported={reported}
          />
        ) : (
          <small>Reported</small>
        )}
      </div>
    </div>
  );
}
