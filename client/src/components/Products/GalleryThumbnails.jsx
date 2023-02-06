import React, { useEffect } from 'react';

export default function GalleryThumbnails({ picture, setDisplayIndex, i }) {
  //console.log('this is the picture for thumbnails: ', picture);
  //console.log('this is the alt targeting: ', i);
  const handleClick = () => {
    setDisplayIndex(i);
  };

  return (
    <section>
      <img onClick={handleClick} src={picture.thumbnail_url} alt={picture.url} height="30px" />
    </section>
  );
}
