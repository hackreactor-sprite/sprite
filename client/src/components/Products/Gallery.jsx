import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../reusable/Modal';
import GalleryThumbnails from './GalleryThumbnails';

export default function Gallery({
  displayPic, setDisplayPic, styles, curStyle,
}) {
  // console.log('line 5 of Gallery the styles for gallery: ', curStyle.photos);
  const [showBigImage, setShowBigImage] = useState(false);

  let thumbnails;
  if (curStyle.photos === undefined) {
    thumbnails = false;
  } else {
    thumbnails = true;
    console.log('line 11: ', displayPic);
  }

  const content = { photo: displayPic };

  return (
    <section>
      <h3>Image Gallery</h3>
      <div className="galleryPic">
        <img src={displayPic} alt="" height="400px" />
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
