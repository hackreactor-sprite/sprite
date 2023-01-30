import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Helpful from '../Reusable/Helpful';
import Report from '../Reusable/Report';

export default function QAItem({ QA, setCurQuestion, handleModal }) {
  const [shown, setShown] = useState(false);
  const [shownAnswer, setShownAnswer] = useState(false);
  const [answerList, setAnswerList] = useState([]);
  const [partialAnswers, setPartialAnswers] = useState([]);

  useEffect(() => {
    const sort = Object.values(QA.answers).sort(
      (a, b) => b.helpfulness - a.helpfulness,
    );
    if (sort.length !== 0) setShownAnswer(!shownAnswer);
    setPartialAnswers(sort.slice(0, 2));
    setAnswerList(sort);
  }, []);

  return (
    <>
      <div className="QA-body-container">
        <div className="QA-body">
          <h5>Q: </h5>
          <h5>{QA.question_body.toUpperCase()}</h5>
        </div>
        <div className="small-container">
          <Helpful helpful={QA.question_helpfulness} />
          <button
            type="button"
            onClick={() => {
              setCurQuestion(QA);
              handleModal('AddAnswerForm');
            }}
          >
            <small>Add Answer</small>
          </button>
        </div>
      </div>

      <div className="QA-answer">
        {!shown
          ? partialAnswers.map((answer) => <AnswerItem answer={answer} />)
          : answerList.map((answer) => <AnswerItem answer={answer} />)}
      </div>
      {answerList.length !== 0 ? (
        <AnswerButton shown={shown} setShown={setShown} />
      ) : null}
    </>
  );
}

function AnswerItem({ answer }) {
  const [reported, setReported] = useState(false);

  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  };
  const convertedDate = new Date(answer.date).toLocaleDateString(
    undefined,
    options,
  );
  return (
    <>
      <div className="QA-answer-body">
        <h5>A:</h5>
        <p>{answer.body}</p>
      </div>
      <div className="small-container QA-answer-detail">
        <small>
          {'by '}
          {answer.answerer_name}
          {/* {sellerName === answer.answerer_name
            ? answer.answerer_name
            : 'SELLER'}
          THIS DOESNT MAKES SENSE THEY ARE ASKING TO CHECK SELLER NAME BUT NOT
          AVAIL */}
          {', '}
          {convertedDate}
        </small>
        <Helpful helpful={answer.helpfulness} answerid={answer.id} />
        {reported ? (
          <small>Reported</small>
        ) : (
          <Report
            answerid={answer.id}
            setReported={setReported}
            reported={reported}
          />
        )}
      </div>
    </>
  );
}

function AnswerButton({ shown, setShown }) {
  return (
    <button type="button" onClick={() => setShown(!shown)}>
      <small>{!shown ? 'LOAD MORE ANSWERS' : 'COLLAPSE'}</small>
    </button>
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
  setCurQuestion: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
};

AnswerItem.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.number,
    answerer_name: PropTypes.string,
    body: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
};

AnswerButton.propTypes = {
  shown: PropTypes.bool.isRequired,
  setShown: PropTypes.func.isRequired,
};
