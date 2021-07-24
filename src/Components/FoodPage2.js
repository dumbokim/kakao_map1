/* global daum */

import React, { useState, useEffect } from 'react';

const FoodPage2 = () => {
  const kakao = window.daum;
  
  useEffect(() => {

    const script = document.getElementById('kakaoScript');
    script.onload = () => {
      kakao.maps.load(()=> {
          let container = document.getElementById('map');
          let map = new kakao.maps.Map(container, {
            center: new kakao.maps.LatLng(37.26617877777443, 127.03222081196013),
            // level : 3
          });
        })
    }
  })

  return (
    <div>
      <div id='map'></div>
    </div>
  )
}

export default FoodPage2;