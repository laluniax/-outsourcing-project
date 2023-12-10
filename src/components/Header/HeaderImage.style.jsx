import OlympicPark from '../../assets/OlympicPark.jpg';
import styled from 'styled-components';

export const HeaderImage = styled.div`
  background-image: url(${OlympicPark});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const HeaderTitle = styled.h1`
  font-family: 'yg-jalnan';
  color: #fff;
  font-size: 64px;
  text-align: center;
`;
