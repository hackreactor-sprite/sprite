import React, { useEffect } from 'react';

export default function GalleryThumbnails({ picture, setDisplayIndex, i }) {
  //  ('this is the picture for thumbnails: ', picture);
  'this is the alt targeting: ', i;
  const handleClick = () => {
    setDisplayIndex(i);
  };

  return (
    <section>
      <img
        id={i}
        onClick={handleClick}
        src={picture.thumbnail_url}
        alt={picture.url}
        height="30px"
      />
    </section>
  );
}
