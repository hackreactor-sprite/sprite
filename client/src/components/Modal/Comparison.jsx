import React from 'react';
import PropTypes from 'prop-types';
import comparing from '../../helper/comparing';

export default function Comparison({
  curProd, product, state, setState,
}) {
  const curProdChar = curProd.features;
  const prodChar = product.features;
  const compareChars = comparing(curProdChar, prodChar);
  console.log('this is comparing', compareChars);

  return (
    <>
      <div>Comparing</div>
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>{curProd.name}</th>
            <th style={{ border: '1px solid black' }}>Characteristics</th>
            <th style={{ border: '1px solid black' }}>{product.name}</th>
          </tr>
        </thead>
        <tbody>
          {compareChars.map((char) => (
            <tr>
              {char.curProd ? <td>✓</td> : <td />}
              <td>{char.name}</td>
              {char.relProd ? <td>✓</td> : <td />}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
