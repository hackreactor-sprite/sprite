import React from 'react';
import axios from 'axios';
import handleInteractions from '../../helper/handleInteractions';

export default function Report({ id, type, reported, setReported, location }) {
  function sendReport() {
    axios
      .put(`qa/${type}/${id}/report`)
      .then(() => {
        setReported(!reported);
        // ('success');
      })
      .catch((err) => new Error(err));
  }
  return (
    <button
      className="small-btn"
      type="button"
      onClick={() => {
        sendReport();
        handleInteractions({
          element: 'report',
          widget: location,
        });
      }}
    >
      <small className="greytxt">Report</small>
    </button>
  );
}
