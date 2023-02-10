import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Helpful from '../reusable/Helpful';
import Report from '../reusable/Report';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../reusable/Modal';
import handleInteractions from '../../helper/handleInteractions';

export default function AnswerItem({ answer }) {
  const [showModal, setShowModal] = useState(false);
  const [reported, setReported] = useState(false);
  const [curPhoto, setCurPhoto] = useState('');

  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  };
  const convertedDate = new Date(answer.date).toLocaleDateString(
    undefined,
    options,
  );

  const handleImage = (photo) => {
    setCurPhoto(photo);
    setShowModal(!showModal);
  };

  return (
    <div className="QA-answer-container">
      <div className="QA-answer-header" role="heading" aria-level="4">
        <h5 className="QA-title">A:</h5>
      </div>
      <div className="QA-answer-body">
        <p aria-labelledby="answer">{answer.body}</p>
        <div
          className="answer-photo-container"
          role="img"
          aria-label="answer-photo"
        >
          {answer.photos.map((photo, i) => (
            <div key={i}>
              <img
                src={photo}
                alt="Answer Image"
                className="answer-photo"
                onClick={() => {
                  handleImage(photo);
                  handleInteractions({
                    element: 'QA-photo-expand',
                    widget: 'AnswerItem',
                  });
                }}
              />
            </div>
          ))}
          {showModal &&
            createPortal(
              <Modal showModal={showModal} setShowModal={setShowModal}>
                <ModalRoute
                  route="ImageExpand"
                  content={{ url: curPhoto, alt: 'AnswerImage' }}
                />
              </Modal>,
              document.body,
            )}
        </div>
        <div className="small-container QA-answer-detail">
          <small>
            {'by '}
            {answer.answerer_name}
            {', '}
            {convertedDate}
          </small>
          <Helpful
            helpful={answer.helpfulness}
            answerid={answer.id}
            location="AnswerItem"
          />
          {!reported ? (
            <Report
              id={answer.id}
              type="answers"
              setReported={setReported}
              reported={reported}
              location="AnswerItem"
            />
          ) : (
            <small>Reported</small>
          )}
        </div>
      </div>
    </div>
  );
}

AnswerItem.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    body: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
};
