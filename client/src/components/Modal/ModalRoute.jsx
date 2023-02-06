import React from 'react';
import PropTypes from 'prop-types';
import AddQuestionForm from './AddQuestionForm';
import AddAnswerForm from './AddAnswerForm';
import AddReviewForm from './AddReviewForm';
import ImageExpand from './ImageExpand';
import Comparison from './Comparison';

// eslint-disable-next-line object-curly-newline
export default function ModalRoute({ content, route, state, setState }) {
  switch (route) {
    case 'AddQuestionForm':
      return (
        <AddQuestionForm
          curProduct={content}
          state={state}
          setState={setState}
        />
      );
    case 'AddAnswerForm':
      return (
        <AddAnswerForm
          curQuestion={content.QA}
          curProduct={content.curProduct}
          state={state}
          setState={setState}
        />
      );
    case 'AddReviewForm':
      return (
        <AddReviewForm curProduct={content} state={state} setState={setState} />
      );
    case 'ImageExpand':
      return <ImageExpand length={content.length} setDisplayIndex={content.setDisplayIndex} displayIndex={content.displayIndex} url={content.photo} alt="Expanded Image" />;
    case 'Comparison':
      return <Comparison />;
    default:
      return <h3>Undefined Path</h3>;
  }
}

ModalRoute.propTypes = {
  // eslint-disable-next-line react/require-default-props
  state: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  setState: PropTypes.func,
  route: PropTypes.string.isRequired,
  content: PropTypes.shape({
    curProduct: PropTypes.shape({
      id: PropTypes.number,
    }),
    QA: PropTypes.shape({
      id: PropTypes.number,
    }),
    photo: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
