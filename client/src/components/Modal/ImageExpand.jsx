import React from 'react';
import PropTypes from 'prop-types';
import handleInteractions from '../../helper/handleInteractions';

export default function ImageExpand({
  url,
  alt,
  displayIndex,
  setDisplayIndex,
  length,
}) {
  return (
    <div className="expanded">
      {displayIndex >= 1 ? (
        <div
          className="leftArrow"
          onClick={() => {
            setDisplayIndex(displayIndex - 1);
            handleInteractions({ element: 'leftArrow', widget: 'imageExpanded' });
          }}
        >
          <i className="fa-solid fa-circle-arrow-left" />
        </div>
      ) : null}
      <img className="ImageExpand" src={url} alt={alt} />
      {displayIndex < length ? (
        <div
          className="rightArrow"
          onClick={() => {
            setDisplayIndex(displayIndex + 1);
            handleInteractions({ element: 'rightArrow', widget: 'imageExpanded' });
          }}
        >
          <i className="fa-solid fa-circle-arrow-right" />
        </div>
      ) : null}
    </div>
  );
}

ImageExpand.propTypes = {
  curPhoto: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    length: PropTypes.number,
    displayIndex: PropTypes.number,
  }),
}.isRequired;
