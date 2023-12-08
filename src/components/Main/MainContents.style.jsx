import styled from 'styled-components';
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
import { colors } from 'styles/GlobalColors';

export const MainContentsWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const ContentsWrapper = styled.div`
  width: 1050px;
  font-size: 32px;
  font-weight: 700;
  margin-top: 50px;
  span {
    font-size: 16px;
    color: #7b7b7b;
    font-weight: 500;
  }
`;

export const ImageWrapper = styled.section`
  padding: 35px;
  margin: 10px;
  display: flex;
  gap: 30px;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: scroll;
  height: 350px;
  display: flex;
  align-items: center;
`;

export const LocalWord = styled.div`
  color: #fff;
  width: 220px;
  height: 275px;
  border-radius: 20px;
  opacity: 0;
  background-color: ${colors.mainColor};
  transition: opacity 0.5s ease; /* opacity에 대한 트랜지션 효과 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'yg-jalnan';
`;

export const SeoulImage = styled.div`
  background-image: url(${Seoul});
  background-color: ${colors.mainColor};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const BusanImage = styled.div`
  background-image: url(${Busan});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const DeaguImage = styled.div`
  background-image: url(${Deagu});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const IncheonImage = styled.div`
  background-image: url(${Incheon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const GwangjuImage = styled.div`
  background-image: url(${Gwangju});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const DeajeonImage = styled.div`
  background-image: url(${Deajeon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const UlsanImage = styled.div`
  background-image: url(${Ulsan});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const SejongImage = styled.div`
  background-image: url(${Sejong});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const GyeonggiImage = styled.div`
  background-image: url(${Gyeonggi});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const ChungbukImage = styled.div`
  background-image: url(${Chungbuk});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const ChungnamImage = styled.div`
  background-image: url(${Chungnam});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const JeonbukImage = styled.div`
  background-image: url(${Jeonbuk});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const JeonnamImage = styled.div`
  background-image: url(${Jeonnam});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const GyeongbukImage = styled.div`
  background-image: url(${Gyeongbuk});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const GyeongnamImage = styled.div`
  background-image: url(${Gyeongnam});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const JejuImage = styled.div`
  background-image: url(${Jeju});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

export const GwangwonImage = styled.div`
  background-image: url(${Gwangwon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 220px;
  height: 275px;
  flex-shrink: 0;
  border-radius: 20px;
  overflow: hidden; /* 자식 요소가 부모를 벗어나는 것을 방지 */
  transition: all 0.5s ease;
  &:hover ${LocalWord} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.04);
  }
`;
