import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Helpful from '../Reusable/Helpful';
import Report from '../Reusable/Report';
import HiddenButton from '../Reusable/HiddenButton';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../Reusable/Modal';

export default function QAItem({ QA, curProduct }) {
  const [shown, setShown] = useState(false);
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
      <div className="QA-body-container">
        <div className="QA-body">
          <h5>Q: </h5>
          <h5>{QA.question_body.toUpperCase()}</h5>
        </div>
        <div className="small-container">
          <Helpful helpful={QA.question_helpfulness} />
          <button type="button" onClick={() => setShowModal(!showModal)}>
            <small>Add Answer</small>
          </button>
          {/* eslint-disable-next-line operator-linebreak */}
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
        </div>
      </div>

      <div className="QA-answer">
        {(!shown ? partialAnswers : answerList).map((answer, i) => (
          <AnswerItem answer={answer} key={answer.id} />
        ))}
      </div>
      {answerList.length !== 0 ? (
        <HiddenButton
          state={shown}
          setState={setShown}
          content={!shown ? 'LOAD MORE ANSWERS' : 'COLLAPSE'}
        />
      ) : null}
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
    <>
      <div className="QA-answer-body">
        <h5>A:</h5>
        <p>{answer.body}</p>
      </div>
      {/* eslint-disable-next-line operator-linebreak */}

      <div className="answer-photo-container">
        {answer.photos.map((photo, i) => (
          <>
            <img
              src={photo}
              alt="Answer Image"
              className="answer-photo"
              key={i}
              onClick={() => handleImage(photo)}
            />

            {/* eslint-disable-next-line operator-linebreak */}
            {showModal &&
              createPortal(
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  key={i}
                >
                  <ModalRoute
                    route="ImageExpand"
                    content={{ photo: curPhoto }}
                  />
                </Modal>,
                document.body,
              )}
          </>
        ))}
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
            answerid={answer.id}
            setReported={setReported}
            reported={reported}
          />
        ) : (
          <small>Reported</small>
        )}
      </div>
    </>
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
