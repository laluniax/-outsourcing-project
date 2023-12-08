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

// ---------- 탭 버튼 스타일링 -----------
export const TAP_BUTTON_DIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const TAP_BUTTON = styled.button`
  padding: 10px;
  width: 40%;
  background-color: white;
  outline: none;
  border: 1px solid gray;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
// ---------- 탭 버튼 스타일링 -----------

export const TEXTAREA = styled.textarea`
  resize: none;
  height: 10vh;
  width: 80vh;
  border-radius: 7px;
`;

export const COMMENT_BOX = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const INPUT_BOX = styled.input`
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
`;

export const RATING_REVIEW = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const REVIEW_COMMENT = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
`;

// -------- 댓글 INPUT ---------
export const REVIEW_COMMENT_INPUT_BOX = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
// -------- 댓글 INPUT ---------

// ----- 리뷰 댓글들 ------
export const REVIEW_DIV_BOX = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const REVIEW_DIV = styled.div`
  border: 1px solid #ccc;
  border-radius: 7px;
  width: 60vh;

  text-align: center;
  padding: 8px;
  margin: 7px 0;
`;
// ----- 리뷰 댓글들 ------

// ----------산책로 메인 이미지 ---------
export const MAIN_IMAGE_DIV = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 50vh;
  width: 50vh;
`;

export const MAIN_IMG = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 4px;
  max-width: 100%;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

// ----------산책로 메인 이미지 ---------
export const RATING_COUNT_DIV = styled.div`
  text-align: center;
  height: 30vh;
  width: 30vh;
`;

export const SUB_TEXT = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const MAIN_TEXT = styled.div`
  font-size: 27px;
  font-weight: bold;
`;

export const MODAL_CONTAINER = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 투명도 조절 */
  z-index: 999; /* 모달이 위에 오도록 z-index 설정 */
  backdrop-filter: blur(4px); /* 배경 블러 처리 */
`;

export const MODAL_CONTENT = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
