import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import QAItem from '../components/QuestionAnswers/QAItem';

export default function QuestionAnswer({
  curProduct,
  setCurQuestion,
  handleModal,
}) {
  const [QAList, setQAList] = useState([]);
  const [partialQAList, setPartialQAList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(2);
  const [queryCount, setQueryCount] = useState(30);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (curProduct.id) {
      axios
        .get(
          `/qa/questions/?page=${page}&count=${queryCount}&productid=${curProduct.id}`,
        )
        .then((res) => {
          const sorted = res.data.results.sort(
            (a, b) => b.question_helpfulness - a.question_helpfulness,
          );
          setPartialQAList(sorted.slice(0, 4));
          setQAList(sorted);
        })
        .catch((err) => new Error(err));
    }
  }, [curProduct, queryCount]);

  function handleSearch(e) {
    if (search.length > 3 && e.key === 'enter') {
      const newList = [...QAList];
      newList.filter((el) => el.body.includes(search));
      setQAList(newList);
    }
  }

  function loadQuestions() {
    setShown(!shown);
    // if (!shown) {
    //   setShown(!shown);
    // } else if (queryCount < 50) {
    //   setQueryCount(queryCount + 5);
    // } else {
    //   setPage(page + 1);
    //   setQueryCount(10);
    // }
  }

  return (
    <section className="questionanswers">
      <div>
        <small>QUESTIONS & ANSWERS</small>
      </div>
      <input
        className="QA-search"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleSearch(e)}
      />
      <div className="QA-list">
        {!shown
          ? partialQAList.map((QA) => (
              // eslint-disable-next-line react/jsx-indent
              <QAItem
                QA={QA}
                key={QA.id}
                handleModal={handleModal}
                setCurQuestion={setCurQuestion}
              />
              // eslint-disable-next-line indent
            ))
          : QAList.map((QA) => (
              // eslint-disable-next-line react/jsx-indent
              <QAItem
                QA={QA}
                key={QA.id}
                handleModal={handleModal}
                setCurQuestion={setCurQuestion}
              />
              // eslint-disable-next-line indent
            ))}
      </div>
      <div className="QA-btn-container">
        {!shown ? (
          <button type="button" onClick={() => loadQuestions()}>
            MORE ANSWERED QUESTIONS
          </button>
        ) : (
          <button type="button" onClick={() => loadQuestions()}>
            COLLAPSE ANSWERS
          </button>
        )}
        <button type="button" onClick={() => handleModal('AddQuestionForm')}>
          ADD A QUESTION +
        </button>
      </div>
    </section>
  );
}

QuestionAnswer.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  setCurQuestion: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
};
