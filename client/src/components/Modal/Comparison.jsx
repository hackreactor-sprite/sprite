import React from 'react';
import PropTypes from 'prop-types';
import comparing from '../../helper/comparing';

export default function Comparison({
  curProd, product, state, setState,
}) {
  const curProdChar = curProd.features;
  const prodChar = product.features;
  console.log('this is curProdchar', curProdChar);
  console.log('this is prodChar', prodChar);
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
              <td>{char.curProd && '✓'}</td>
              <td>{char.name}</td>
              <td>{char.relProd && '✓'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
