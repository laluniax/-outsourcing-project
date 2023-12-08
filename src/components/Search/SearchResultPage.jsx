import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../Search/Search';
import * as St from '../Search/SearchResultPage.style';
import { PlaceContext } from 'context/PlaceContext';
import axios from 'axios';

function SearchResultPage() {
  const { places, isLoading } = useContext(PlaceContext);
  const [data, setData] = useState({
    title: '',
    total: '',
    list: []
  });

  const { keyword, selectParam } = useParams();

  // const isLoading = !places;
  useEffect(() => {
    console.log('place가 변경됐어요!!');
  }, [places]);

  console.log('keyword fo;rm url: ', keyword);

  useEffect(() => {
    console.log(selectParam, keyword, 'effect 부분');
    getList(selectParam, keyword);
  }, []);

  const getList = async (selectParam, keyword) => {
    let result = selectParam + keyword;
    if (keyword === undefined) result = selectParam;
    console.log(result, 'result');
    try {
      const response = await axios.get(`http://localhost:5001/mapList/${result}`);
      console.log('response', response.data.result);
      let { title, total, list } = response.data.result;

      setData({ ...data, title, total, list });
      console.log(data, 'data');
    } catch (err) {
      console.log(err);
    }
  };

  let contents;

  if (selectParam !== '' && keyword === undefined) {
    console.log('키워드가 비어있어요');
    contents = (
      <>
        <St.HeaderImage city={selectParam}>
          <St.HeaderTitle>{selectParam}</St.HeaderTitle>
        </St.HeaderImage>
        <Search />
        {!isLoading ? (
          <St.ContentsWrapper>
            <h2>'{selectParam}'의 주변 검색 결과입니다</h2>
            {places.map((place) => {
              return (
                <St.ContentsBox key={place.id}>
                  <div>이미지들어가는 부분</div>
                  <span>{place.title}</span>
                </St.ContentsBox>
              );
            })}
          </St.ContentsWrapper>
        ) : (
          '로딩중입니다'
        )}
        {/* <St.ContentsWrapper>
          <h2>'{selectParam}'의 주변 검색 결과입니다</h2>
          <St.ContentsBox>
            <div>이미지들어가는 부분</div>
            <span>여기는 '{selectParam}'의 관련한 내용이 들어갈 곳 입니다</span>
          </St.ContentsBox>
        </St.ContentsWrapper> */}
      </>
    );
  } else if (selectParam !== '' && keyword !== '') {
    console.log('모두 채워져 있어요');
    contents = (
      <>
        <St.HeaderImage city={selectParam}>
          <St.HeaderTitle>
            {selectParam}, {keyword}
          </St.HeaderTitle>
        </St.HeaderImage>
        <Search />

        {!isLoading ? (
          <St.ContentsWrapper>
            <h2>
              '{selectParam}'의 '{keyword}' 지역 주변 검색 결과입니다
            </h2>
            {places.map((place) => {
              return (
                <St.ContentsBox key={place.id}>
                  <div>이미지들어가는 부분</div>
                  <span>{place.title}</span>
                </St.ContentsBox>
              );
            })}
          </St.ContentsWrapper>
        ) : (
          '로딩중입니다'
        )}

        {/* <St.ContentsWrapper>
          <h2>
            '{selectParam}'의 '{keyword}' 지역 주변 검색 결과입니다
          </h2>
          <St.ContentsBox>
            <div>이미지들어가는 부분</div>
            <span>
              여기는 '{selectParam}'의 '{keyword}' 지역에 관련한 내용이 들어갈 곳 입니다
              {places[0].title}
            </span>
          </St.ContentsBox>
        </St.ContentsWrapper> */}
      </>
    );
  }

  return <>{contents}</>;
}

export default SearchResultPage;
