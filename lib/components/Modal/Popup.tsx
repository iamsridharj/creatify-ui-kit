import React, { HTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const StyledModal = styled("div")<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(222, 222, 222, 0.4);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.1s ease-in-out;
`

const StyledModalBody = styled("div")`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 4px 4px;
`

const StyledCloseButton = styled("span")`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`

export const Popup = ({ isOpen, onClose, children }: PopupProps) => {


  return (
      <StyledModal isOpen={isOpen} onClick={onClose}>
        <StyledModalBody onClick={(event) => event.stopPropagation()}>
          <StyledCloseButton onClick={onClose}>&times;</StyledCloseButton>
          {children}
        </StyledModalBody>
      </StyledModal>
  );
};

