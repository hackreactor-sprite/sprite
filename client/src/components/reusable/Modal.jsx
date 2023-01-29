import React from 'react';

export default function Modal({ children, handleModal }) {
  return (
    <div className="modal">
      <button type="button" onClick={() => handleModal()}>
        <small>x</small>
      </button>
      {children}
    </div>
  );
}
