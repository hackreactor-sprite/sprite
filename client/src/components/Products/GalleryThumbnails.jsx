import React, { useEffect } from 'react';

export default function GalleryThumbnails({ picture, setDisplayPic }) {
  // console.log('this is the picture for thumbnails: ', picture);
  const handleClick = (event) => {
    console.log('clicked: ', event.target.alt);
    setDisplayPic('');
    setDisplayPic(event.target.alt);
  };

  return (
    <section>
      <img onClick={handleClick} src={picture.thumbnail_url} alt={picture.url} height="30px" />
    </section>
  );
}
