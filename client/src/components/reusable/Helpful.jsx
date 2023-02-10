import React, { useState, useEffect } from 'react';
import handleInteractions from '../../helper/handleInteractions';
import axios from 'axios';

export default function Helpful({ helpful, answerid, location }) {
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    setHelpfulCount(helpful);
  }, [helpful]);
  function sendHelpful() {
    axios
      .put(`qa/answers/${answerid}/helpful`)
      .then(() => {
        setHelpfulCount(helpfulCount + 1);
        setSubmit(!submit);
      })
      .catch((err) => new Error(err));
  }
  return (
    <div className="helpful-detail" aria-label="slideheading">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <small> {`Helpful? (${helpfulCount})`}</small>
      <button
        type="button"
        className="small-btn helpfulbtn"
        onClick={
          !submit
            ? () => {
                sendHelpful();
                handleInteractions({
                  element: 'Modal',
                  widget: location,
                });
              }
            : null
        }
      >
        <small>
          <ins>Yes</ins>
        </small>
      </button>
    </div>
  );
}
// link should appear next to the text “Helpful?” reading “Yes (#)” with the count
// Clicking on this link should increase the count for that response.
// A customer should not be able to vote more than once for this selection.
