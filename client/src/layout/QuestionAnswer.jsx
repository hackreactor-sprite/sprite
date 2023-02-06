import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import QAItem from '../components/QuestionAnswers/QAItem';
import ModalRoute from '../components/Modal/ModalRoute';
import Modal from '../components/reusable/Modal';
import handleContentLoad from '../helper/handleContentLoad';
import MagnifyingGlassSVG from '../assets/magnifying-glass.svg';

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
      .get(`/qa/questions/?page=${page}&count=${queryCount}&productid=40348`)
      .then((res) => {
        const sorted = res.data.results.sort(
          (a, b) => b.question_helpfulness - a.question_helpfulness,
        );

        setPartialQAList(sorted.slice(0, 4));
        setQAList(sorted);
      })
      .catch((err) => res.status(400).send(err));
  }, [curProduct]);

  function handleSearch(e) {
    if (search.length > 3 || e.key === 'Enter') {
      let newList = [...QAList];
      newList = newList.filter((question) => {
        const body = question.question_body.toLowerCase();
        return body.includes(search.toLowerCase());
      });
      setPartialQAList(newList.slice(0, 4));
      setQAList(newList);
    }
  }

  return (
    <section className="questionanswers">
      <div>
        <header>QUESTIONS & ANSWERS</header>
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
        style={{
          backgroundImage: `url(${MagnifyingGlassSVG})`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no - repeat',
        }}
      />

      <div className="QA-list">
        {partialQAList.map((QA, i) => (
          <QAItem QA={QA} key={i} curProduct={curProduct} />
        ))}
      </div>
      <div className="section-btn-container">
        {QAList.length > 2 && partialQAList.length < QAList.length ? (
          <button
            type="button"
            onClick={() => handleContentLoad({
              partialList: partialQAList,
              setPartialList: setPartialQAList,
              totalList: QAList,
            })}
          >
            <small>
              {partialQAList.length !== QAList.length
                ? 'MORE ANSWERED QUESTIONS'
                : 'COLLAPSE QUESTIONS'}
            </small>
          </button>
        ) : null}
        <button type="button" onClick={() => setShowModal(!shown)}>
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
