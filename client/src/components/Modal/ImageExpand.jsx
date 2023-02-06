import React from 'react';
import PropTypes from 'prop-types';

export default function ImageExpand({ url, alt, displayIndex, setDisplayIndex, length }) {
  // console.log(displayIndex);
  return (
    <div className="expanded">
      {displayIndex >= 1
        ? <div className="leftArrow" onClick={() => { setDisplayIndex(displayIndex - 1); }}>&lt;</div>
        : null}
      <img className="ImageExpand" src={url} alt={alt} />
      {displayIndex < length
        ? <div className="rightArrow" onClick={() => { setDisplayIndex(displayIndex + 1); }}>&gt;</div>
        : null}
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
