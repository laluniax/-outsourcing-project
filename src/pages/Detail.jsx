import React, { useEffect, useState, useRef } from 'react';
import { MapMarker, Map, Roadview, button, MapTypeId, Marker } from 'react-kakao-maps-sdk';
import { LiaStreetViewSolid } from 'react-icons/lia';
import * as S from './Detail.styled';
const { kakao } = window;
console.log('카카오 나와라', kakao);
const Detail = () => {
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

  return (
    <>
      <div>별점</div>
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
    </>
  );
};

export default Detail;
