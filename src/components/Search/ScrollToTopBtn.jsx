import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/GlobalColors';
function ScrollToTopBtn() {
  const scrollToTopBtnRef = useRef(null);
  const handleScroll = () => {
    if (!scrollToTopBtnRef.current) return;
    if (window.scrollY > 150) {
      scrollToTopBtnRef.current.style.scale = '1';
    } else {
      scrollToTopBtnRef.current.style.scale = '0';
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScrollToTop = useCallback(() => {
    if (scrollToTopBtnRef.current) {
      document.documentElement.scrollTop = 0;
    }
  }, []);
  return (
    <StScrollToTopBtn ref={scrollToTopBtnRef} onClick={handleScrollToTop}>
      UP
    </StScrollToTopBtn>
  );
}
export default ScrollToTopBtn;
const StScrollToTopBtn = styled.button`
  font-family: 'yg-jalnan';
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  color: #fff;
  background-color: ${colors.mainColor};
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease-in-out;
  scale: 0;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;
