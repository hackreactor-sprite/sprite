import React from 'react';
import handleInteractions from '../../helper/handleInteractions';

export default function Modal({
  children, showModal, setShowModal, location,
}) {
  return (
    <div className="modal" data-testid="modal">
      <button
        type="button"
        onClick={(ev) => {
          ev.stopPropagation();
          setShowModal(!showModal);
          handleInteractions({ element: 'x modal button', widget: location });
        }}
      >
        <small>x</small>
      </button>
      {children}
    </div>
  );
}
