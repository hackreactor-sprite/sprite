import React, { useEffect, useState } from 'react';
import Helpful from '../reusable/Helpful';

export default function QAItem({ QA }) {
  // console.log('QUESTION :', QA);
  return (
    <div>
      <div className="QA-body">
        <h5>Q:</h5>
        <h5>{QA.question_body}</h5>
      </div>
      <div className="QA-answer">
        {Object.keys(QA.answers).map((key) => (
          <AnswerItem answer={QA.answers[key]} key={key} />
        ))}
      </div>
      <button type="button">LOAD MORE ANSWERS</button>
    </div>
  );
}

function AnswerItem({ answer }) {
  // console.log('ANSWER :', answer);
  return (
    <>
      <div className="QA-answer-body">
        <h5>A:</h5>
        <p>{answer.body}</p>
      </div>
      <div className="QA-answer-detail">
        <small>
          {answer.answerer_name}
          ,
          {' '}
          {answer.date}
        </small>
        <Helpful />
      </div>
    </>
  );
}
