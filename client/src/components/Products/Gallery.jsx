import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalRoute from '../Modal/ModalRoute';
import Modal from '../reusable/Modal';
import GalleryThumbnails from './GalleryThumbnails';
import Carousel from '../reusable/Carousel';
import handleInteractions from '../../helper/handleInteractions';

export default function Gallery({
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
      // console.log('in the else: ', curStyle.photos[displayIndex].url);
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
    <section id="gallery">
      <div className="main-view">
        <h3>Image Gallery</h3>
        <div className="galleryPic">
          {bigImage ? (
            <>
              {displayIndex >= 1 ? (
                <div
                  onClick={() => {
                    setDisplayIndex(displayIndex - 1);
                    handleInteractions({ element: 'leftArrow', widget: 'gallery' });
                  }}
                >
                  <i className="fa-solid fa-chevron-left" />
                </div>
              ) : null}
              <img
                className="displayImage"
                onClick={() => {
                  setShowBigImage(!showBigImage);
                  handleInteractions({ element: 'displayImage', widget: 'gallery' });
                }}
                src={curStyle.photos[displayIndex].url}
                alt=""
                // height="600px"
              />
              {displayIndex < length ? (
                <div
                  onClick={() => {
                    setDisplayIndex(displayIndex + 1);
                    handleInteractions({ element: 'rightArrow', widget: 'gallery' });
                  }}
                >
                  <i className="fa-solid fa-chevron-right" />

                </div>
              ) : null}
            </>
          ) : null}
        </div>
        {showBigImage
          && createPortal(
            <Modal displayIndex={displayIndex} showModal={showBigImage} setShowModal={setShowBigImage}>
              <ModalRoute
                route="ImageExpand"
                content={content}
                state={showBigImage}
                setState={setShowBigImage}
              />
            </Modal>,
            document.body,
          )}
      </div>
      <div className="galleryThumbs">
        {thumbnails ? (
          <Carousel location="gallery" direction="column" gap={20} size={50} numberToDisplay={7}>
            {curStyle.photos.map((picture, i) => (
              <GalleryThumbnails
                picture={picture}
                key={picture.url}
                displayIndex={displayIndex}
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
