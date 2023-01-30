import React from 'react';
import PropTypes from 'prop-types';
import AddQuestionForm from './AddQuestionForm';
import AddAnswerForm from './AddAnswerForm';
import ImageExpand from './ImageExpand';

export default function ModalRoute({ content, route }) {
  console.log('THIS IS CONTENT', content);
  switch (route) {
    case 'AddQuestionForm':
      return <AddQuestionForm curProduct={content} />;
    case 'AddAnswerForm':
      return (
        <AddAnswerForm
          curQuestion={content.QA}
          curProduct={content.curProduct}
        />
      );
    case 'ImageExpand':
      return <ImageExpand url={content.curPhoto} alt="Expanded Image" />;
    default:
      return <h3>Undefined Path</h3>;
  }
}

ModalRoute.propTypes = {
  content: PropTypes.shape({
    curProduct: PropTypes.shape({
      id: PropTypes.number,
    }),
    QA: PropTypes.shape({
      id: PropTypes.number,
    }),
    curPhoto: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
  }).isRequired,

  route: PropTypes.string.isRequired,
};
