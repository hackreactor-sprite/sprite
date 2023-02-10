import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import RatingDashboard from '../components/RatingReview/RatingDashboard';
import ReviewItem from '../components/RatingReview/ReviewItem';
import ModalRoute from '../components/Modal/ModalRoute';
import Modal from '../components/reusable/Modal';
import handleContentLoad from '../helper/handleContentLoad';
import ChevronDown from '../assets/chevron-down.svg';
import handleInteractions from '../helper/handleInteractions';

export default function RatingReview({ curProduct, metadata }) {
  const [partialReviewList, setPartialReviewList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [sortType, setSortType] = useState('newest');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`/reviews/?sort=${sortType}&productid=${curProduct.id}`)
      .then((res) => {
        const sorted = res.data.results.sort(
          (a, b) => b.helpfulness - a.helpfulness,
        );

        setPartialReviewList(sorted.slice(0, 2));
        setReviewList(sorted);
      })
      .catch((err) => new Error(err));
  }, [curProduct, sortType]);

  const sortOptions = ['Newest', 'Helpful', 'Relevant'];
  return (
    <section className="ratingreview">
      <div>
        <header>RATINGS AND REVIEWS</header>
      </div>

      <div className="rating-content">
        <RatingDashboard reviewList={reviewList} metadata={metadata} />
        <div className="rating-right">
          <div className="rating-sort">
            <h2>{`${reviewList.length} reviews, sorted by `}</h2>
            <div className="rating-inner-search">
              <select
                className="rating-filterdropdown"
                onChange={(e) => {
                  setSortType(e.target.value);
                  handleInteractions({
                    element: 'RatingFilter',
                    widget: 'RatingReview',
                  });
                }}
              >
                {sortOptions.map((option, i) => (
                  <option value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="chevron-down" />
            </div>
          </div>
          {partialReviewList.map((review, i) => (
            <ReviewItem review={review} key={i} />
          ))}
          <div className="section-btn-container">
            {reviewList.length > 2 &&
            partialReviewList.length < reviewList.length ? (
              <button
                type="button"
                className="big-btn"
                onClick={() =>
                  handleContentLoad({
                    partialList: partialReviewList,
                    setPartialList: setPartialReviewList,
                    totalList: reviewList,
                  })
                }
              >
                <small>MORE REVIEWS</small>
              </button>
            ) : null}
            <button
              type="button"
              className="big-btn"
              onClick={() => setShowModal(!showModal)}
            >
              <small>ADD A REVIEW +</small>
            </button>
          </div>
          {showModal &&
            createPortal(
              <Modal showModal={showModal} setShowModal={setShowModal}>
                <ModalRoute
                  route="AddReviewForm"
                  content={curProduct}
                  state={showModal}
                  setState={setShowModal}
                />
              </Modal>,
              document.body,
            )}
        </div>
      </div>
    </section>
  );
}
