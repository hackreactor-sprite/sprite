import React from 'react';
import axios from 'axios';

export default function Report({
  id, type, reported, setReported,
}) {
  function sendReport() {
    axios
      .put(`qa/${type}/${id}/report`)
      .then(() => {
        setReported(!reported);
        // console.log('success');
      })
      .catch((err) => res.status(400).send(err));
  }
  return (
    <button type="button" onClick={() => sendReport()}>
      <small>Report</small>
    </button>
  );
}
