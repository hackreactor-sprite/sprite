import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QAItem from '../components/QuestionAnswers/QAItem.jsx';
import Modal from '../components/reusable/Modal.jsx';

export default function QuestionAnswer({ curProduct }) {
  const [QAList, setQAList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`/qa/${curProduct.id}`)
      .then((res) => {
        setQAList(res.data.results);
        console.log('QA LIST', QAList);
      })
      .catch((err) => new Error(err));
  }, [curProduct]);

  const handleSearch = (e) => {
    if (search.length > 3 && e.key === 'enter') {
      const newList = [...QAList];
      newList.filter((el) => el.body.includes(search));
      setQAList(newList);
    }
  };

  return (
    <div>
      <h5>QUESTIONS & ANSWERS</h5>
      <input
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
      />
      {QAList.map((QA, i) => (
        <QAItem QA={QA} key={i} />
      ))}

      <div>
        <div>MORE ANSWERED QUESTION</div>
        <div>ADD A QUESTION +</div>
      </div>

      {/* //SHOW MODAL */}
    </div>
  );
}
