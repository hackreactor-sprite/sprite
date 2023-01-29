import React from 'react';
import AddQuestionForm from './AddQuestionForm';
import ImageExpand from './ImageExpand';

export default function ModalRoute({ curProduct, handleModal, modalDetail }) {
  switch (modalDetail) {
    case 'question':
      return (
        <AddQuestionForm curProduct={curProduct} handleModal={handleModal} />
      );
    case 'answers':
      return <div />;
    case 'images':
      return <ImageExpand curProduct={curProduct} handleModal={handleModal} />;
    default:
      return <h3>Error</h3>;
  }
}
