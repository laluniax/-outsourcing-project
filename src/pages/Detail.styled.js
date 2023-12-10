import styled, { css } from 'styled-components';

export const ROADVIEW_BUTTON = styled.button`
  position: absolute;
  border: none;
  border: 1px solid #ccc;
  top: 0;
  left: 0;
  height: 40px;
  z-index: 99; // Ensures the button is on top of other elements
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  background: white;
  &:hover {
    border: 2px solid #ccc;
    /* color: #f53e05; */
  }
`;

// -------------슬라이드 버튼 -------------
export const SLIDE_BUTTON = styled.button`
  background-color: white;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 4px 4px;
  cursor: pointer;
  border-radius: 50%; /* 원형 모양으로 */
  transition-duration: 0.4s;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  width: 32px; /* 너비와 높이를 같게 설정하여 원 모양 유지 */
  height: 32px;
  &:hover {
    background-color: #f0f0f0; /* 배경색 약간 어둡게 변경 */
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); /* 그림자 효과 변경 */
  }
`;
// -------------슬라이드 버튼 -------------

// ---------- 탭 버튼 스타일링 -----------
export const TAP_BUTTON_DIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const TAP_BUTTON = styled.button`
  background-color: white;
  color: #49627a;
  width: 80vh;
  padding: 10px 20px;
  text-align: center;
  font-size: 28px;
  border: none;
  /* border-bottom: 2px solid #f44444; */
  cursor: pointer;
  &:hover {
    color: black;
    font-weight: bold;
  }
`;
// ---------- 탭 버튼 스타일링 -----------

export const TEXTAREA = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  resize: none;
  height: 16vh;
  width: 100vh;
  border-radius: 7px;

  &:focus {
    border: 2px solid #f44044;
  }
`;

export const COMMENT_BOX = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const INPUT_BOX = styled.input`
  padding: 8px;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  transition: border-bottom 0.01;

  &:focus {
    border-bottom: 2px solid #f44044;
  }
`;

// -----------------댓글 등록 버튼 -----------------

export const COMMENT_BUTTON = styled.button`
  padding: 8px 15px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #333;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f44044;
    border-color: #f44444;
    color: #fff;
  }
`;
// -----------------댓글 등록 버튼 -----------------

// ----------------댓글 수정 , 삭제 버튼 --------------
export const EDIT_BUTTON = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    color: black;
    cursor: pointer;
    border-bottom: 2px solid #555555;
  }
`;
export const DELETE_BUTTON = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    color: black;
    cursor: pointer;
    border-bottom: 2px solid #555555;
  }
`;
export const SAVE_BUTTON = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    color: black;
    cursor: pointer;
    border-bottom: 2px solid #555555;
  }
`;
export const CANCEL_BUTTON = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    color: black;
    cursor: pointer;
    border-bottom: 2px solid #555555;
  }
`;
// ----------------댓글 수정 , 삭제 버튼 --------------
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

// ---------------폼 태그 -------------------
export const FORM = styled.form`
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  margin-bottom: 15px;
`;
// ---------------폼 태그 -------------------

// -------- 댓글 INPUT ---------
export const REVIEW_COMMENT_INPUT_BOX = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  border-bottom: 1px solid #ccc;

  width: 60vh;

  border-radius: 8x;
  padding: 12px;
  margin-bottom: 10px;
  text-align: center;
  padding: 8px;
  margin: 7px 0;
`;
// ----- 리뷰 댓글들 ------

//  ----------댓글 목록들 ---------------
export const COMMENT_LIST = styled.div`
  margin: 14px 0;
  width: 100vh;
  border: 1px solid #ccc;
  background-color: #fafafa;
  border-radius: 7px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  letter-spacing: 0.3px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
`;

export const COMMENT_TEXT = styled.span`
  font-size: 15px;
  color: #555555;
  font-weight: bold;
  font-family: 'Arial', sans-serif; /* 원하는 글꼴로 변경해주세요 */
`;

export const COMMENT_CONTENT = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #333333;
`;

export const COMMENT_DATE = styled.div`
  margin: 20px 0 0 0;
  font-size: 12px;
  color: #777777;
  font-style: italic;
`;
//  ----------댓글 목록들 ---------------

// ----------산책로 메인 이미지 ---------
export const MAIN_IMAGE_DIV = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 60vh;
  width: 75vh;
`;

export const MAIN_IMG = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 7px;
  max-width: 100%;
  transition: all 0.2s linear;
  &:hover {
    filter: brightness(80%); /* 이미지 어둡게 처리 */
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
  color: #49627a;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;
export const MAIN_TEXT = styled.div`
  color: #333333;
  margin-bottom: 35px;
  margin-top: 35px;
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

// ---------------------카카오 지도 ---------------------
export const MAP_BOX = styled.div`
  /* 배경 그라데이션 적용 */
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;
// ---------------------카카오 지도 ---------------------

// --------------------------리뷰 관련한 것들 -----------------

export const REVIEW_TEXT = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;
export const REVIEW_NAME = styled.div`
  font-weight: bold;
  margin-bottom: 3px;
`;
export const REVIEW_DATE = styled.div`
  font-size: 12px;
  color: #888;
`;

// --------------------------리뷰 관련한 것들 -----------------
