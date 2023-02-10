import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';
import Helpful from '../reusable/Helpful';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../reusable/Modal';
import handleContentLoad from '../../helper/handleContentLoad';
import handleInteractions from '../../helper/handleInteractions';

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
  }, [QA]);
  const content = { QA, curProduct };
  return (
    <>
      <div className="QA-item" role="treeitem" aria-selected="false">
        <div className="QA-body">
          <h4 id="QA-body-content" aria-level="3">
            {`Q: $${QA.question_body.toUpperCase()}`}
          </h4>

          <div className="small-container">
            <Helpful helpful={QA.question_helpfulness} location="QAItem" />
            <button
              type="button"
              className="small-btn"
              data-testid="question-form-button"
              onClick={() => {
                setShowModal(!showModal);
                handleInteractions({
                  element: 'Question-form-button',
                  widget: 'QAItem',
                });
              }}
            >
              <small>Add Answer</small>
            </button>
          </div>
        </div>
        <div className="QA-answer" role="list" aria-label="QA-list">
          {partialAnswers.map((answer, i) => (
            <AnswerItem answer={answer} key={i} />
          ))}
        </div>
        {answerList.length > 2 && partialAnswers.length < answerList.length ? (
          <button
            id="load-answers"
            type="button"
            onClick={() => {
              handleContentLoad({
                partialList: partialAnswers,
                setPartialList: setPartialAnswers,
                totalList: answerList,
              });
              handleInteractions({
                element: 'Load-answers',
                widget: 'QAItem',
              });
            }}
          >
            <small>
              {partialAnswers.length !== answerList.length
                ? 'LOAD MORE ANSWERS'
                : 'COLLAPSE'}
            </small>
          </button>
        ) : null}
      </div>
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
