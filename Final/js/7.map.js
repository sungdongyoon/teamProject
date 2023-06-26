const kakaoMapMarker = obj => {
  // 지도 표시 영역
  let mapContainer = document.querySelector('.map');
  
  

  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    
    
    // 지도 옵션
    let mapOption = {
    // 지도 중심좌표
    center: new kakao.maps.LatLng(lat, lon),

    // 지도 확대 레벨
    level: 3,
    }

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성
    let map = new kakao.maps.Map(mapContainer, mapOption)

    // 위치 정보 저장
    let positions = obj.map(item => ({
      title: item.RENT_ID_NM,
      latlng: new kakao.maps.LatLng(item.STA_LAT, item.STA_LONG),
    }))


    // 이미지 마커 경로
    let imageSrc = `https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png`

    // 이미지 마커 표시
    positions.forEach(position => {
      let imageSize = new kakao.maps.Size(30, 40)

      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

      // 마커 생성
      let marker = new kakao.maps.Marker({
        map: map,
        position: position.latlng,
        title: position.title,
        image: markerImage,
      })
      kakao.maps.event.addListener(marker, "click", () => {
        document.querySelector(".umbrella_info").classList.toggle("show");
        console.log(marker)

        document.querySelector(".umbrella_info_top h2").innerText = marker.Gb;

        let randomNum = Math.floor(Math.random() * 15 + 1);
        let umb = Math.floor(Math.random() * 15 + 1);
        let sunshield = randomNum;

        document.querySelector(".umbrella_leftover").innerText = umb;
        document.querySelector(".sunshield_leftover").innerText = sunshield;

        document.querySelector(".umbrella_total span").innerText = umb + sunshield;
      })
    })

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    let mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
    let message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다
        
    // 마커와 인포윈도우를 표시합니다
    displayMarker(locPosition, message);

    function displayMarker(locPosition, message) {      
      let imageSrc = '/img/point.png', // 마커이미지의 주소입니다    
          imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기입니다
          imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              
      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
          markerPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치입니다
        
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
          position: markerPosition, 
          image: markerImage // 마커이미지 설정 
      });
        
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

          
      // let iwContent = message, // 인포윈도우에 표시할 내용
      //     iwRemoveable = true;
        
      // 인포윈도우를 생성합니다
      // let infowindow = new kakao.maps.InfoWindow({
      //     content : iwContent,
      //     removable : iwRemoveable
      // });
          
      // 인포윈도우를 마커위에 표시합니다 
      // infowindow.open(map, marker);
          
      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);      
    }

    /* 리로드 버튼 클릭 시 현위치로 */
    // 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
    let points = [
      new kakao.maps.LatLng(lat, lon),
      new kakao.maps.LatLng(lat, lon),
      new kakao.maps.LatLng(lat, lon)
    ];

    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
    let bounds = new kakao.maps.LatLngBounds();    

    let i, marker;
    for (i = 0; i < points.length; i++) {
      // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
      marker = new kakao.maps.Marker({ position : points[i] });
      // marker.setMap(map);
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(points[i]);
    }

    function setBounds() {
      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
      map.setBounds(bounds);
    }
    document.querySelector(".reload_btn").addEventListener("click", setBounds)

    let searchInput = document.querySelector("#search");
    let geocoder = new kakao.maps.services.Geocoder();

    searchInput.addEventListener("submit", function (event) {
      event.preventDefault();
    })

    geocoder.addressSearch(searchInput.value, function(result, status) {
      if(status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = coords
          .toString()
          .replace(/[()]/g, "")
          .replace(", ", ",");
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert
      }
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




/* 대여하기 */

const mapRental = document.querySelector(".map_rental");

mapRental.addEventListener("click", () => {
  location.href = "/html/5.rent.html";
})