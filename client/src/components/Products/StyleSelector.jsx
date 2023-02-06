import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyleBubble from './StyleBubble';

export default function StyleSelector({ styles, setStyles, curStyle, setCurStyle, curProduct, displayPic, setDisplayPic }) {
  //console.log('line 6 curStyle: ', curStyle);

  return (
    <section>
      <h3>Selected Style &gt; {curStyle.name} </h3>
      {!setStyles
        ? <div />
        : styles.map((style) => (
          <StyleBubble
            key={style.style_id}
            setCurStyle={setCurStyle}
            setDisplayPic={setDisplayPic}
            style={style}
            styles={styles}
          />
        ))}
    </section>
  );
}
