/* global daum */
import React, { useState, useEffect } from 'react';

const FoodPage = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.id = "kakaoScript"
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9bd85a1184d2cb7a3a66ae86ec1e4ef4&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(()=> {
          let container = document.getElementById('map');
          let map = new kakao.maps.Map(container, {
            center: new kakao.maps.LatLng(37.26617877777443, 127.03222081196013),
            // level : 3
          });

          // 지도를 클릭한 위치에 표출할 마커
          let marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커 생성
            position: map.getCenter() 
          });


          // 지도에 마커 표시
          marker.setMap(map);

          // 지도에 클릭 이벤트 등록
          kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            // 클릭한 위도, 경도 정보 가져옴
            let latlng1 = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮김
            marker.setPosition(latlng1);

            let message =   `클릭한 위치의 위도는 ${latlng1.getLat()}이고, 경도는 ${latlng1.getLng()}입니다`;

            let resultDiv = document.getElementById('clickLatlng');
            resultDiv.innerHTML = message;

          });
      
        /*

        // 마커

        let positions = [
            {
                title: '카카오', 
                latlng: new kakao.maps.LatLng(37.26617877777443, 127.03222081196013)
            },
            {
                title: '생태연못', 
                latlng: new kakao.maps.LatLng(37.2655457513475, 127.03238401246331)
            },
            {
                title: '이모네 중앙닭발', 
                latlng: new kakao.maps.LatLng(37.265660722388375,127.03205993924159)
            },
            {
                title: '근린공원',
                latlng: new kakao.maps.LatLng(33.451393, 126.570738)
            }
        ];

        let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

        for (let i = 0; i < positions.length; i ++) {
            
            // 마커 이미지의 이미지 크기 입니다
            let imageSize = new kakao.maps.Size(24, 35); 
            
            // 마커 이미지를 생성합니다    
            let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
            
            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
            });
        }

        */

        })
    }
  })

  return (
      <div id='map'></div>
  )
}

export default FoodPage;