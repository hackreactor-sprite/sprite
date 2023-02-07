import React from 'react';

export default function Modal({ children, showModal, setShowModal }) {
  return (
    <div className="modal" data-testid="modal">
      <button
        type="button"
        onClick={(ev) => {
          ev.stopPropagation();
          setShowModal(!showModal);
        }}
      >
        <small>x</small>
      </button>
      {children}
    </div>
  );
}
