import React, { useRef } from 'react';
import useOutsideAlert from './useOutsideAlert';
import handleInteractions from '../../helper/handleInteractions';

export default function Modal({ children, showModal, setShowModal, location }) {
  const wrapperRef = useRef(null);
  useOutsideAlert({
    ref: wrapperRef,
    state: showModal,
    setState: setShowModal,
  });
  return (
    <div className="modal" data-testid="modal" ref={wrapperRef}>
      <button
        type="button"
        onClick={(ev) => {
          ev.stopPropagation();
          setShowModal(!showModal);
          handleInteractions({
            element: 'x modal button',
            widget: location,
          });
        }}
      >
        {''}
      </button>
      {children}
    </div>
  );
}
