import React, { useEffect, useState, useRef } from 'react';
import { MapMarker, Map, Roadview, button, MapTypeId, Marker } from 'react-kakao-maps-sdk';
import { LiaStreetViewSolid } from 'react-icons/lia';
import * as S from './Detail.styled';
import shortId from 'shortid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addComments, deleteComments, getComments, updateComments } from '../axios/commentAPI';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import * as St from '../components/Search/SearchResultPage.style';
import { MdDeleteOutline } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { MdDoneOutline } from 'react-icons/md';
import { colors } from 'styles/GlobalColors';
import ScrollToTopBtn from 'components/Search/ScrollToTopBtn';
const { kakao } = window;
const Detail = () => {
  // ------------------댓글 수정 삭제 --------------------

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(null); // Store edited comment

  const params = useParams();
  const postNum = params.number;
  //댓글 수정버튼
  const handleEditClick = (event) => {
    console.log('event가 나오려나?', event.target);
    setIsEditing(true);
  };

  //댓글 삭제버튼
  const handleDeleteClick = () => {};

  //댓글 수정 완료 버튼
  const handleSaveEdit = () => {
    mutation.mutate(updateComments());
    setIsEditing(false); //
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  // ------------------댓글 수정 삭제 --------------------
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addComments,
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
      console.log('성공했습니다');
    }
    // mutationFn: updateComments,
    // onSuccess: () => {
    //   queryClient.invalidateQueries('comments');
    //   console.log('수정 성공하였습니다.');
    // },
    // mutationFn: deleteComments,
    // onSuccess: () => {
    //   queryClient.invalidateQueries('comments');
    //   console.log('삭제가 성공하였습니다!');
    // }
  });

  //댓글 등록 버튼
  const commentHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const newComment = {
      postTitle: detailInfo?.title,
      commentNum: shortId.generate(),
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

  const Toggle = () => {
    setIsVisible(!isVisible);
    setisActive(!isActive);
  };
  // -------------카카오 지도 ---------------

  //  ---------------------검색어로 카카오 지도 가져오기---------------
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;
    //카카오를 통해 places 함수를 실행해야 하는데, kakaomaps가 undefine ?
    const fetchData = async () => {
      // console.log('남산', new kakao.maps.services.Places());

      const ps = await new kakao.maps.services.Places();
      console.log('과연 가져올까?:', ps);
      ps.keywordSearch(`${detailInfo?.title}`, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers = [];

          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x
              },
              content: data[i].place_name
            });
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      });
    };
    fetchData();
  }, [map]);
  //  ---------------------검색어로 카카오 지도 가져오기---------------

  //  ----------------리뷰 목록 뿌려주기 ---------------

  const [detailInfo, setDetailInfo] = useState(null);

  useEffect(() => {
    try {
      const crawlingData = async () => {
        const response = await axios.get(`http://localhost:5001/mapDetail/${postNum}`);
        setDetailInfo(response.data.result);
      };
      crawlingData();
    } catch (error) {
      console.log('데이터 불러올때 에러메세지 띄워주세요.', error);
    }
  }, []);

  //navigate를 통해 넘어온 state 값들 넣기

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

  const images = [];
  detailInfo?.photoList?.forEach((item) => {
    images.push(item.photoImg.replaceAll('url("', '').replaceAll('")', ''));
  });
  const source = images;

  // ------------------댓글 등록 ---------------------

  const { isLoading, isError, data } = useQuery({
    queryKey: 'comments',
    queryFn: getComments
  });

  // const CommentList = data;
  const CommentList = data?.filter((list) => list.postTitle === detailInfo?.title);
  if (isLoading) {
    return (
      <St.LoadingInforWrapper>
        <St.LoadingIconDiv />

        <span>정보를 불러오고 있습니다 잠시만 기다려주세요</span>
      </St.LoadingInforWrapper>
    );
  }
  // ------------------댓글 등록 ---------------------

  return (
    <>
      {detailInfo ? (
        <>
          <div>
            {/* ----------별점 & 리뷰수 ------------ */}
            <S.REVIEW_COMMENT>
              <S.MAIN_IMAGE_DIV>
                <S.MAIN_TEXT>{detailInfo?.title}</S.MAIN_TEXT>

                <S.ImageContainer>
                  <S.MainImageWrapper>
                    <S.MainImage onClick={() => openModal(images[0])} src={images[0]} alt="Main Image" />
                  </S.MainImageWrapper>
                  <S.SubImagesWrapper>
                    {images.slice(1, 5).map((image, index) => (
                      <S.SubImage key={index} onClick={() => openModal(image)} src={image} alt={`Sub Image ${index}`} />
                    ))}
                  </S.SubImagesWrapper>
                  {isModalOpen && (
                    <div closeModal={closeModal}>
                      <img src={selectedImage} alt="Selected Image" />
                    </div>
                  )}
                </S.ImageContainer>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}></div>
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

              <S.RATINGANDREVIEWWRAPPER>
                <S.RATING_COUNT_DIV>
                  <S.SUB_TEXT>별점</S.SUB_TEXT>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <span
                      style={{
                        fontFamily: 'yg-jalnan',
                        // position: 'absolute',
                        // top: '50%',
                        // left: '50%',
                        // transform: 'translate(-50%, -50%)',
                        // fontWeight: 'bold'
                        fontSize: '42px',
                        color: `${colors.mainColor}`
                      }}
                    >
                      {detailInfo?.starPoint}
                    </span>
                  </div>
                </S.RATING_COUNT_DIV>

                <S.RATING_COUNT_DIV>
                  <S.SUB_TEXT>리뷰 수</S.SUB_TEXT>
                  <span style={{ fontSize: '42px', fontFamily: 'yg-jalnan', color: `${colors.mainColor}` }}>
                    {' '}
                    {detailInfo?.reivewPoint.replaceAll('개', '+')}
                  </span>
                </S.RATING_COUNT_DIV>
              </S.RATINGANDREVIEWWRAPPER>
            </S.REVIEW_COMMENT>
            {/* ----------별점 & 리뷰수 ------------ */}
            {/* -----------------리뷰 리스트 -------------------- */}
            <S.REVIEW_DIV_BOX>
              {detailInfo?.reivewList
                ?.filter((list) => list.reviewUserText.trim() !== '') // 공백이 아닌 댓글 필터링
                .slice(0, 5) // 최대 5개의 댓글 제한
                .map((list) => (
                  <S.REVIEW_DIV key={shortId.generate()}>
                    <S.REVIEW_TEXT>{list.reviewUserText}</S.REVIEW_TEXT>
                    <S.REVIEW_NAME>{list.reviewUserName}</S.REVIEW_NAME>
                    <S.REVIEW_DATE>{list.reviewUserDate}</S.REVIEW_DATE>
                  </S.REVIEW_DIV>
                ))}
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
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      value={pw}
                      onChange={(e) => setPw(e.target.value)}
                    />
                    <S.COMMENT_BUTTON>댓글등록</S.COMMENT_BUTTON>
                  </div>
                </S.FORM>
                {CommentList?.map((list) => {
                  return (
                    <>
                      <S.COMMENT_LIST>
                        <div
                          key={shortId.generate()}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                          <div>
                            <S.COMMENT_TEXT>아이디: </S.COMMENT_TEXT>
                            <span key={shortId.generate()}>{list.id}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginLeft: '10px' }}>
                              {isEditing ? (
                                <>
                                  <S.SAVE_BUTTON onClick={handleSaveEdit}>
                                    <MdDoneOutline />
                                  </S.SAVE_BUTTON>
                                  <S.CANCEL_BUTTON onClick={handleCancelEdit}>
                                    <MdOutlineCancel />
                                  </S.CANCEL_BUTTON>
                                </>
                              ) : (
                                <>
                                  <S.EDIT_BUTTON onClick={() => handleEditClick()}>
                                    <FaRegEdit />
                                  </S.EDIT_BUTTON>
                                  <S.DELETE_BUTTON onClick={handleDeleteClick}>
                                    <MdDeleteOutline />
                                  </S.DELETE_BUTTON>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        {isEditing ? (
                          <textarea
                            value={editedComment}
                            onChange={(e) => setEditedComment(e.target.value)}
                            rows={4}
                            cols={50}
                          />
                        ) : (
                          <S.COMMENT_CONTENT>{list.comment}</S.COMMENT_CONTENT>
                        )}
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
                  <Map // 로드뷰를 표시할 Container
                    center={{
                      lat: 37.566826,
                      lng: 126.9786567
                    }}
                    style={{
                      width: '100%',
                      height: '350px'
                    }}
                    level={3}
                    onCreate={setMap}
                  >
                    {markers.map((marker) => (
                      <MapMarker
                        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                        position={marker.position}
                        onClick={() => setInfo(marker)}
                      >
                        {info && info.content === marker.content && (
                          <div style={{ color: '#000' }}>{marker.content}</div>
                        )}
                      </MapMarker>
                    ))}
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
                  ></div>
                </div>
              </S.MAP_BOX>
              {/* // ----------카카오 지도----------------- */}
            </div>
            {/* ------------지도 탭 --------------- */}
          </div>
          <ScrollToTopBtn />
        </>
      ) : (
        <St.LoadingInforWrapper>
          <St.LoadingIconDiv />

          <span>정보를 불러오고 있습니다 잠시만 기다려주세요</span>
        </St.LoadingInforWrapper>
      )}
    </>
  );
};

export default Detail;
