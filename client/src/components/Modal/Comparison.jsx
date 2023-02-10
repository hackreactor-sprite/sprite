import React from 'react';
import PropTypes from 'prop-types';
import comparing from '../../helper/comparing';

export default function Comparison({
  curProd, product, state, setState,
}) {
  const curProdChar = curProd.features;
  const prodChar = product.features;
  const compareChars = comparing(curProdChar, prodChar);

  return (
    <div className="comparison-modal">
      <h3>Comparing</h3>
      <table>
        <thead>
          <tr>
            <th>{curProd.name}</th>
            <th />
            <th>{product.name}</th>
          </tr>
        </thead>
        <tbody>
          {compareChars.map((char) => (
            <tr key={char.name}>
              <td>{char.curProd && '✓'}</td>
              <td>{char.name}</td>
              <td>{char.relProd && '✓'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
