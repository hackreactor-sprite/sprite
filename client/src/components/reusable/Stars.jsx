import React from 'react';
import empty from '../../assets/star-empty.svg';
import onequarter from '../../assets/star-one-quarter.svg';
import half from '../../assets/star-half.svg';
import threequarter from '../../assets/star-three-quarter.svg';
import filled from '../../assets/star-filled.svg';

export default function Star({ totalRanking }) {
  let stars = [];
  const map = {
    0: empty,
    0.25: onequarter,
    0.5: half,
    0.75: threequarter,
    1: filled,
  };

  for (let i = 0; i < 5; i++) {
    if (totalRanking >= 1) {
      stars.push(map[1]);
    } else if (i === totalRanking) {
      stars.push(map[totalRanking]);
    } else {
      stars.push(<CustomStar key={i} fillPercentage={0} />);
    }
  }

  return <div>{stars}</div>;
}
