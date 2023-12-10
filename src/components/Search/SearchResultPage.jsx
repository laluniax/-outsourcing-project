import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../Search/Search';
import * as St from '../Search/SearchResultPage.style';
import { PlaceContext } from 'context/PlaceContext';
import axios from 'axios';
import Pagination from 'components/pagination/Pagenation';

function SearchResultPage() {
  const { places, isLoading } = useContext(PlaceContext);
  const { setPlaces, setIsLoading } = useContext(PlaceContext);
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
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5001/mapList/${result}`);
      console.log('response', response.data.result);
      let { title, total, list } = response.data.result;

      setData({ ...data, title, total, list });
      setIsLoading(false);
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
            {/* {console.log(data.list[1].title, '이거는 뭘까여')} */}

            {data.list.map((list) => {
              return (
                <St.ContentsBox key={list.id}>
                  <St.ContentsImage>이미지들어가는 부분</St.ContentsImage>
                  <St.ContentsBoxInfor>
                    <St.TitleStyle>{list.title}</St.TitleStyle>
                    <St.AddressStyle>{list.address}</St.AddressStyle>
                  </St.ContentsBoxInfor>
                </St.ContentsBox>
              );
            })}
          </St.ContentsWrapper>
        ) : (
          <St.LoadingInforWrapper>
            <St.LoadingIconDiv />

            <span>정보를 불러오고 있습니다 잠시만 기다려주세요</span>
          </St.LoadingInforWrapper>
        )}
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
          <>
            <St.ContentsWrapper>
              <h2>
                '{selectParam}'의 '{keyword}' 지역 주변 검색 결과입니다
              </h2>
              {/* {console.log(data.list[1].title, '이거는 뭘까여')} */}

              {data.list.map((list) => {
                return (
                  <St.ContentsBox key={list.id}>
                    <St.ContentsImage>이미지들어가는 부분</St.ContentsImage>
                    <St.ContentsBoxInfor>
                      <St.TitleStyle>{list.title}</St.TitleStyle>
                      <St.AddressStyle>{list.address}</St.AddressStyle>
                    </St.ContentsBoxInfor>
                  </St.ContentsBox>
                );
              })}
            </St.ContentsWrapper>
            <Pagination data={data} />
          </>
        ) : (
          <St.LoadingInforWrapper>
            <St.LoadingIconDiv />

            <span>정보를 불러오고 있습니다 잠시만 기다려주세요</span>
          </St.LoadingInforWrapper>
        )}
      </>
    );
  }

  return <>{contents}</>;
}

export default SearchResultPage;
