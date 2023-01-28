import React, { useEffect, useState } from 'react';
import Helpful from '../reusable/Helpful';

export default function QAItem({ QA }) {
  console.log('QUESTION :', QA);
  return (
    <>
      <div className="QA-body-container">
        <div className="QA-body">
          <h5>Q: </h5>
          <h5>{QA.question_body.toUpperCase()}</h5>
        </div>
        <div className="small-container">
          <Helpful helpful={QA.question_helpfulness} />
          <button>
            <small>Add Answer</small>
          </button>
        </div>
      </div>
      <div className="QA-answer">
        {Object.keys(QA.answers).map((key) => (
          <AnswerItem answer={QA.answers[key]} key={key} />
        ))}
      </div>
      <button type="button">LOAD MORE ANSWERS</button>
    </>
  );
}

function AnswerItem({ answer }) {
  console.log('ANSWER :', answer);
  return (
    <>
      <div className="QA-answer-body">
        <h5>A:</h5>
        <p>{answer.body}</p>
      </div>
      <div className="small-container QA-answer-detail">
        <p>
          {answer.answerer_name}, {answer.date}
        </p>
        <Helpful helpful={answer.helpfulness} answerid={answer.id} />
        <button>
          <small>Report</small>
        </button>
      </div>
    </>
  );
}
