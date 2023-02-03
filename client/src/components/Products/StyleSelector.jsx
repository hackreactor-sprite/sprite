import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyleBubble from './StyleBubble';

export default function StyleSelector({ styles, setStyles, curStyle, setCurStyle, curProduct, displayPic, setDisplayPic }) {
  const getStyles = (product) => {
    axios.get(`products/${product.id}/styles`)
      .then((response) => {
        // console.log(' line 9 response data to set styles: ', response.data);
        setStyles(response.data.results);
        setCurStyle(response.data.results[0]);
        setDisplayPic(response.data.results[0].photos[0].url);
        // console.log('the current style should be: ', curStyle);
      })
      .catch((error) => {
        console.log('line 15 getStyles error: ', error);
      });
  };

  useEffect(() => {
    getStyles(curProduct);
  }, [curProduct]);

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
