import React from 'react';

import { Popup } from "./Popup";

export const Modal = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Popup isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Popup>
    </>
  )
}
