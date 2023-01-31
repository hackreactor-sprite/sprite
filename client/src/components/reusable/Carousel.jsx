import React from 'react';

const fakeData = ['product1', 'product2', 'product3', 'product4', 'product5'];

function Product({ name }) {
  return (
    <div style={{
      minWidth: '100px', width: '100px', height: '150px', backgroundColor: 'cyan',
    }}
    >
      {name}
    </div>
  );
}

export function handleLeftClick(ev) {
  ev.preventDefault();
  const container = document.querySelector('#item-container');
  const scrollOptions = {
    top: 0,
    left: -50,
    behavior: 'smooth',
  };
  container.scrollBy(scrollOptions);
}
export function handleRightClick(ev) {
  ev.preventDefault();
  const container = document.querySelector('#item-container');
  const scrollOptions = {
    top: 0,
    left: 50,
    behavior: 'smooth',
  };
  container.scrollBy(scrollOptions);
}

export default function Carousel() {
  return (
    <div style={{ display: 'flex' }}>
      <button onClick={handleLeftClick}>left</button>
      <div
        id="item-container"
        style={{
          display: 'flex', gap: '15px', padding: '15px', border: '1px solid black', margin: '15px', maxWidth: '345px', overflowX: 'hidden',
        }}
      >
        {fakeData.map((name) => <Product name={name} />)}
      </div>
      <button onClick={handleRightClick}>right</button>
    </div>
  );
}
