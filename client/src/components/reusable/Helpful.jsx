import axios from 'axios';
import React, { useState } from 'react';

export default function Helpful({ helpful, answerid }) {
  const sendHelpful = () => {
    axios
      .put(`qa/answers/${answerid}/helpful`)
      .then(() => {
        console.log('updated');
      })
      .catch((err) => new Error(err));
  };
  return (
    <>
      <small>Helpful? ({helpful})</small>
      <button>
        <small onClick={() => sendHelpful}>Yes</small>
      </button>
    </>
  );
}
