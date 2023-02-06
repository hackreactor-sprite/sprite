import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../reusable/Modal';
import GalleryThumbnails from './GalleryThumbnails';

export default function Gallery({
  styles,
  curStyle,
}) {
  // //console.log('line 5 of Gallery the styles for gallery: ', curStyle.photos);
  const [showBigImage, setShowBigImage] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  let thumbnails;
  let bigImage;
  let content;
  if (curStyle.photos === undefined) {
    thumbnails = false;
    bigImage = false;
  } else {
    thumbnails = true;
    bigImage = true;
    // //console.log('line 11: ', curStyle.photos);
    content = { photo: curStyle.photos[displayIndex].url };
  }

  return (
    <section>
      <h3>Image Gallery</h3>
      <div className="galleryPic">
        {bigImage
          ? <img src={curStyle.photos[displayIndex].url} alt="" height="400px" />
          : null}
        <button type="button" onClick={() => { setShowBigImage(!showBigImage); }}>+</button>
      </div>
      {showBigImage
        && createPortal(
          <Modal showModal={showBigImage} setShowModal={setShowBigImage}>
            <ModalRoute
              route="ImageExpand"
              content={content}
              state={showBigImage}
              setState={setShowBigImage}
            />
          </Modal>,
          document.body,
        )}
      <div className="galleryThumbs">
        {thumbnails ? (
          curStyle.photos.map((picture, i) => (
            <GalleryThumbnails
              picture={picture}
              key={picture.url}
              setDisplayIndex={setDisplayIndex}
              i={i}
            />
          ))
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
