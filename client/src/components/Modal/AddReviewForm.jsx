import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function AddQuestionForm({ curProduct }) {
  const [questionForm, setQuestionForm] = useState({
    star: '',
    recommend: false,
    email: '',
  });
  const [displayRatingTip, setDisplayRatingTip] = useState('');
  const ratingObj = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };
  const characteristics = {
    size: {
      1: 'A size too small',
      2: '1/2 a size too small',
      3: 'Perfect',
      4: '1/2 a size too big',
      5: 'A size too big',
    },
    width: {
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    comfort: {
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    quality: {
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect',
    },
    length: {
      1: 'Runs short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
    fit: {
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long',
    },
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formObj = {
      body: e.target.body.value,
      name: e.target.name.value,
      email: e.target.email.value,
      product_id: curProduct.id,
    };
    console.log('Submitted Form :', formObj);
    axios
      .post('/qa/questions', formObj)
      .then(() => {
        console.log('success');
      })
      .catch((err) => new Error(err));
  }
  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <h3>Write your Review</h3>
      <small>
        {'About the '}
        {curProduct.name}
      </small>

      <div>
        <h5>Overall Rating</h5>
        {Object.keys(ratingObj).map((rating) => (
          <label htmlFor={ratingObj[rating]}>
            <input type="radio" value={ratingObj[rating]} />
            {rating}
          </label>
        ))}
      </div>
      <div>
        <h5>Do you recommend this product?</h5>
        <div>
          <label htmlFor="yes">
            <input type="radio" value="yes" />
            Yes
          </label>
          <label htmlFor="no">
            <input type="radio" value="no" />
            No
          </label>
        </div>
      </div>
      {Object.keys(characteristics).map((type) => (
        <div>
          <h5>{type}</h5>
          {Object.keys(characteristics[type]).map((rank) => (
            <label htmlFor={type}>
              <input type="radio" value={rank} />
              {rank}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

AddQuestionForm.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
