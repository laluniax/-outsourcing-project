import { css, styled } from 'styled-components';
import { colors } from 'styles/GlobalColors';

import Seoul from '../../assets/LocalImage/SeoulImage.jpeg';
import Busan from '../../assets/LocalImage/BusanImage.jpeg';
import Deagu from '../../assets/LocalImage/DaeguImage.jpg';
import Incheon from '../../assets/LocalImage/IncheonImage.jpeg';
import Gwangju from '../../assets/LocalImage/GwangjuImage.jpeg';
import Deajeon from '../../assets/LocalImage/DaejeonImage.jpeg';
import Ulsan from '../../assets/LocalImage/UlsanImage.jpeg';
import Sejong from '../../assets/LocalImage/SejongImage.jpeg';
import Gyeonggi from '../../assets/LocalImage/GyeonggiImage.jpeg';
import Chungbuk from '../../assets/LocalImage/ChungbukImage.jpeg';
import Chungnam from '../../assets/LocalImage/ChungnamImage.jpeg';
import Jeonbuk from '../../assets/LocalImage/JeonbukImage.jpeg';
import Jeonnam from '../../assets/LocalImage/JeonnamImage.jpeg';
import Gyeongbuk from '../../assets/LocalImage/GyeongbukImage.jpeg';
import Gyeongnam from '../../assets/LocalImage/GyeongnamImage.jpeg';
import Jeju from '../../assets/LocalImage/JejuImage.jpeg';
import Gwangwon from '../../assets/LocalImage/GwangwonImage.jpeg';
import { MainContentsWrapper } from 'components/Main/MainContents.style';

const regions = {
  서울: Seoul,
  부산: Busan,
  대구: Deagu,
  인천: Incheon,
  광주: Gwangju,
  대전: Deajeon,
  울산: Ulsan,
  세종: Sejong,
  경기: Gyeonggi,
  충북: Chungbuk,
  충남: Chungnam,
  전북: Jeonbuk,
  전남: Jeonnam,
  경북: Gyeongbuk,
  경남: Gyeongnam,
  제주: Jeju,
  강원: Gwangwon
};

// import { colors } from 'styles/GlobalColors';

export const HeaderImage = styled.div`
  background-image: url(${(props) => regions[props.city]});
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
  font-size: 82px;
  text-align: center;
`;

export const ContentsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }
`;

export const ContentsBox = styled.div`
  background-color: red;
  width: 50%;
  padding: 20px;
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  div {
    background-color: #fff;
    width: 400px;
    height: 250px;
  }
`;
