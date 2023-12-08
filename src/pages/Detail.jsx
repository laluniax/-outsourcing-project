import React, { useEffect, useState, useRef } from 'react';
import { MapMarker, Map, Roadview, button, MapTypeId, Marker } from 'react-kakao-maps-sdk';
import { LiaStreetViewSolid } from 'react-icons/lia';
import * as S from './Detail.styled';
import shortId from 'shortid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const { kakao } = window;
const Detail = () => {
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

  // ------------------댓글 -----------------
  const commentHandler = (event) => {
    event.preventDefault();
    alert('댓글이 등록되었습니다');
  };

  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  const [comment, setComment] = useState(null);
  // ------------------댓글 -----------------

  //  ----------------리뷰 목록 뿌려주기 ---------------
  const arr = [
    { id: shortId.generate(), review: '오 개꿀잼!!!' },
    { id: shortId.generate(), review: '정말 재미있엇아여' },
    { id: shortId.generate(), review: '다시 한번 가고 싶어요!' },
    { id: shortId.generate(), review: '좋은 추억이였습니다' },
    { id: shortId.generate(), review: '날씨가 좋아서 좋았어요' }
  ];
  useEffect(() => {
    try {
      const crawlingData = async () => {
        const str = '서울중구';
        const response = await axios.get(`http://localhost:5000/mapList/${str}`);
        console.log('response:', response);
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

  const source =
    'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRO6rQIW8WH-n69D8VNqFOpQTIZT-JLqi07chqclJt0wT2kcNGgfKFsUa9MnqFoKef5eFPd0rcL-yyMVcyyBnPZZoSgX4LDpsAaYNHR0Q';
  //  ------------이미지 모달 -----------------

  //  -----------------이미지 슬라이더 모달 ----------------
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const images = [source, 'image2.jpg', 'image3.jpg'];
  //  -----------------이미지 슬라이더 모달 ----------------

  return (
    <>
      <div>
        {/* ----------별점 & 리뷰수 ------------ */}
        <S.REVIEW_COMMENT>
          <S.RATING_COUNT_DIV>
            <S.SUB_TEXT>별점</S.SUB_TEXT>
            별점 이미지
          </S.RATING_COUNT_DIV>
          <S.MAIN_IMAGE_DIV>
            <S.MAIN_TEXT>산책로 이름받아오기</S.MAIN_TEXT>
            <S.MAIN_IMG src={images[currentImageIndex]}></S.MAIN_IMG>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
              <button onClick={prevSlide}>prev</button>
              <button onClick={nextSlide}>Next</button>
            </div>
            {/* <S.MAIN_IMG onClick={() => openModal(source)} src={source}></S.MAIN_IMG> */}
          </S.MAIN_IMAGE_DIV>

          {/* -------------이미지 슬라이더 ---------------- */}

          {/* -------------이미지 슬라이더 ---------------- */}

          {/* ------------------이미지 확대 모달창 --------------- */}
          {/* <S.MODAL_CONTAINER open={isModalOpen} onClick={closeModal}>
            <S.MODAL_CONTENT>
              <img src={selectedImage} alt="Full Size Image" />
            </S.MODAL_CONTENT>
          </S.MODAL_CONTAINER> */}
          {/* ------------------이미지 확대 모달창 --------------- */}

          <S.RATING_COUNT_DIV>
            <S.SUB_TEXT>리뷰 수</S.SUB_TEXT>
            카운트 갯수
          </S.RATING_COUNT_DIV>
        </S.REVIEW_COMMENT>
        {/* ----------별점 & 리뷰수 ------------ */}
        상세보기 링크
        {/* -----------------리뷰 리스트 -------------------- */}
        <S.REVIEW_DIV_BOX>
          {arr.map((list) => {
            return <S.REVIEW_DIV key={list.id}>{list.review}</S.REVIEW_DIV>;
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
        <S.COMMENT_BOX id="Comments" className="tabcontent" style={{ border: '1px solid black' }}>
          <S.REVIEW_COMMENT_INPUT_BOX>
            <S.SUB_TEXT>댓글 리스트 뽑기</S.SUB_TEXT>
            <div>들어올 댓글들</div>
            <form onSubmit={commentHandler}>
              <S.TEXTAREA>댓글</S.TEXTAREA>
              <div>
                <S.INPUT_BOX type="text" placeholder="아이디를 입력하세요" />
                <S.INPUT_BOX type="text" placeholder="비밀번호를 입력하세요" />
              </div>

              <button>댓글등록</button>
            </form>
          </S.REVIEW_COMMENT_INPUT_BOX>
          <div>페이지 네이션</div>
        </S.COMMENT_BOX>
        {/* ----------------댓글 탭 ------------- */}
        {/* ------------지도 탭 --------------- */}
        <div id="Map" className="tabcontent">
          <h3>지도</h3>
          // ----------카카오 지도-----------------
          <div style={{ display: 'flex', position: 'relative', width: '1200px', height: '100%' }}>
            {/* <RoadviewWithMapButtonStyle /> */}
            <S.ROADVIEW_BUTTON onClick={Toggle}>
              <LiaStreetViewSolid style={{ width: '20px' }} />
              거리뷰
            </S.ROADVIEW_BUTTON>
            <Map // 로드뷰를 표시할 Container
              center={center}
              style={{
                // 지도의 크기
                width: !isVisible ? '100%' : '50%',
                height: '300px'
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
                  height: '300px'
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
          {/* // ----------카카오 지도----------------- */}
        </div>
        {/* ------------지도 탭 --------------- */}
      </div>
    </>
  );
};

export default Detail;
