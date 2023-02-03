import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import RatingDashboard from '../components/RatingReview/RatingDashboard';
import ReviewItem from '../components/RatingReview/ReviewItem';
import ModalRoute from '../components/Modal/ModalRoute';
import Modal from '../components/Reusable/Modal';
import handleContentLoad from '../helper/handleContentLoad';

export default function RatingReview({ curProduct, metadata }) {
  const [partialReviewList, setPartialReviewList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [sortType, setSortType] = useState('newest');
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (curProduct.id) {
      axios
        .get(`/reviews/?sort=${sortType}&productid=40348`)
        .then((res) => {
          const sorted = res.data.results.sort(
            (a, b) => b.helpfulness - a.helpfulness,
          );
          setPartialReviewList(sorted.slice(0, 2));
          setReviewList(sorted);
        })
        .catch((err) => new Error(err));
    }
  }, [curProduct, sortType]);

  const sortOptions = ['Newest', 'Helpful', 'Relevant'];
  return (
    <section className="ratingreview">
      <div>
        <strong>RATINGS AND REVIEWS</strong>
      </div>

      <div className="rating-content">
        <RatingDashboard reviewList={reviewList} metadata={metadata} />
        <div className="rating-right">
          <h3>
            <label className="rating-sort">
              {reviewList.length} reviews, sorted by
              <ins>
                <select onChange={(e) => setSortType(e.target.value)}>
                  {sortOptions.map((option, i) => (
                    <option value={option} key={i}>
                      {option}
                    </option>
                  ))}
                </select>
              </ins>
            </label>
          </h3>
          {partialReviewList.map((review, i) => (
            <ReviewItem review={review} key={i} />
          ))}
          <div className="section-btn-container">
            {reviewList.length > 2 &&
            partialReviewList.length < reviewList.length ? (
              <button
                type="button"
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
            <button type="button" onClick={() => setShowModal(!showModal)}>
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
