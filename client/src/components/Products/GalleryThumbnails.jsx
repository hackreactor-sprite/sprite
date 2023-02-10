import React, { useEffect } from 'react';
import handleInteractions from '../../helper/handleInteractions';

export default function GalleryThumbnails({ picture, setDisplayIndex, i }) {
  // console.log('this is the picture for thumbnails: ', picture);
  // console.log('this is the alt targeting: ', i);
  const handleClick = () => {
    setDisplayIndex(i);
    handleInteractions({ element: `galleryThumb${i}`, widget: 'galleryThumbnails' });
  };

  return (
      <div className="galleryThumb">
        <img
          id={i}
          onClick={handleClick}
          src={picture.thumbnail_url}
          alt={picture.url}
          height="50px"
        />
      </div>
  );
}
