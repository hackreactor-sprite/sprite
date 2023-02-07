import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyleBubble from './StyleBubble';

export default function StyleSelector({ styles, setStyles, curStyle, setCurStyle, setSizeId }) {
  // console.log('line 6 styles: ', styles);

  return (
    <section>
      <h3>Selected Style &gt; {curStyle.name} </h3>
      {!setStyles
        ? <div className="empty" />
        : styles.map((style) => (
          <StyleBubble
            key={style.style_id}
            setCurStyle={setCurStyle}
            style={style}
            setSizeId={setSizeId}
          />
        ))}
    </section>
  );
}
