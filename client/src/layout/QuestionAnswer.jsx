import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QAItem from '../components/QuestionAnswers/QAItem';

export default function QuestionAnswer({ curProduct }) {
  const [QAList, setQAList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [queryCount, setQueryCount] = useState(10);

  useEffect(() => {
    if (curProduct.id) {
      axios
        .get(
          `/qa/questions/?page=${page}&count=${queryCount}&productid=${curProduct.id}`,
        )
        .then((res) => setQAList(res.data.results))
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
        {QAList.map((QA) => (
          <QAItem QA={QA} key={QA.id} />
        ))}
      </div>
      <div className="QA-btn-container">
        <button type="button">MORE ANSWERED QUESTION</button>
        <button type="button">ADD A QUESTION +</button>
      </div>

      {/* //SHOW MODAL */}
    </section>
  );
}
