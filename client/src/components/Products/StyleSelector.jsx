import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyleBubble from './StyleBubble';

export default function StyleSelector({
  styles,
  setStyles,
  curStyle,
  setCurStyle,
  setSizeId,
}) {
  //  ('line 6 styles: ', styles);

  return (
    <section className="selected-style">
      <h3 className="heading">
        Selected Style &gt;
        {' '}
        {curStyle.name}
        {' '}
      </h3>
      {!setStyles ? (
        <div className="empty" />
      ) : (
        <div className="bubbles">
          {styles.map((style) => (
            <StyleBubble
              key={style.style_id}
              curStyle={curStyle}
              setCurStyle={setCurStyle}
              style={style}
              setSizeId={setSizeId}
            />
          ))}
        </div>
      )}
    </section>
  );
}
