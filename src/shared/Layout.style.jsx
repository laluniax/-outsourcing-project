import styled from 'styled-components';
import logoIcon from '../assets/logo.png';

export const HeaderWrapper = styled.section`
  height: 100px;
  background: #fff;
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 162px;
`;

export const HeaderTitleLogo = styled.button`
  background-image: url(${logoIcon});
  text-decoration: none;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 147px;
  height: 35px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  margin-top: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  p {
    color: #aeaeae;
  }
`;
