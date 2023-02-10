import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import handleInteractions from '../../helper/handleInteractions';

export function handleRowCarouselClick(ev, direction, offset) {
  ev.preventDefault();
  let directionProp;
  if (direction === 'row') {
    directionProp = 'left';
  } else if (direction === 'column') {
    directionProp = 'top';
  }

  const container = ev.target.parentElement.parentElement.querySelector('.item-container');
  const scrollOptions = {
    [directionProp]: offset,
    behavior: 'smooth',
  };
  container.scrollBy(scrollOptions);
}

export function offsetHandler(direction, numberToDisplay, length) {
  let count = 0;
  return (ev, offset) => {
    const firstButton = ev.target.parentElement.querySelector('.carousel-button');
    const secondButton = ev.target.parentElement.querySelectorAll('.carousel-button')[1];
    if (offset >= 0) {
      count += 1;
    } else if (offset < 0) {
      count -= 1;
    }
    if (count === 0) {
      firstButton.style.visibility = 'hidden';
      secondButton.style.visibility = 'visible';
    } else if (count + numberToDisplay === length) {
      firstButton.style.visibility = 'visible';
      secondButton.style.visibility = 'hidden';
    } else {
      firstButton.style.visibility = 'visible';
      secondButton.style.visibility = 'visible';
    }
    handleRowCarouselClick(ev, direction, offset);
  };
}

export default function RowCarousel({
  children, location, size = 200, direction = 'row', numberToDisplay = 4, gap = 15, buttonSize = 1,
}) {
  const clickHandler = offsetHandler(direction, numberToDisplay, children.length);
  const containerSize = size * (Math.min(children.length, numberToDisplay)) + (Math.min(children.length, numberToDisplay) - 1) * gap;
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
    <div style={{
      display: 'flex', position: 'relative', flexDirection: direction, justifyContent: 'center',
    }}
    >
      <button
        className="carousel-button"
        type="button"
        onClick={(ev) => {
          clickHandler(ev, -scrollOffset);
          handleInteractions({ element: firstButton, widget: location });
        }}
        style={{
          visibility: 'hidden', backgroundColor: 'transparent', border: 'none', fontSize: `${buttonSize}rem`, position: 'absolute', [direction === 'row' ? 'right' : 'bottom']: '100%', [direction === 'row' ? 'top' : 'left']: '40%',
        }}
      >
        {direction === 'row' ? '<' : '⌃'}
      </button>
      <div
        className="item-container"
        style={{
          display: 'flex',
          flexDirection: direction,
          gap: '15px',
          [sizeProperty]: `${containerSize}px`,
          overflow: 'hidden',
        }}
      >
        {children.map((child) => (<div style={{ [`min${sizeProperty[0].toUpperCase()}${sizeProperty.slice(1)}`]: `${size}px` }}>{child}</div>))}
      </div>
      <button
        className="carousel-button"
        type="button"
        onClick={(ev) => { clickHandler(ev, scrollOffset); handleInteractions({ element: secondButton, widget: location }); }}
        style={{
          backgroundColor: 'transparent', border: 'none', fontSize: `${buttonSize}rem`, position: 'absolute', [direction === 'row' ? 'left' : 'top']: '100%', [direction === 'row' ? 'top' : 'left']: '40%',
        }}
      >
        {direction === 'row' ? '>' : '⌄'}
      </button>
    </div>
  );
}

RowCarousel.propTypes = {
  size: PropTypes.number,
  direction: PropTypes.string,
  numberToDisplay: PropTypes.number,
  gap: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

// RowCarousel.defaultProps = {
//   size: 200,
//   direction: 'row',
//   numberToDisplay: 4,
//   gap: 15,
// };
