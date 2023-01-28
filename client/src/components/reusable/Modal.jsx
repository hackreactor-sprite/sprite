import React from 'react';

export default function Modal(props) {
  var onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  return (
    <>
      {props.shown ? (
        <div class="modal">
          <div class="modal-content">{props.children}</div>
          <div class="modal-actions">
            <button onClick={onClose}>{props.closeButtonText}</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
