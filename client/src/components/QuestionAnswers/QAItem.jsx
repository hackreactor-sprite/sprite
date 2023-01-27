import React, { useEffect, useState } from 'react';
import Helpful from '../reusable/Helpful.jsx';
export default function QAItem({ QA }) {
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
      {QA.answers.map((answer, i) => (
        <AnswerItem answer={answer} key={i} />
      ))}
      <div>LOAD MORE ANSWERS</div>
    </div>
  );
}

function AnswerItem(answer) {
  return (
    <>
      <div>
        <h5>A:</h5>
        <p>${answer.body}</p>
      </div>
      <div className='QA-answer-detail'>
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
