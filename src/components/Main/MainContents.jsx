import React from 'react';
import * as St from './MainContents.style';
import { useNavigate } from 'react-router-dom';

function MainContents() {
  const navigate = useNavigate();

  // 선택된 옵션을 변경하는 함수
  const handleOptionChange = (selectedOption) => {
    // 여기서 navigate 등을 통해 필요한 동작 수행
    console.log('Selected Option:', selectedOption);
  };

  return (
    <St.MainContentsWrapper>
      <St.ContentsWrapper>
        <h2>지역별 국내 산책로</h2>
        <span>옆으로 넘겨 더 다양한 지역을 만나보세요!</span>
        <St.ImageWrapper>
          <St.SeoulImage
            onClick={() => {
              navigate('/mapList/서울');
            }}
          >
            <St.LocalWord>서울</St.LocalWord>
          </St.SeoulImage>
          <St.BusanImage
            onClick={() => {
              navigate('/mapList/부산');
            }}
          >
            <St.LocalWord>부산</St.LocalWord>
          </St.BusanImage>
          <St.DeaguImage
            onClick={() => {
              navigate('/mapList/대구');
            }}
          >
            <St.LocalWord>대구</St.LocalWord>
          </St.DeaguImage>
          <St.IncheonImage
            onClick={() => {
              navigate('/mapList/인천');
            }}
          >
            <St.LocalWord>인천</St.LocalWord>
          </St.IncheonImage>
          <St.GwangjuImage
            onClick={() => {
              navigate('/mapList/광주');
            }}
          >
            <St.LocalWord>광주</St.LocalWord>
          </St.GwangjuImage>
          <St.DeajeonImage
            onClick={() => {
              navigate('/mapList/대전');
            }}
          >
            <St.LocalWord>대전</St.LocalWord>
          </St.DeajeonImage>
          <St.UlsanImage
            onClick={() => {
              navigate('/mapList/울산');
            }}
          >
            <St.LocalWord>울산</St.LocalWord>
          </St.UlsanImage>
          <St.SejongImage
            onClick={() => {
              navigate('/mapList/세종');
            }}
          >
            <St.LocalWord>세종</St.LocalWord>
          </St.SejongImage>
          <St.GyeonggiImage
            onClick={() => {
              navigate('/mapList/경기');
            }}
          >
            <St.LocalWord>경기</St.LocalWord>
          </St.GyeonggiImage>
          <St.ChungbukImage
            onClick={() => {
              navigate('/mapList/충북');
            }}
          >
            <St.LocalWord>충북</St.LocalWord>
          </St.ChungbukImage>
          <St.ChungnamImage
            onClick={() => {
              navigate('/mapList/충남');
            }}
          >
            <St.LocalWord>충남</St.LocalWord>
          </St.ChungnamImage>
          <St.JeonbukImage
            onClick={() => {
              navigate('/mapList/전북');
            }}
          >
            <St.LocalWord>전북</St.LocalWord>
          </St.JeonbukImage>
          <St.JeonnamImage
            onClick={() => {
              navigate('/mapList/전남');
            }}
          >
            <St.LocalWord>전남</St.LocalWord>
          </St.JeonnamImage>
          <St.GyeongbukImage
            onClick={() => {
              navigate('/mapList/경북');
            }}
          >
            <St.LocalWord>경북</St.LocalWord>
          </St.GyeongbukImage>
          <St.GyeongnamImage
            onClick={() => {
              navigate('/mapList/경남');
            }}
          >
            <St.LocalWord>경남</St.LocalWord>
          </St.GyeongnamImage>
          <St.JejuImage
            onClick={() => {
              navigate('/mapList/제주');
            }}
          >
            <St.LocalWord>제주</St.LocalWord>
          </St.JejuImage>
          <St.GwangwonImage
            onClick={() => {
              navigate('/mapList/강원');
            }}
          >
            <St.LocalWord>강원</St.LocalWord>
          </St.GwangwonImage>
        </St.ImageWrapper>
      </St.ContentsWrapper>
    </St.MainContentsWrapper>
  );
}

export default MainContents;
