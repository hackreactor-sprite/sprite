import React, { useState } from 'react';
import GalleryThumbnails from './GalleryThumbnails';

export default function Gallery({
  displayPic, setDisplayPic, styles, curStyle,
}) {
  // console.log('line 5 of Gallery the styles for gallery: ', curStyle.photos);
  let thumbnails;
  if (curStyle.photos === undefined) {
    thumbnails = false;
  } else {
    thumbnails = true;
    console.log('line 11: ', curStyle.photos);
  }

  return (
    <section>
      <h3>Image Gallery</h3>
      <div className="galleryPic">
        <img src={displayPic} alt="" height="400px" />
      </div>
      <div className="galleryThumbs">
        {thumbnails
          ? curStyle.photos.map((picture) => (
            <GalleryThumbnails
              picture={picture}
              displayPic={displayPic}
              setDisplayPic={setDisplayPic}
              key={picture.url}
            />
          ))
          : <div />}
      </div>
    </section>
  );
}
