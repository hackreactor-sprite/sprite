/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Helpful from '../reusable/Helpful';
import Report from '../reusable/Report';
import Star from '../reusable/Stars';
import Check from '../../assets/check.svg';

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

        <small className="greytxt">
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
      {review.recommend ? (
        <div className="review-recommend">
          {<Check style={{ height: '1rem', width: '1rem' }} />}
          <small className="greytxt">{` I recommend this product`}</small>
        </div>
      ) : null}
      {review.response ? <div>{review.response}</div> : null}
      {review.photos.map((photo, i) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={photo} alt="review-photo" key={i} />
      ))}
      <div className="small-container review-detail">
        <Helpful helpful={review.helpfulness} answerid={review.id} />
        {!reported ? (
          <Report
            id={review.review_id}
            type="reviews"
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
