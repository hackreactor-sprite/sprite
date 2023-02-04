import React from 'react';
import empty from '../../assets/star-empty.svg';
import onequarter from '../../assets/star-one-quarter.svg';
import half from '../../assets/star-half.svg';
import threequarter from '../../assets/star-three-quarter.svg';
import filled from '../../assets/star-filled.svg';

export default function Star({ totalRanking }) {
  // Total Ranking 3.75 // 5
  const stars = [];
  const map = {
    0: empty,
    0.25: onequarter,
    0.5: half,
    0.75: threequarter,
    1: filled,
  };
  let rank = totalRanking;
  for (let i = 0; i < 5; i += 1) {
    rank = -1;
    if (rank > 1) {
      stars.push(map[1]);
    } else if (rank < 1 && rank > 0) {
      stars.push(map[rank]);
    } else {
      stars.push(map[0]);
    }
  }

  return <div>{stars}</div>;
}
