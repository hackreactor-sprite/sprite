import React, { useEffect } from 'react';
import handleInteractions from '../../helper/handleInteractions';

export default function GalleryThumbnails({
  picture, displayIndex, setDisplayIndex, i,
}) {
  // console.log('this is the picture for thumbnails: ', picture);
  // console.log('this is the alt targeting: ', i);
  const handleClick = () => {
    setDisplayIndex(i);
    handleInteractions({ element: `galleryThumb${i}`, widget: 'galleryThumbnails' });
  };

  return (
    <div>
      {displayIndex === i
        ? (
          <div className="galleryThumb selected-thumbnail">
            <img
              className="thumbnail-image"
              id={i}
              onClick={handleClick}
              src={picture.thumbnail_url}
              alt={picture.url}
              min-height="50px"
            />
          </div>
        )
        : (
          <div className="galleryThumb">
            <img
              className="thumbnail-image"
              id={i}
              onClick={handleClick}
              src={picture.thumbnail_url}
              alt={picture.url}
              min-height="50px"
            />
          </div>
        )}
    </div>
  );
}
