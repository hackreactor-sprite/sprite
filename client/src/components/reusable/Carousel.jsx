import React from 'react';
import PropTypes from 'prop-types';
import handleInteractions from '../../helper/handleInteractions';

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
  children, location, size = 200, direction = 'row', numberToDisplay = 4, gap = 15,
}) {
  const containerSize = size * numberToDisplay + (numberToDisplay - 1) * gap;
  const scrollOffset = size + gap;
  let sizeProperty;
  let firstButton;
  let secondButton;
  if (direction === 'column') {
    sizeProperty = 'height';
    firstButton = 'upButton';
    secondButton = 'downButton';
  } else if (direction === 'row') {
    sizeProperty = 'width';
    firstButton = 'leftButton';
    secondButton = 'rightButton';
  }

  return (
    <div style={{ display: 'flex', flexDirection: direction, justifyContent: 'center' }}>
      <button type="button" onClick={(ev) => { handleClick(ev, direction, -scrollOffset); handleInteractions({ element: firstButton, widget: location }); }} style={{ marginTop: 'auto' }}>{direction === 'row' ? '‹' : '⌃'}</button>
      <div
        className="item-container"
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
      <button type="button" onClick={(ev) => { handleClick(ev, direction, scrollOffset); handleInteractions({ element: secondButton, widget: location }); }} style={{ marginTop: 'auto' }}>{direction === 'row' ? '›' : '⌄'}</button>
    </div>
  );
}

Carousel.propTypes = {
  size: PropTypes.number,
  direction: PropTypes.string,
  numberToDisplay: PropTypes.number,
  gap: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

// Carousel.defaultProps = {
//   size: 200,
//   direction: 'row',
//   numberToDisplay: 4,
//   gap: 15,
// };
