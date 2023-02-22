/*global kakao*/
import React, { useEffect } from 'react'

const { kakao } = window;

const KaKaoMap = () => {

    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.54818408502616, 127.19156117858701                ),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.54818408502616, 127.19156117858701); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
        
    }, [])
    return (
        <div className='map'>
        	<div id="map" style={{width:"100%", height:"400px"}}></div> 
        </div>
    )
}

export default KaKaoMap