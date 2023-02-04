import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Helpful from '../Reusable/Helpful';
import Report from '../Reusable/Report';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../Reusable/Modal';

export default function QAItem({ QA, curProduct }) {
  const [showModal, setShowModal] = useState(false);
  const [shownAnswer, setShownAnswer] = useState(false);
  const [answerList, setAnswerList] = useState([]);
  const [partialAnswers, setPartialAnswers] = useState([]);

  useEffect(() => {
    const sort = Object.values(QA.answers).sort(
      (a, b) => b.helpfulness - a.helpfulness,
    );
    if (sort.length !== 0) setShownAnswer(!shownAnswer);
    setPartialAnswers(sort.slice(0, 2));
    setAnswerList(sort.slice(4));
  }, []);
  const content = { QA, curProduct };
  return (
    <>
      <div className="QA-item-container">
        <div className="QA-body-container">
          <div className="QA-body">
            <div className="QA-body-content">
              <h5 className="QA-title">{'Q: '}</h5>
              <h5>{QA.question_body.toUpperCase()}</h5>
            </div>
            <div className="small-container">
              <Helpful helpful={QA.question_helpfulness} />
              <button type="button" onClick={() => setShowModal(!showModal)}>
                <small>Add Answer</small>
              </button>
            </div>
          </div>
          <div className="QA-answer">
            {partialAnswers.map((answer, i) => (
              <AnswerItem answer={answer} key={i} />
            ))}
          </div>
        </div>
      </div>
      {answerList.length > 2 && partialAnswers.length < answerList.length ? (
        <button
          type="button"
          onClick={() =>
            handleContentLoad({
              partialList: partialAnswers,
              setPartialList: setPartialAnswers,
              totalList: answerList,
            })
          }
        >
          <small>
            {partialAnswers.length !== answerList.length
              ? 'LOAD MORE ANSWERS'
              : 'COLLAPSE'}
          </small>
        </button>
      ) : null}
      {showModal &&
        createPortal(
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <ModalRoute
              route="AddAnswerForm"
              content={content}
              state={showModal}
              setState={setShowModal}
            />
          </Modal>,
          document.body,
        )}
    </>
  );
}

function AnswerItem({ answer }) {
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
      <div className="QA-answer-header">
        <h5 className="QA-title">A:</h5>
      </div>
      <div className="QA-answer-body">
        <p>{answer.body}</p>
        <div className="answer-photo-container">
          {answer.photos.map((photo, i) => (
            <div key={i}>
              <img
                src={photo}
                alt="Answer Image"
                className="answer-photo"
                onClick={() => handleImage(photo)}
              />
            </div>
          ))}
          {showModal &&
            createPortal(
              <Modal showModal={showModal} setShowModal={setShowModal} key={i}>
                <ModalRoute route="ImageExpand" content={{ photo: curPhoto }} />
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
          <Helpful helpful={answer.helpfulness} answerid={answer.id} />
          {!reported ? (
            <Report
              id={answer.id}
              type="answers"
              setReported={setReported}
              reported={reported}
            />
          ) : (
            <small>Reported</small>
          )}
        </div>
      </div>
    </div>
  );
}

QAItem.propTypes = {
  QA: PropTypes.shape({
    id: PropTypes.number,
    answers: PropTypes.shape({
      id: PropTypes.number,
    }),
    question_body: PropTypes.string,
    question_helpfulness: PropTypes.number,
  }).isRequired,
  curProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

AnswerItem.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    body: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
};
