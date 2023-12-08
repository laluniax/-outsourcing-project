import styled from 'styled-components';

export const CardBox = styled.div`
  margin: 12px 10px;
`;

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  all: unset;
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'gray' : 'white')};
`;
