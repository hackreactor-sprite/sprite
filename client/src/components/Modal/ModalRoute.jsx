import React from 'react';
import PropTypes from 'prop-types';
import AddQuestionForm from './AddQuestionForm';
import AddAnswerForm from './AddAnswerForm';
import ImageExpand from './ImageExpand';

export default function ModalRoute({
  curProduct,
  curQuestion,
  handleModal,
  modalDetail,
}) {
  switch (modalDetail) {
    case 'AddQuestionForm':
      return (
        <AddQuestionForm curProduct={curProduct} handleModal={handleModal} />
      );
    case 'AddAnswerForm':
      return (
        <AddAnswerForm
          curQuestion={curQuestion}
          curProduct={curProduct}
          handleModal={handleModal}
        />
      );
    case 'ImageExpand':
      return <ImageExpand curProduct={curProduct} handleModal={handleModal} />;
    default:
      return <h3>Undefined Path</h3>;
  }
}

ModalRoute.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  curQuestion: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  handleModal: PropTypes.func.isRequired,
  modalDetail: PropTypes.string.isRequired,
};
