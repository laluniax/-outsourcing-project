import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './Pagenation.styled';

export default function Pagination({ data }) {
  const [datas, setDatas] = useState([]);

  //현재 페이지, 전체 페이지 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // 한 페이지에 보여줄 아이템 개수
  const pageItemLimit = 20;
  // 페이지 그룹당 보여줄 숫자 개수
  const pageGroupLimit = 5;

  // 서버에서 데이터 가져오기

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/mapDetail/11841600`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchData = async (page) => {
  //   try {
  //     const { data, headers } = await axios.get(`${REACT_APP_SERVER_URL}` / mapDetail, {
  //       // 페이지 나눠주기
  //       params: { _page: page, _limit: pageItemLimit }
  //     });

  //     // 전체 페이지 수를 계산하여 설정                 headers에서 전체 데이터 개수를 나타내는 값 가져오기
  //     const totalPageCount = Math.ceil(headers['x-total-count'] / pageItemLimit);
  //     setTotalPages(totalPageCount);

  //     // 현재 페이지의 데이터 설정
  //     setDatas(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // 현재 페이지가 변경되었을 때 fetchData실행
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

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
      {/* 임시로 데이터 가져오기 */}
      {datas.map((item) => (
        <S.CardBox key={item.id}>
          <p>{item.id}</p>
          <p>{item.first_name}</p>
        </S.CardBox>
      ))}

      {/* 페이지네이션 UI */}
      <S.PaginationWrapper>
        <S.PaginationButton onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </S.PaginationButton>

        {/* 페이지 그룹을 매핑하여 페이지네이션 버튼 생성 */}
        {array.map((item, index) => {
          return (
            <S.PaginationButton key={index + 1} onClick={() => handlePageClick(item)} active={item === currentPage}>
              {item}
            </S.PaginationButton>
          );
        })}

        <S.PaginationButton onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </S.PaginationButton>
      </S.PaginationWrapper>
    </>
  );
}
