import React from 'react';
import empty from '../../assets/star-empty.svg';
import onequarter from '../../assets/star-one-quarter.svg';
import half from '../../assets/star-half.svg';
import threequarter from '../../assets/star-three-quarter.svg';
import filled from '../../assets/star-filled.svg';

export default function Star({ totalRanking }) {
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
    if (rank >= 1) {
      rank -= 1;
      stars.push(map[1]);
    } else if (rank > 0) {
      stars.push(map[Math.round(rank * 4) / 4]);
      rank = 0;
    } else {
      stars.push(map[0]);
    }
  }

  return (
    <div className="stars">
      {stars.map((StarSVG, i) => (
        <StarSVG key={i} className="starsvg" />
      ))}
    </div>
  );
}
