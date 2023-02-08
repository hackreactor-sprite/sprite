import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function AddQuestionForm({ curProduct, state, setState }) {
  const [questionForm, setQuestionForm] = useState({
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
      product_id: curProduct.id,
    };
    //sku objects('Submitted Form :', formObj);
    axios
      .post('/qa/questions', formObj)
      .then(() => {
        //sku objects('success');
        setState(!state);
      })
      .catch((err) => new Error(err));
  }
  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <h3>Ask your Question</h3>
      <small>
        {'About the '}
        {curProduct.name}
      </small>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={questionForm.name}
          onChange={(e) => {
            const newInput = { ...questionForm };
            newInput.name = e.target.value;
            setQuestionForm(newInput);
          }}
        />
        <small>
          For privacy reasons, do not use your full name or email address
        </small>
      </div>
      <textarea
        type="text"
        name="body"
        placeholder="Your Question?"
        value={questionForm.body}
        onChange={(e) => {
          const newInput = { ...questionForm };
          newInput.body = e.target.value;
          setQuestionForm(newInput);
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
          value={questionForm.email}
          onChange={(e) => {
            const newInput = { ...questionForm };
            newInput.email = e.target.value;
            setQuestionForm(newInput);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

AddQuestionForm.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};
