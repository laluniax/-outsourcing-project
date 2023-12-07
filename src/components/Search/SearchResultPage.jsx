import React from 'react';
import { useParams } from 'react-router-dom';
import Search from '../Search/Search';
import * as St from '../Search/SearchResultPage.style';

function SearchResultPage() {
  const { keyword, selectParam } = useParams();

  console.log('keyword form url: ', keyword);

  return (
    <>
      <St.HeaderImage city={selectParam}>
        <St.HeaderTitle>
          {selectParam}, {keyword}
        </St.HeaderTitle>
      </St.HeaderImage>
      <Search />
      <div>
        <h2>
          '{selectParam}'의 '{keyword}' 지역 주변 검색 결과입니다
        </h2>
        <div>
          여기는 '{selectParam}'의 '{keyword}' 지역에 관련한 내용이 들어갈 곳 입니다
        </div>
      </div>
    </>
  );
}

export default SearchResultPage;
