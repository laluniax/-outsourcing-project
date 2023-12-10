import styled from 'styled-components';
import { colors } from 'styles/GlobalColors';

export const CardBox = styled.div`
  margin: 12px 10px;
`;

export const PaginationWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  all: unset;
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 99px;
  cursor: pointer;
  color: ${(props) => (props.active ? 'white' : 'black')};
  background-color: ${(props) => (props.active ? `${colors.mainColor}` : 'white')};
  font-weight: 600;
`;

// 카드 리스트

export const ContentsBox = styled.div`
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.05);
  width: 680px;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

export const ContentsImage = styled.div`
  background-color: #c2c2c2;
  width: 400px;
  height: 250px;
  border-radius: 10px;
`;

export const ContentsBoxInfor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TitleStyle = styled.span`
  color: black;
  font-size: 32px;
  font-weight: 700;
  width: 200px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const AddressStyle = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  width: 200px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
