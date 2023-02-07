import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import QAItem from '../components/QuestionAnswers/QAItem';
import ModalRoute from '../components/Modal/ModalRoute';
import Modal from '../components/reusable/Modal';
import handleContentLoad from '../helper/handleContentLoad';
import handleSearch from '../helper/handleSearch';

export default function QuestionAnswer({ curProduct }) {
  const [QAList, setQAList] = useState([]);
  const [partialQAList, setPartialQAList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [queryCount, setQueryCount] = useState(100);
  const [shown, setShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
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
  }, [curProduct]);

  useEffect(() => {
    if (search.length > 3) {
      handleSearch();
    }
    if (search.length === 0) {
      setPartialQAList(QAList.slice(0, 4));
    }
  }, [search]);
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <section
      className="questionanswers"
      title="questionanswers"
      role="region"
      aria-label="questionanswers"
    >
      <div role="heading" aria-level="2">
        <header>QUESTIONS & ANSWERS</header>
      </div>

      <input
        className="QA-search"
        name="QA-search"
        aria-label="questionanswer-search"
        type="search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e);
        }}
        onKeyDown={
          (e) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            handleSearch({
              e,
              search,
              list: QAList,
              setPartialList: setPartialQAList,
            })
          // eslint-disable-next-line react/jsx-curly-newline
        }
        style={{
          backgroundPosition: 'right',
          backgroundRepeat: 'no - repeat',
        }}
      />

      <div className="QA-list" aria-label="list" data-testid="list" role="tree">
        {partialQAList.map((QA, i) => (
          <QAItem QA={QA} key={i} curProduct={curProduct} />
        ))}
      </div>
      <div className="section-btn-container">
        {QAList.length > 2 && partialQAList.length < QAList.length ? (
          <button
            type="button"
            onClick={() =>
              handleContentLoad({
                partialList: partialQAList,
                setPartialList: setPartialQAList,
                totalList: QAList,
              })
            }
          >
            <small>
              {partialQAList.length !== QAList.length
                ? 'MORE ANSWERED QUESTIONS'
                : 'COLLAPSE QUESTIONS'}
            </small>
          </button>
        ) : null}
        <button
          type="button"
          data-testid="question-form-button"
          onClick={() => setShowModal(!shown)}
        >
          <small>ADD A QUESTION +</small>
        </button>
        {/* eslint-disable-next-line operator-linebreak */}
        {showModal &&
          createPortal(
            <Modal showModal={showModal} setShowModal={setShowModal}>
              <ModalRoute
                route="AddQuestionForm"
                content={curProduct}
                state={showModal}
                setState={setShowModal}
              />
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
