import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import HiddenButton from '../components/Reusable/HiddenButton';
import QAItem from '../components/QuestionAnswers/QAItem';
import ModalRoute from '../components/Modal/ModalRoute';
import Modal from '../components/Reusable/Modal';

export default function QuestionAnswer({ curProduct }) {
  const [QAList, setQAList] = useState([]);
  const [partialQAList, setPartialQAList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [queryCount, setQueryCount] = useState(100);
  const [shown, setShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (curProduct.id) {
      axios
        .get(`/qa/questions/?page=${page}&count=${queryCount}&productid=40348`)
        .then((res) => {
          const sorted = res.data.results.sort(
            (a, b) => b.question_helpfulness - a.question_helpfulness,
          );

          setPartialQAList(sorted.slice(0, 4));
          setQAList(sorted);
        })
        .catch((err) => new Error(err));
    }
  }, [curProduct]);

  function handleSearch(e) {
    if (search.length > 3 && e.key === 'Enter') {
      const newList = [...QAList];
      newList.filter((question) => question.question_body.includes(search));
      setPartialQAList(newList.slice(0, 4));
      setQAList(newList);
    }
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
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e);
        }}
        onKeyDown={(e) => handleSearch(e)}
      />
      <div className="QA-list">
        {(!shown ? partialQAList : QAList).map((QA, i) => (
          <QAItem QA={QA} key={i} curProduct={curProduct} />
        ))}
      </div>
      <div className="QA-btn-container">
        {QAList.length !== 0 ? (
          <HiddenButton
            state={shown}
            setState={setShown}
            content={!shown ? 'MORE ANSWERED QUESTIONS' : 'COLLAPSE ANSWERS'}
          />
        ) : null}

        <button type="button" onClick={() => setShowModal(!shown)}>
          ADD A QUESTION +
        </button>
        {/* eslint-disable-next-line operator-linebreak */}
        {showModal &&
          createPortal(
            <Modal showModal={showModal} setShowModal={setShowModal}>
              <ModalRoute route="AddQuestionForm" content={curProduct} />
            </Modal>,
            document.body,
          )}
      </div>
    </section>
  );
}

QuestionAnswer.propTypes = {
  curProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
