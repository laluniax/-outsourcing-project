import React from 'react';
import * as St from './MainContents.style';

function MainContents() {
  return (
    <St.MainContentsWrapper>
      <St.ContentsWrapper>
        <h2>지역별 국내 산책로</h2>
        <span>옆으로 넘겨 더 다양한 지역을 만나보세요!</span>
        <St.ImageWrapper>
          <St.SeoulImage>
            <St.LocalWord>서울</St.LocalWord>
          </St.SeoulImage>
          <St.BusanImage>
            <St.LocalWord>부산</St.LocalWord>
          </St.BusanImage>
          <St.DeaguImage>
            <St.LocalWord>대구</St.LocalWord>
          </St.DeaguImage>
          <St.IncheonImage>
            <St.LocalWord>인천</St.LocalWord>
          </St.IncheonImage>
          <St.GwangjuImage>
            <St.LocalWord>광주</St.LocalWord>
          </St.GwangjuImage>
          <St.DeajeonImage>
            <St.LocalWord>대전</St.LocalWord>
          </St.DeajeonImage>
          <St.UlsanImage>
            <St.LocalWord>울산</St.LocalWord>
          </St.UlsanImage>
          <St.SejongImage>
            <St.LocalWord>세종</St.LocalWord>
          </St.SejongImage>
          <St.GyeonggiImage>
            <St.LocalWord>경기</St.LocalWord>
          </St.GyeonggiImage>
          <St.ChungbukImage>
            <St.LocalWord>충북</St.LocalWord>
          </St.ChungbukImage>
          <St.ChungnamImage>
            <St.LocalWord>충남</St.LocalWord>
          </St.ChungnamImage>
          <St.JeonbukImage>
            <St.LocalWord>전북</St.LocalWord>
          </St.JeonbukImage>
          <St.JeonnamImage>
            <St.LocalWord>전남</St.LocalWord>
          </St.JeonnamImage>
          <St.GyeongbukImage>
            <St.LocalWord>경북</St.LocalWord>
          </St.GyeongbukImage>
          <St.GyeongnamImage>
            <St.LocalWord>경남</St.LocalWord>
          </St.GyeongnamImage>
          <St.JejuImage>
            <St.LocalWord>제주</St.LocalWord>
          </St.JejuImage>
          <St.GwangwonImage>
            <St.LocalWord>강원</St.LocalWord>
          </St.GwangwonImage>
        </St.ImageWrapper>
      </St.ContentsWrapper>
    </St.MainContentsWrapper>
  );
}

export default MainContents;
