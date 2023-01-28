import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QAItem from '../components/QuestionAnswers/QAItem';

export default function QuestionAnswer({ curProduct }) {
  const [QAList, setQAList] = useState([]);
  const [partialQAList, setPartialQAList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [queryCount, setQueryCount] = useState(20);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (curProduct.id) {
      axios
        .get(
          `/qa/questions/?page=${page}&count=${queryCount}&productid=${curProduct.id}`,
        )
        .then((res) => {
          const before = res.data.results;
          const sorted = res.data.results.sort(
            (a, b) => b.question_helpfulness - a.question_helpfulness,
          );
          console.log(before, 'not sorted <- compare -> sorted', sorted);
          setPartialQAList(sorted.slice(0, 4));
          setQAList(sorted);
        })
        .catch((err) => new Error(err));
    }
  }, [curProduct]);

  const handleSearch = (e) => {
    if (search.length > 3 && e.key === 'enter') {
      const newList = [...QAList];
      newList.filter((el) => el.body.includes(search));
      setQAList(newList);
    }
  };

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
        onKeyDown={handleSearch}
      />
      <div className="QA-list">
        {shown
          ? QAList.map((QA) => <QAItem QA={QA} key={QA.id} />)
          : partialQAList.map((QA) => <QAItem QA={QA} key={QA.id} />)}
      </div>
      <div className="QA-btn-container">
        <button type="button">MORE ANSWERED QUESTION</button>
        <button type="button">ADD A QUESTION +</button>
      </div>

      {/* //SHOW MODAL */}
    </section>
  );
}
