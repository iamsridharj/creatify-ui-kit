import { useState } from 'react';
import {Popup} from '../../../lib/components/Modal/Popup';
import { Button } from '../../../lib/main';

export default {
  title: 'Design System/Display/Modal',
  component: Popup,
};

const Template = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Popup isOpen={isOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Popup>
    </>
  );
};

export const Default = Template.bind({});