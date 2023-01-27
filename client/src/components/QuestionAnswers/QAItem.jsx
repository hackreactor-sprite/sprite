import React, { useEffect, useState } from 'react';
import Helpful from '../reusable/Helpful';

export default function QAItem({ QA }) {
  // console.log('QUESTION :', QA);
  return (
    <div>
      <div>
        <span>
          <h5>Q:</h5>
        </span>
        <span>
          <h5>{QA.question_body}</h5>
        </span>
      </div>
      {Object.keys(QA.answers).map((key) => (
        <AnswerItem answer={QA.answers[key]} key={key} />
      ))}
      <div>LOAD MORE ANSWERS</div>
    </div>
  );
}

function AnswerItem(answer) {
  // console.log('ANSWER :', answer);
  return (
    <>
      <div>
        <h5>A:</h5>
        <p>{answer.body}</p>
      </div>
      <div className="QA-answer-detail">
        <div>
          <small>
            {answer.answerer_name},{answer.date}
          </small>
        </div>
        <div>
          <Helpful />
        </div>
        <div></div>
      </div>
    </>
  );
}
