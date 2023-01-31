import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerButton({ state, setState, content }) {
  return (
    <button type="button" onClick={() => setState(!state)}>
      <small>{content}</small>
    </button>
  );
}

AnswerButton.propTypes = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};
