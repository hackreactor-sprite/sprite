import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function AddQuestionForm({
  curProduct,
  curQuestion,
  showModal,
  setShowModal,
}) {
  const [answerForm, setAnswerForm] = useState({
    name: '',
    body: '',
    email: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formObj = {
      body: e.target.body.value,
      name: e.target.name.value,
      email: e.target.email.value,
      photos: [...e.target.photos.value],
      question_id: curQuestion.id,
    };
    axios
      .post(`/qa/questions/${curProduct.id}/answers`, formObj)
      .then(() => {
        setShowModal(!showModal);
      })
      .catch((err) => res.status(400).send(err));
  }
  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <h3>Your Answer</h3>
      <small>
        {curProduct.name}
        {' : '}
        {curQuestion.question_body}
      </small>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={answerForm.name}
          onChange={(e) => {
            const newInput = { ...answerForm };
            newInput.name = e.target.value;
            setAnswerForm(newInput);
          }}
        />
        <small>
          For privacy reasons, do not use your full name or email address
        </small>
      </div>
      <textarea
        type="text"
        name="body"
        placeholder="Your Answer"
        value={answerForm.body}
        onChange={(e) => {
          const newInput = { ...answerForm };
          newInput.name = e.target.value;
          setAnswerForm(newInput);
        }}
        maxLength="1000"
        rows="4"
        cols="50"
      />
      <div>
        <input
          type="text"
          name="email"
          placeholder="Please input your email"
          value={answerForm.email}
          onChange={(e) => {
            const newInput = { ...answerForm };
            newInput.name = e.target.value;
            setAnswerForm(newInput);
          }}
        />
      </div>
      <input
        type="file"
        name="photos"
        accept="image/png, image/jpeg"
        placeholder="upload a photo"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

AddQuestionForm.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  curQuestion: PropTypes.shape({
    id: PropTypes.number,
    question_body: PropTypes.string,
  }).isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
