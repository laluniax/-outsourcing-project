import styled from 'styled-components';
import { colors } from 'styles/GlobalColors';

export const SearchWrapper = styled.form`
  z-index: 99;
  /* background-color: red; */
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 540px;
  margin-bottom: 50px;
`;

export const SearchIndex = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.05);
  width: 950px;
  height: 90px;
  border-radius: 30px;
`;

export const InputStyle = styled.input`
  width: 569px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f5f5f5;
  border: none;
  padding: 23px;
`;

export const SelectStyle = styled.select`
  width: 180px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f5f5f5;
  border: none;
  padding: 0 23px;
`;

export const ButtonStyle = styled.button`
  width: 100px;
  flex-shrink: 0;
  border-radius: 15px;
  background: ${colors.mainColor};
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 700;
`;

export const SearchResultWrapper = styled.div`
  margin-top: 50px;
`;
