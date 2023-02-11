import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import QAItem from '../components/QuestionAnswers/QAItem';
import ModalRoute from '../components/Modal/ModalRoute';
import Modal from '../components/reusable/Modal';
import handleContentLoad from '../helper/handleContentLoad';
import handleInteractions from '../helper/handleInteractions';
import handleSearch from '../helper/handleSearch';

export default function QuestionAnswer({ curProduct, QAList }) {
  const [partialQAList, setPartialQAList] = useState([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (curProduct.id && QAList) {
      const sorted = QAList.sort(
        (a, b) => b.question_helpfulness - a.question_helpfulness,
      );

      setPartialQAList(sorted.slice(0, 4));
    }
  }, [QAList]);

  useEffect(() => {
    const nothing = null;
    if (search.length >= 3) {
      handleSearch({
        nothing,
        search,
        list: QAList,
        setPartialList: setPartialQAList,
      });
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
        }}
        onKeyDown={(e) => {
          // eslint-disable-next-line implicit-arrow-linebreak
          handleSearch({
            e,
            search,
            list: QAList,
            setPartialList: setPartialQAList,
          });
          handleInteractions({
            element: 'QA-search',
            widget: 'QuestionAnswer',
          });
        }}
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
        {QAList?.length > 2 && partialQAList?.length ? (
          <button
            type="button"
            className="big-btn"
            onClick={() => {
              if (partialQAList.length === QAList.length) {
                setPartialQAList(QAList.slice(0, 4));
              } else {
                handleContentLoad({
                  partialList: partialQAList,
                  setPartialList: setPartialQAList,
                  totalList: QAList,
                });
              }

              handleInteractions({
                element: 'Load-question-button',
                widget: 'QuestionAnswer',
              });
            }}
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
          className="big-btn"
          data-testid="question-form-button"
          onClick={() => {
            setShowModal(!showModal);
            handleInteractions({
              element: 'Question-form-button',
              widget: 'QuestionAnswer',
            });
          }}
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
