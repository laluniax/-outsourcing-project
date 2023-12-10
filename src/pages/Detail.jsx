import React, { useEffect, useState, useRef } from 'react';
import { MapMarker, Map, Roadview, button, MapTypeId, Marker } from 'react-kakao-maps-sdk';
import { LiaStreetViewSolid } from 'react-icons/lia';
import * as S from './Detail.styled';
import shortId from 'shortid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addComments, getComments } from '../axios/commentAPI';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';

const { kakao } = window;
const Detail = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addComments,
    onSuccess: () => {
      console.log('성공했습니다');
      queryClient.invalidateQueries('comments');
    }
  });

  //댓글 등록 버튼
  const commentHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const newComment = {
      id,
      pw,
      comment,
      date:
        date.getFullYear() +
        `년 ` +
        date.getMonth() +
        `월 ` +
        date.getDate() +
        `일  ` +
        date.getHours() +
        `시 ` +
        date.getMinutes() +
        `분`
    };
    mutation.mutate(newComment);
    setId('');
    setPw('');
    setComment('');
    alert('댓글이 등록되었습니다');
  };

  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  const [comment, setComment] = useState(null);

  // -------------카카오 지도 ---------------
  const [isActive, setisActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef();
  const roadviewRef = useRef();

  const [center, setCenter] = useState({
    lat: 33.450422139819736,
    lng: 126.5709139924533
  });
  const myPosition = {
    lat: 33.450422139819736,
    lng: 126.5709139924533
  };
  useEffect(() => {
    const map = mapRef.current;
    const roadview = roadviewRef.current;
    if (roadview && map) {
      roadview.relayout();
      map.relayout();
      map.setCenter(new kakao.maps.LatLng(center.lat, center.lng));
    }
  }, [isVisible, center, isActive]);

  const Toggle = () => {
    setIsVisible(!isVisible);
    setisActive(!isActive);
  };
  // -------------카카오 지도 ---------------

  //  ----------------리뷰 목록 뿌려주기 ---------------

  const [detailInfo, setDetailInfo] = useState(null);

  useEffect(() => {
    try {
      const crawlingData = async () => {
        // http://localhost:5000/mapDetail/11841600
        // const str = '서울중구';
        const response = await axios.get(`http://localhost:5000/mapDetail/11841600`);
        setDetailInfo(response.data.result);
      };
      crawlingData();
    } catch (error) {
      console.log('데이터 불러올때 에러메세지 띄워주세요.', error);
    }
  }, []);

  //navigate를 통해 넘어온 state 값들 넣기
  const params = useParams();
  //  ----------------리뷰 목록 뿌려주기 ---------------

  // ----------- 탭 버튼 -------------
  useEffect(() => {
    const defaultOpenTab = document.getElementById('defaultOpen');
    if (defaultOpenTab) {
      defaultOpenTab.click();
    }
  }, []);

  const openPage = (pageName, color) => {
    const tabContents = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }

    const tabLinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.backgroundColor = '';
    }

    const selectedTab = document.getElementById(pageName);
    if (selectedTab) {
      selectedTab.style.display = 'block';
      selectedTab.style.backgroundColor = color;
    }
  };
  // ----------- 탭 버튼 -------------

  //  ------------이미지 모달 -----------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };

  //  ------------이미지 모달 -----------------

  //  -----------------이미지 슬라이더 모달 ----------------
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  // const images = [detailInfo?.bannerImg.replaceAll('url("', '').replaceAll('")', '')];
  const source = detailInfo?.bannerImg.replaceAll('url("', '').replaceAll('")', '');
  const images = [];
  detailInfo?.photoList.forEach((item) => {
    images.push(item.photoImg.replaceAll('url("', '').replaceAll('")', ''));
  });

  //  -----------------이미지 슬라이더 모달 ----------------

  // ------------------댓글 등록 ---------------------

  const { isLoading, isError, data } = useQuery({
    queryKey: 'comments',
    queryFn: getComments
  });

  const CommentList = data;
  if (isLoading) {
    return <h1>로딩중입니다</h1>;
  }
  console.log('디테일인포', detailInfo);
  // ------------------댓글 등록 ---------------------
  return (
    <>
      {detailInfo ? (
        <div>
          {/* ----------별점 & 리뷰수 ------------ */}
          <S.REVIEW_COMMENT>
            <S.RATING_COUNT_DIV>
              <S.SUB_TEXT>별점</S.SUB_TEXT>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  style={{ width: '100px', height: '100px' }}
                  src="data:image/png;base64,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"
                  alt="Your Alt Text"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontWeight: 'bold'
                  }}
                >
                  {detailInfo?.starPoint}
                </span>
              </div>
            </S.RATING_COUNT_DIV>
            <S.MAIN_IMAGE_DIV>
              <S.MAIN_TEXT>{detailInfo?.title}</S.MAIN_TEXT>
              <S.MAIN_IMG onClick={() => openModal(source)} src={images[currentImageIndex]}></S.MAIN_IMG>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                <S.SLIDE_BUTTON onClick={prevSlide}>
                  {' '}
                  <FaChevronLeft />{' '}
                </S.SLIDE_BUTTON>
                <S.SLIDE_BUTTON onClick={nextSlide}>
                  <FaChevronRight />
                </S.SLIDE_BUTTON>
                {/* <S.MAIN_IMG src={images[currentImageIndex]}></S.MAIN_IMG> */}
              </div>
            </S.MAIN_IMAGE_DIV>

            {/* -------------이미지 슬라이더 ---------------- */}

            {/* -------------이미지 슬라이더 ---------------- */}

            {/* ------------------이미지 확대 모달창 --------------- */}
            <S.MODAL_CONTAINER open={isModalOpen} onClick={closeModal}>
              <S.MODAL_CONTENT>
                <img src={selectedImage} alt="Full Size Image" />
              </S.MODAL_CONTENT>
            </S.MODAL_CONTAINER>
            {/* ------------------이미지 확대 모달창 --------------- */}

            <S.RATING_COUNT_DIV>
              <S.SUB_TEXT>리뷰 수</S.SUB_TEXT>
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                {' '}
                {detailInfo?.reivewPoint.replaceAll('개', '+')}
              </div>
            </S.RATING_COUNT_DIV>
          </S.REVIEW_COMMENT>
          {/* ----------별점 & 리뷰수 ------------ */}
          {/* -----------------리뷰 리스트 -------------------- */}
          <S.REVIEW_DIV_BOX>
            {detailInfo?.reivewList.slice(0, 5).map((list) => {
              return (
                <S.REVIEW_DIV key={shortId.generate()}>
                  <S.REVIEW_TEXT>{list.reviewUserText}</S.REVIEW_TEXT>
                  <S.REVIEW_NAME>{list.reviewUserName}</S.REVIEW_NAME>
                  <S.REVIEW_DATE>{list.reviewUserDate}</S.REVIEW_DATE>
                </S.REVIEW_DIV>
              );
            })}
          </S.REVIEW_DIV_BOX>
          {/* -----------------리뷰 리스트 -------------------- */}
          {/* ----------------댓글 탭 ------------- */}
          <S.TAP_BUTTON_DIV>
            <S.TAP_BUTTON className="tablink" onClick={() => openPage('Comments')} id="defaultOpen">
              댓글
            </S.TAP_BUTTON>
            <S.TAP_BUTTON className="tablink" onClick={() => openPage('Map')}>
              지도
            </S.TAP_BUTTON>
          </S.TAP_BUTTON_DIV>
          {/* ------------------댓글 리스트 ------------------ */}
          <S.COMMENT_BOX id="Comments" className="tabcontent">
            <S.REVIEW_COMMENT_INPUT_BOX>
              <S.FORM onSubmit={commentHandler}>
                <S.SUB_TEXT>
                  댓글 <FaRegCommentDots />
                </S.SUB_TEXT>
                <S.TEXTAREA
                  defaultValue={`댓글을 입력해주세요`}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></S.TEXTAREA>
                <div>
                  <S.INPUT_BOX
                    type="text"
                    placeholder="아이디를 입력하세요"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                  <S.INPUT_BOX
                    type="text"
                    placeholder="비밀번호를 입력하세요"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                  />
                  <S.COMMENT_BUTTON>댓글등록</S.COMMENT_BUTTON>
                </div>
              </S.FORM>
              {CommentList.map((list) => {
                return (
                  <>
                    <S.COMMENT_LIST>
                      <div>
                        <S.COMMENT_TEXT>아이디: </S.COMMENT_TEXT>
                        <span key={shortId.generate()}>{list.id}</span>
                      </div>
                      <S.COMMENT_CONTENT>{list.comment}</S.COMMENT_CONTENT>
                      <S.COMMENT_DATE>{list.date}</S.COMMENT_DATE>
                    </S.COMMENT_LIST>
                  </>
                );
              })}
            </S.REVIEW_COMMENT_INPUT_BOX>
            {/* <div>페이지 네이션</div> */}
          </S.COMMENT_BOX>
          {/* ------------------댓글 리스트 ------------------ */}
          {/* ------------지도 탭 --------------- */}
          <div id="Map" className="tabcontent">
            <S.MAP_BOX>
              <div style={{ display: 'flex', position: 'relative', width: '1200px', height: '100%' }}>
                {/* <RoadviewWithMapButtonStyle /> */}
                <S.ROADVIEW_BUTTON onClick={Toggle}>
                  <LiaStreetViewSolid style={{ width: '10px' }} />
                  거리뷰
                </S.ROADVIEW_BUTTON>
                <Map // 로드뷰를 표시할 Container
                  center={center}
                  style={{
                    // 지도의 크기
                    width: !isVisible ? '100%' : '50%',
                    height: '500px'
                  }}
                  level={3}
                  ref={mapRef}
                >
                  <MapMarker position={myPosition}>
                    <div style={{ color: '#000', textAlign: 'center' }}> 산책로 이름</div>
                  </MapMarker>
                  {isActive && (
                    <>
                      <MapTypeId type={kakao.maps.MapTypeId.ROADVIEW} />
                      <MapMarker
                        position={center}
                        draggable={true}
                        onDragEnd={(marker) => {
                          setCenter({
                            lat: marker.getPosition().getLat(),
                            lng: marker.getPosition().getLng()
                          });
                        }}
                        image={{
                          src: 'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png',
                          size: { width: 26, height: 46 },
                          options: {
                            spriteSize: { width: 1666, height: 168 },
                            spriteOrigin: { x: 705, y: 114 },
                            offset: { x: 13, y: 46 }
                          }
                        }}
                      />
                    </>
                  )}
                </Map>
                <div
                  id="roadviewControl"
                  className={isActive ? 'active' : ''}
                  onClick={() => {
                    setIsVisible(true);
                    setisActive(!isActive);
                  }}
                >
                  <span className="img"></span>
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: isVisible ? '50%' : '0',
                    overflow: 'hidden'
                  }}
                >
                  <Roadview // 로드뷰를 표시할 Container
                    position={{ ...center, radius: 50 }}
                    style={{
                      // 지도의 크기
                      width: '100%',
                      height: '500px'
                    }}
                    onPositionChanged={(rv) => {
                      setCenter({
                        lat: rv.getPosition().getLat(),
                        lng: rv.getPosition().getLng()
                      });
                    }}
                    onPanoidChange={() => {
                      isActive && setIsVisible(true);
                    }}
                    onErrorGetNearestPanoId={() => {
                      setIsVisible(false);
                    }}
                    ref={roadviewRef}
                  >
                    <div id="close" title="로드뷰닫기" onClick={() => setIsVisible(false)}>
                      <span className="img"></span>
                    </div>
                  </Roadview>
                </div>
              </div>
            </S.MAP_BOX>
            {/* // ----------카카오 지도----------------- */}
          </div>
          {/* ------------지도 탭 --------------- */}
        </div>
      ) : (
        <div>로딩중입니다!!!!!!!!!!!!!!!</div>
      )}
    </>
  );
};

export default Detail;
