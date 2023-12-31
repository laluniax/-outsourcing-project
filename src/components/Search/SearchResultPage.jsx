import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Search from '../Search/Search';
import * as St from '../Search/SearchResultPage.style';
import { PlaceContext } from 'context/PlaceContext';
import axios from 'axios';
import Pagination from 'components/pagination/Pagenation';
import ScrollToTopBtn from './ScrollToTopBtn';

function SearchResultPage() {
  const navigate = useNavigate();
  const { places, isLoading } = useContext(PlaceContext);
  const { setPlaces, setIsLoading } = useContext(PlaceContext);
  const navigation = (number) => {
    navigate(`/detail/${number}`);
  };
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState({
    title: '',
    total: '',
    list: []
  });

  const { keyword, selectParam } = useParams();

  const start = (currentPage - 1) * 10;
  const end = currentPage * 10;
  const currentPageItems = data.list.slice(start, end);

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
          <>
            <St.ContentsWrapper>
              <h2>'{selectParam}'의 주변 검색 결과입니다</h2>
              {/* {console.log(data.list[1].title, '이거는 뭘까여')} */}
              <p>총 검색 수는 '{data.total}'개 입니다.</p>
              {currentPageItems.map((list) => {
                return (
                  <St.ContentsBox
                    key={list.id}
                    onClick={() => navigation(list.link.replaceAll('https://place.map.kakao.com/', ''))}
                  >
                    {/* <St.ContentsImage>이미지들어가는 부분</St.ContentsImage> */}
                    <St.ContentsBoxInfor>
                      <St.TitleWrapper>
                        <St.TitleStyle>{list.title}</St.TitleStyle>
                      </St.TitleWrapper>
                      <St.AddInforWrapper>
                        <St.AddressStyle>{list.subTitle}</St.AddressStyle>
                        <St.AddressStyle>{list.address}</St.AddressStyle>
                        <St.AddressStyle>별점수 : {list.scoreNum}</St.AddressStyle>
                        <St.AddressStyle>별점리뷰 : {list.scoreTxt}</St.AddressStyle>
                      </St.AddInforWrapper>
                    </St.ContentsBoxInfor>
                  </St.ContentsBox>
                );
              })}
            </St.ContentsWrapper>
            <Pagination data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        ) : (
          <St.LoadingInforWrapper>
            <St.LoadingIconDiv />
            <span>정보를 불러오고 있습니다 잠시만 기다려주세요</span>
          </St.LoadingInforWrapper>
        )}
        <ScrollToTopBtn />
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
              <p>총 검색 수는 '{data.total}'개 입니다.</p>
              {/* {console.log(data.list[1].title, '이거는 뭘까여')} */}
              {data.list.map((list) => {
                return (
                  <St.ContentsBox
                    key={list.id}
                    onClick={() => navigation(list.link.replaceAll('https://place.map.kakao.com/', ''))}
                  >
                    {/* <St.ContentsImage>이미지들어가는 부분</St.ContentsImage> */}
                    <St.ContentsBoxInfor>
                      <St.TitleWrapper>
                        <St.TitleStyle>{list.title}</St.TitleStyle>
                      </St.TitleWrapper>
                      <St.AddInforWrapper>
                        <St.AddressStyle>{list.subTitle}</St.AddressStyle>
                        <St.AddressStyle>{list.address}</St.AddressStyle>
                        <St.AddressStyle>별점수 : {list.scoreNum}</St.AddressStyle>
                        <St.AddressStyle>별점리뷰 : {list.scoreTxt}</St.AddressStyle>
                      </St.AddInforWrapper>
                    </St.ContentsBoxInfor>
                  </St.ContentsBox>
                );
              })}
            </St.ContentsWrapper>
            <Pagination data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        ) : (
          <St.LoadingInforWrapper>
            <St.LoadingIconDiv />
            <span>정보를 불러오고 있습니다 잠시만 기다려주세요</span>
          </St.LoadingInforWrapper>
        )}
        <ScrollToTopBtn />
      </>
    );
  }

  return <>{contents}</>;
}

export default SearchResultPage;
