import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as St from './Pagenation.styled';

export default function Pagination({ data ,currentPage,setCurrentPage}) {
  const [datas, setDatas] = useState([]);
  //현재 페이지, 전체 페이지 상태
  const [totalPages, setTotalPages] = useState(0);

  // 한 페이지에 보여줄 아이템 개수
  const pageItemLimit = 10;
  // 페이지 그룹당 보여줄 숫자 개수
  const pageGroupLimit = 5;

  // 비동기 처리 안해도 되니까  props로 받아온 데이터 가져오고,
  // 페이지 나눠주기 , 전체 페이지 수 계산해서 설정 , 현재 페이지 데이터 설정까지

  // 페이지네이션을 할 때 데이터를 몇개씩 가져올 수 있는지 설정해줘야 함
  // 크롤링한 list에서 파일 가져와야함

  const fetchData = async (page) => {
    try {
      // 페이지 나눠주기
      const dataList = { params: { _page: page, _limit: pageItemLimit } };

      // 전체 페이지 수를 계산하여 설정
      const totalPageCount = Math.ceil(data.length / pageItemLimit);

      setTotalPages(totalPageCount);
      // 현재 페이지의 데이터 설정
      setDatas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  useEffect(() => {
    // 전체 페이지 갯수 구하기
    if (data.list && data.list.length > 0) {
      const totalPageCount = Math.ceil(data.list.length / pageItemLimit);
      setTotalPages(totalPageCount);
    }
  }, [data]);

  // // 현재 페이지가 변경되었을 때 dataList 실행
  // useEffect(() => {
  //   fetchData(currentPage);
  // }, [currentPage]);

  //현재 페이지 함수
  // const getCurrentPageData = (page, dataList) => {
  //   const startIndex = (page - 1) * pageItemLimit;
  //   const endIndex = startIndex + pageItemLimit;
  //   return dataList.slice(startIndex, endIndex);
  // };

  //클릭 했을 때 현재 페이지로 가도록
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  // 페이지네이션 그룹을 계산하는 함수
  const calculatePageGroups = () => {
    const pageGroups = Math.ceil(totalPages / pageGroupLimit);

    // 현재 페이지 그룹 설정
    const currentGroup = Math.ceil(currentPage / pageGroupLimit);

    // 페이지 그룹의 시작과 끝 페이지 계산
    const startPage = (currentGroup - 1) * pageGroupLimit + 1;
    const endPage = Math.min(currentGroup * pageGroupLimit, totalPages);

    return { startPage, endPage, pageGroups };
  };

  const { startPage, endPage, pageGroups } = calculatePageGroups();

  // 페이지 항목 5개 구성을 위한.... 빈배열에서 for문 돌리기
  const array = [];
  for (let i = startPage; i <= endPage; i++) {
    array.push(i);
  }

  return (
    <>
      {/* 페이지네이션 UI */}
      <St.PaginationWrapper>
        <St.PaginationButton onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </St.PaginationButton>

        {/* 페이지 그룹을 매핑하여 페이지네이션 버튼 생성 */}
        {array.map((item, index) => {
          return (
            <St.PaginationButton key={index + 1} onClick={() => handlePageClick(item)} active={item === currentPage}>
              {item}
            </St.PaginationButton>
          );
        })}

        <St.PaginationButton onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </St.PaginationButton>
      </St.PaginationWrapper>
    </>
  );
}
