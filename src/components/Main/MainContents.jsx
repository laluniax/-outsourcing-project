import React from 'react';
import * as St from './MainContents.style';
import { useNavigate } from 'react-router-dom';

function MainContents() {
  const navigate = useNavigate();
  return (
    <St.MainContentsWrapper>
      <St.ContentsWrapper>
        <h2>지역별 국내 산책로</h2>
        <span>옆으로 넘겨 더 다양한 지역을 만나보세요!</span>
        <St.ImageWrapper>
          <St.SeoulImage
            onClick={() => {
              navigate('/select/서울');
            }}
          >
            <St.LocalWord>서울</St.LocalWord>
          </St.SeoulImage>
          <St.BusanImage
            onClick={() => {
              navigate('/select/부산');
            }}
          >
            <St.LocalWord>부산</St.LocalWord>
          </St.BusanImage>
          <St.DeaguImage
            onClick={() => {
              navigate('/select/대구');
            }}
          >
            <St.LocalWord>대구</St.LocalWord>
          </St.DeaguImage>
          <St.IncheonImage
            onClick={() => {
              navigate('/select/인천');
            }}
          >
            <St.LocalWord>인천</St.LocalWord>
          </St.IncheonImage>
          <St.GwangjuImage
            onClick={() => {
              navigate('/select/광주');
            }}
          >
            <St.LocalWord>광주</St.LocalWord>
          </St.GwangjuImage>
          <St.DeajeonImage
            onClick={() => {
              navigate('/select/대전');
            }}
          >
            <St.LocalWord>대전</St.LocalWord>
          </St.DeajeonImage>
          <St.UlsanImage
            onClick={() => {
              navigate('/select/울산');
            }}
          >
            <St.LocalWord>울산</St.LocalWord>
          </St.UlsanImage>
          <St.SejongImage
            onClick={() => {
              navigate('/select/세종');
            }}
          >
            <St.LocalWord>세종</St.LocalWord>
          </St.SejongImage>
          <St.GyeonggiImage
            onClick={() => {
              navigate('/select/경기');
            }}
          >
            <St.LocalWord>경기</St.LocalWord>
          </St.GyeonggiImage>
          <St.ChungbukImage
            onClick={() => {
              navigate('/select/충북');
            }}
          >
            <St.LocalWord>충북</St.LocalWord>
          </St.ChungbukImage>
          <St.ChungnamImage
            onClick={() => {
              navigate('/select/충남');
            }}
          >
            <St.LocalWord>충남</St.LocalWord>
          </St.ChungnamImage>
          <St.JeonbukImage
            onClick={() => {
              navigate('/select/전북');
            }}
          >
            <St.LocalWord>전북</St.LocalWord>
          </St.JeonbukImage>
          <St.JeonnamImage
            onClick={() => {
              navigate('/select/전남');
            }}
          >
            <St.LocalWord>전남</St.LocalWord>
          </St.JeonnamImage>
          <St.GyeongbukImage
            onClick={() => {
              navigate('/select/경북');
            }}
          >
            <St.LocalWord>경북</St.LocalWord>
          </St.GyeongbukImage>
          <St.GyeongnamImage
            onClick={() => {
              navigate('/select/경남');
            }}
          >
            <St.LocalWord>경남</St.LocalWord>
          </St.GyeongnamImage>
          <St.JejuImage
            onClick={() => {
              navigate('/select/제주');
            }}
          >
            <St.LocalWord>제주</St.LocalWord>
          </St.JejuImage>
          <St.GwangwonImage
            onClick={() => {
              navigate('/select/강원');
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
