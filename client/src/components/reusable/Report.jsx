import React from 'react';
import axios from 'axios';

export default function Report({ answerid, reported, setReported }) {
  function sendReport() {
    axios
      .put(`qa/answers/${answerid}/report`)
      .then(() => {
        setReported(!reported);
        console.log('success');
      })
      .catch((err) => new Error(err));
  }
  return (
    <button type="button" onClick={() => sendReport()}>
      <small>Report</small>
    </button>
  );
}
