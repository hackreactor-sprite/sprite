import React from 'react';
import PropTypes from 'prop-types';

export default function ImageExpand({ url, alt }) {
  return (
    <div className="expanded">
      <div className="leftArrow">&lt;</div>
      <img className="ImageExpand" src={url} alt={alt} />
      <div className="rightArrow">&gt;</div>
    </div>
  );
}

ImageExpand.propTypes = {
  curPhoto: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
}.isRequired;
