import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../reusable/Modal';
import GalleryThumbnails from './GalleryThumbnails';
import Carousel from '../reusable/Carousel';

export default function Gallery({
  styles,
  curStyle,
  displayIndex,
  setDisplayIndex,
}) {
  // // ('line 5 of Gallery the styles for gallery: ', curStyle.photos);
  const [showBigImage, setShowBigImage] = useState(false);

  let thumbnails;
  let bigImage;
  let content;
  let length;
  let photoUrl;
  if (curStyle.photos === undefined) {
    thumbnails = false;
    bigImage = false;
  } else {
    thumbnails = true;
    bigImage = true;
    //  ('line 11: ', curStyle.photos);
    length = curStyle.photos.length - 1;
    if (curStyle.photos[displayIndex].url === undefined) {
      photoUrl = curStyle.photos[0].url;
    } else {
      'in the else: ', curStyle.photos[displayIndex].url;
      photoUrl = curStyle.photos[displayIndex].url;

      content = {
        photo: photoUrl,
        displayIndex,
        setDisplayIndex,
        length,
      };
    }
  }

  return (
    <section>
      <h3>Image Gallery</h3>
      <div className="galleryPic">
        {bigImage ? (
          <>
            {displayIndex >= 1 ? (
              <div
                onClick={() => {
                  setDisplayIndex(displayIndex - 1);
                }}
              >
                &lt;
              </div>
            ) : null}
            <img
              src={curStyle.photos[displayIndex].url}
              alt=""
              height="400px"
            />
            {displayIndex < length ? (
              <div
                onClick={() => {
                  setDisplayIndex(displayIndex + 1);
                }}
              >
                &gt;
              </div>
            ) : null}
          </>
        ) : null}
        <button
          type="button"
          onClick={() => {
            setShowBigImage(!showBigImage);
          }}
        >
          +
        </button>
      </div>
      {showBigImage &&
        createPortal(
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
          <Carousel>
            {curStyle.photos.map((picture, i) => (
              <GalleryThumbnails
                picture={picture}
                key={picture.url}
                setDisplayIndex={setDisplayIndex}
                i={i}
              />
            ))}
          </Carousel>
        ) : null}
      </div>
    </section>
  );
}
