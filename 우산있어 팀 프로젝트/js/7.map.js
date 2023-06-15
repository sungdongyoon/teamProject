const myKey = "3d5749bbe3e18ab918a6e8aa29cfb8be";

// 서울역
// let lat = "37.5542";
// let lon = "126.9708";

// 남산타워
// let lat = "37.5512";
// let lon = "126.9883";

// const lat = position.coords.latitude;
// const lon = position.coords.longitude;






// const createMap = obj => {
//   // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
//   if (navigator.geolocation) {
//     let mapContainer = document.querySelector('.map'), // 지도를 표시할 div 
//     mapOption = { 
//         center: new kakao.maps.LatLng("37.5542", "126.9708"), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨 
//   }; 

//   let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


//     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//     navigator.geolocation.getCurrentPosition(function(position) {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;
        
//         let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//         let message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다
        
//         // 마커와 인포윈도우를 표시합니다
//         displayMarker(locPosition, message);

//         function displayMarker(locPosition, message) {      
//           var imageSrc = '/img/point.png', // 마커이미지의 주소입니다    
//             imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기입니다
//             imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              
//           // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//             var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
//             markerPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치입니다
        
//           // 마커를 생성합니다
//           var marker = new kakao.maps.Marker({
//               position: markerPosition, 
//               image: markerImage // 마커이미지 설정 
//           });
        
//           // 마커가 지도 위에 표시되도록 설정합니다
//           marker.setMap(map);  
          
//           var iwContent = message, // 인포윈도우에 표시할 내용
//               iwRemoveable = true;
        
//           // 인포윈도우를 생성합니다
//           var infowindow = new kakao.maps.InfoWindow({
//               content : iwContent,
//               removable : iwRemoveable
//           });
          
//           // 인포윈도우를 마커위에 표시합니다 
//           infowindow.open(map, marker);
          
//           // 지도 중심좌표를 접속위치로 변경합니다
//           map.setCenter(locPosition);      
//         }
//       });
//   } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
//     let locPosition = new kakao.maps.LatLng(lat, lon);   
//     let message = 'geolocation을 사용할수 없어요..';

//     displayMarker(locPosition, message);
//   }
// }
// createMap();



// const API_KEY = "4f6b724c4e6568643132346145456a57";

// const getData = async () => {
//   let res = await fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/json/tbCycleStationInfo/1/1000/`)
//   let data = await res.json()
//   console.log(data)
//   let rows = data.stationInfo.row;

//   createMap(rows);
// }
// getData()



const kakaoMapMarker = obj => {
  // 지도 표시 영역
  let mapContainer = document.querySelector('.map') 

  // 지도 옵션
  let mapOption = {
    // 지도 중심좌표
    center: new kakao.maps.LatLng(37.51037979, 126.8667984),

    // 지도 확대 레벨
    level: 3,
  }

  // 지도를 표시할 div와 지도 옵션으로 지도를 생성
  let map = new kakao.maps.Map(mapContainer, mapOption)

  // 위치 정보 저장
  let positions = obj.map(item => ({
    title: item.RENT_NM,
    latlng: new kakao.maps.LatLng(item.STA_LAT, item.STA_LONG),
  }))

  // 이미지 마커 경로
  let imageSrc = `https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png`

  // 이미지 마커 표시
  positions.forEach(position => {
    let imageSize = new kakao.maps.Size(40, 50)

    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

    // 마커 생성
    let marker = new kakao.maps.Marker({
      map: map,
      position: position.latlng,
      title: position.title,
      image: markerImage,
    })
    })
}

const API_KEY = "4f6b724c4e6568643132346145456a57";

// 따릉이 대여소 데이터 받기
const getData = async () => {
  let res = await fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/json/tbCycleStationInfo/1/1000/`)
  let data = await res.json()
  console.log(data)
  let rows = data.stationInfo.row

  kakaoMapMarker(rows) // 대여소 위치데이터를 카카오 마커를 보여주는 함수에 전달
}

getData()