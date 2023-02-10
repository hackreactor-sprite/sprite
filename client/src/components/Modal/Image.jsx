import React from 'react';
import PropTypes from 'prop-types';

export default function ImageExpand({ url, alt }) {
  console.log('image', url);
  //  (displayIndex);
  return (
    <img
      className="ImageExpand"
      src={url}
      alt={alt}
      style={{ maxHeight: 'max(40rem)', objectFit: 'scale-down' }}
    />
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
