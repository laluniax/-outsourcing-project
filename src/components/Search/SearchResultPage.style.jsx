import { css, styled } from 'styled-components';
import { colors } from 'styles/GlobalColors';

import LoadingIcon from '../../assets/loading.gif';

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
  gap: 45px;
  h2 {
    margin-bottom: 20px;
    font-family: 'yg-jalnan';
    font-size: 36px;
    color: ${colors.mainColor};
    margin: 50px 0 50px 0;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    color: #9a9a9a;
  }
`;

export const ContentsBox = styled.div`
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.05);
  width: 600px;
  height: 200px;
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const ContentsImage = styled.div`
  background-color: #c2c2c2;
  width: 400px;
  height: 250px;
  border-radius: 10px;
`;

export const ContentsBoxInfor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddInforWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const TitleStyle = styled.span`
  color: ${colors.mainColor};
  font-size: 32px;
  font-weight: 700;
  width: 240px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'yg-jalnan';
  line-height: 80px;
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
  text-align: center;
`;

export const LoadingInforWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-family: 'yg-jalnan';
    color: ${colors.mainColor};
    font-size: 28px;
  }
`;

export const LoadingIconDiv = styled.div`
  background-image: url(${LoadingIcon});
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
`;
