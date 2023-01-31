import React from 'react';

export default function Modal({ children, showModal, setShowModal }) {
  return (
    <div className="modal">
      <button type="button" onClick={() => setShowModal(!showModal)}>
        <small>x</small>
      </button>
      {children}
    </div>
  );
}
