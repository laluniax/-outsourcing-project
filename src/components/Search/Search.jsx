import React, { useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as St from './Search.style';
import { PlaceContext } from 'context/PlaceContext';

function Search() {
  const regions = [
    { label: '', value: '지역을 선택해주세요' },
    { label: 'Seoul', value: '서울' },
    { label: 'Busan', value: '부산' },
    { label: 'Deagu', value: '대구' },
    { label: 'Incheon', value: '인천' },
    { label: 'Gwangju', value: '광주' },
    { label: 'Deajeon', value: '대전' },
    { label: 'Ulsan', value: '울산' },
    { label: 'Sejong', value: '세종' },
    { label: 'Gyeonggi', value: '경기' },
    { label: 'Chungbuk', value: '충북' },
    { label: 'Chungnam', value: '충남' },
    { label: 'Jeonbuk', value: '전북' },
    { label: 'Jeonnam', value: '전남' },
    { label: 'Gyeongbuk', value: '경북' },
    { label: 'Gyeongnam', value: '경남' },
    { label: 'Jeju', value: '제주' },
    { label: 'Gwangwon', value: '강원' }
  ];

  const { setPlaces, setIsLoading } = useContext(PlaceContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initKeyword = searchParams.get('keyword');
  const initSelectParam = searchParams.get('selectParam');

  const [keyword, setKeyword] = useState(initKeyword || '');
  const [selectParam, setSelectParam] = useState(initSelectParam || '');
  // const courses = getCourses(initKeyword);

  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const handleSelectChange = (e) => setSelectParam(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearchParams(keyword ? { keyword } : {});

    setSearchParams({
      keyword: keyword || undefined,
      selectParam: selectParam || undefined
    });

    // 새로운 URL 경로를 검색어와 함께 구성합니다.
    // const newPath = keyword ? `/mapList/${encodeURIComponent(selectParam)}/${encodeURIComponent(keyword)}` : '/';
    // const noSelect = `/`;
    // const nokeyword = selectParam ? `/mapList/${encodeURIComponent(selectParam)}` : `/`;
    const selectedKey = selectParam + keyword;

    if (keyword !== '' && selectParam !== '') {
      navigate(`/mapList/${selectParam}/${keyword}`);
    } else if (keyword === '' && selectParam !== '') {
      navigate(`/mapList/${selectedKey}`);
    } else if (selectParam === '') {
      return alert('산책로 검색을 위해 지역을 선택해주세요');
    }

    // 수정

    // 히스토리 객체를 사용하여 새로운 위치로 이동합니다.
    // navigate(newPath);

    // useEffect(() => {
    // getList(selectParam, keyword);
    // }, []);

    // const getList = async (key, word) => {
    //   const result = key + word;
    //   console.log(result);
    //   console.log(setIsLoading);
    //   try {
    //     setIsLoading(true);
    //     const response = await axios.get(`http://localhost:5001/mapList/${result}`);
    //     console.log('response', response);
    //     setPlaces(response.data.result.list);
    //     setIsLoading(false);
    //   } catch (err) {
    //     console.log(err);
    //     setIsLoading(false);
    //   }
    // };
    // getList(selectParam, keyword);

    console.log({ keyword, selectParam });
    window.location.reload();
  };

  return (
    <St.SearchWrapper onSubmit={handleSubmit}>
      <St.SearchIndex>
        <St.SelectStyle name="selectParam" value={selectParam} onChange={handleSelectChange}>
          {regions.map((region, index) => (
            <option key={index} value={region.value}>
              {region.value}
            </option>
          ))}
        </St.SelectStyle>
        <St.InputStyle
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="산책하고 싶은 지역을 검색해주세요"
        ></St.InputStyle>
        <St.ButtonStyle type="submit">검색</St.ButtonStyle>
      </St.SearchIndex>
    </St.SearchWrapper>
  );
}

export default Search;
