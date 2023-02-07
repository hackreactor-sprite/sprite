import React from 'react';

export function handleLeftClick(ev, offset) {
  ev.preventDefault();
  const container = ev.target.parentElement.children[1];
  const scrollOptions = {
    left: -offset,
    behavior: 'smooth',
  };
  container.scrollBy(scrollOptions);
}
export function handleRightClick(ev, offset) {
  ev.preventDefault();
  const container = ev.target.parentElement.children[1];
  const scrollOptions = {
    left: offset,
    behavior: 'smooth',
  };
  container.scrollBy(scrollOptions);
}

export function handleClick(ev, direction, offset) {
  ev.preventDefault();
  let directionProp;
  if (direction === 'row') {
    directionProp = 'left';
  } else if (direction === 'column') {
    directionProp = 'top';
  }
  const container = ev.target.parentElement.children[1];
  const scrollOptions = {
    [directionProp]: offset,
    behavior: 'smooth',
  };
  container.scrollBy(scrollOptions);
}

export default function Carousel({
  children, size = 200, direction = 'row', numberToDisplay = 4, gap = 15,
}) {
  const containerSize = size * numberToDisplay + (numberToDisplay - 1) * gap;
  const scrollOffset = size + gap;
  let sizeProperty;
  if (direction === 'column') {
    sizeProperty = 'height';
  } else if (direction === 'row') {
    sizeProperty = 'width';
  }
  return (
    <div style={{ display: 'flex', flexDirection: direction, justifyContent: 'center' }}>
      <button type="button" onClick={(ev) => handleClick(ev, direction, -scrollOffset)} style={{ height: '20px', marginTop: 'auto' }}>{direction === 'row' ? 'left' : 'up'}</button>
      <div
        id="item-container"
        style={{
          display: 'flex',
          flexDirection: direction,
          gap: '15px',
          padding: '5px',
          margin: '15px',
          [sizeProperty]: `${containerSize}px`,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
      <button type="button" onClick={(ev) => handleClick(ev, direction, scrollOffset)} style={{ height: '20px', marginTop: 'auto' }}>{direction === 'row' ? 'right' : 'down'}</button>
    </div>
  );
}
