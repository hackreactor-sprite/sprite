import React, {useState, useEffect} from 'react';
import '../../../styles/css/Modal.css';

export default function Modal (props) {

  var onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (props.shown) {
    return (
      <div class="modal">
        <div class="modal-content">
          {props.children}
        </div>
        <div class="modal-actions">
          <button onClick={onClose}>{props.closeButtonText}</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}