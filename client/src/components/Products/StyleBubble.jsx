import React, { useState, useEffect } from 'react';

export default function StyleBubble({ style, styles, setCurStyle, setDisplayPic }) {
  // console.log('style bubble line 4 these are all the styles for style bubble: ', style);

  const handleClick = (event) => {
    console.log('events style: ', style);
    setCurStyle(style);
    setDisplayPic(style.photos[0].url);
  };

  return (
    <div>
      <img
        className="bubble"
        onClick={handleClick}
        id={style.style_id}
        src={style.photos[0].thumbnail_url}
        alt={style.name}
        height="40px"
        width="40px"
      />
    </div>
  );
}
