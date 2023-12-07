import React, { useEffect, useState } from 'react';
const { naver } = window;
const NaverMapAPI = () => {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 표시할 div // let markerList = []; // const HOME_PATH = window.HOME_PATH || '.';
    const position = new naver.maps.LatLng(37.3849483, 127.1229117);
    const mapOptions = {
      center: position,
      zoom: 17,
      minZoom: 6,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT
      }
    };
    const map = new naver.maps.Map(container, mapOptions);
    const markerOptions = {
      position: position.destinationPoint(90, 15),
      map: map,
      icon: {
        url: 'https://navermaps.github.io/maps.js/docs/img/example/ico_pin.jpg', //size: new naver.maps.Size(50, 52),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26)
      }
    };
    const marker = new naver.maps.Marker(markerOptions);
    console.log('loading navermap');
  }, []);
  return (
    <div>
              <div id="map" style={{ width: '100%', height: '800px' }}></div>
              
    </div>
  );
};
//link2me.tistory.com/2249 [소소한 일상 및 업무TIP 다루기:티스토리]

export default NaverMapAPI;
