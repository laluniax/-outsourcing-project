import styled from 'styled-components';

export const ROADVIEW_BUTTON = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  z-index: 99; // Ensures the button is on top of other elements
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  background: white;
  &:hover {
    border-color: #f53e05;
    background-color: white;
    border: none;
    /* color: #f53e05; */
  }
`;
