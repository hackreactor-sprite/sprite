import React, { useState, useEffect } from 'react';
import handleInteractions from '../../helper/handleInteractions';

export default function StyleBubble({ style, setCurStyle, setSizeId }) {
  // // ('style bubble line 4 these are all the styles for style bubble: ', style);

  const handleClick = () => {
    // ('events style: ', style);
    //  ('style for testing: ', style);
    // set size and quantity states here before setting curStyle
    setSizeId('');
    setCurStyle(style);
    handleInteractions({ element: `bubble: ${style.style_id}`, widget: 'styleBubble' });
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
