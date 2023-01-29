import React, { useState } from 'react';
import axios from 'axios';

export default function AddQuestionForm({ curProduct, handleModal }) {
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
    console.log('Submitted Form :', formObj);
    axios
      .post('/qa/questions', formObj)
      .then(() => {
        console.log('success');
        handleModal();
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
      <input
        type="text"
        name="body"
        placeholder="Your Question?"
        value={questionForm.body}
        onChange={(e) => {
          const newInput = { ...questionForm };
          newInput.body = e.target.value;
          setQuestionForm(newInput);
        }}
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
