$(function() {
/* Navigation & Footer */ 
  $('.main_gnb').load('/include/Main_navigation.html');
  $('.footer').load('/include/footer.html');
})

/* === Main Slider === */
let mainPics = document.querySelector(".main-article-section");
let slider = document.querySelectorAll(".slide");
let index = 0;

document.querySelector(".fa-angle-left").addEventListener("click", prev);
document.querySelector(".fa-angle-right").addEventListener("click", next);

// Next Slider //
function next() {
  slider[index].classList.remove('active');
  index = (index + 1) % slider.length;
  slider[index].classList.add('active');
}
// Prev Slider //
function prev() {
  slider[index].classList.remove('active');
  index = (index - 1 + slider.length) % slider.length;
  slider[index].classList.add('active');
}

// Slider Point //
let startPoint = 0;
let endPoint = 0;

mainPics.addEventListener("mousedown", (e)=> {
  startPoint = e.pageX;
});

mainPics.addEventListener("mouseup", (e)=> {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    prev();
  } else if (startPoint > endPoint) {
    next();
  }
});

// Mouse focus Pause // 
let loopInterval = setInterval(()=> {
  next()
}, 6500);

mainPics.addEventListener("mouseover", ()=> {
  clearInterval(loopInterval);
});

mainPics.addEventListener("mouseout", ()=> {
  loopInterval = setInterval(() => {
    next();
  }, 6500);
})

/* === Main Down Scroll === */
const DownBtn = document.querySelector(".fa-angle-down");

DownBtn.addEventListener("click", ()=> {
  window.scrollTo({top: document.querySelector(".problem").scrollHeight, behavior: "smooth"});
})

/* Problem Section Scroll Animation */ 
let observed = new IntersectionObserver((e) => {
  e.forEach((span)=> {
    if (span.isIntersecting) {
      span.target.style.transform = 'translateY(0%)';
      span.target.style.opacity = 1;
    } else {
      span.target.style.opacity = span.intersectionRatio;
    }
  });
})

const problem = document.querySelectorAll(".problem span");
observed.observe(problem[0]);
observed.observe(problem[1]);
observed.observe(problem[2]);

/* Raise Problem Section Scroll Animation */ 
let raiseObserved = new IntersectionObserver((e) => {
  e.forEach((section) => {
    if (section.isIntersecting) {
      section.target.style.transform = 'translateX(0%)';
      section.target.style.opacity = 1;
      
    } else {
      section.target.style.opacity = 0;
    }
  })
})

const raiseProblem = document.querySelector(".raiseProblem");
raiseObserved.observe(raiseProblem);

/* left & right Animation */

let rightObserved = new IntersectionObserver((e) => {
  e.forEach((rightAnime) => {
    if (rightAnime.isIntersecting) {
      rightAnime.target.style.transform = 'translateX(0%)';
    } else {
      rightAnime.target.style.transform = 'translateX(100%)';
    }
  })
})
let leftObserved = new IntersectionObserver((e) => {
  e.forEach((leftAnime) => {
    if (leftAnime.isIntersecting) {
      leftAnime.target.style.transform = 'translateX(0%)';
    } else {
      leftAnime.target.style.transform = 'translateX(-100%)';
    }
  })
})

const problemSection1 = document.querySelector(".problem_section1");
const problemSection2 = document.querySelector(".problem_section2");
rightObserved.observe(problemSection1);
leftObserved.observe(problemSection2);

let textDownObserved = new IntersectionObserver((e) => {
  e.forEach((textDown)=> {
    if (textDown.isIntersecting) {
      textDown.target.style.transform = 'translateY(0%)';
      textDown.target.style.opacity = 1;
    } else {
      textDown.target.style.transform = 'translateY(-30%)';
      textDown.target.style.opacity = 0;
    }
  });
})

/* Solutions Section Animation */
const solutions = document.querySelectorAll(".solutions > div");
textDownObserved.observe(solutions[0]);
textDownObserved.observe(solutions[1]);
textDownObserved.observe(solutions[2]);

/* ESG Section animation */
const esgText = document.querySelectorAll(".esgText span");

textDownObserved.observe(esgText[0]);
textDownObserved.observe(esgText[1]);

/* Rental FAQ Section Animation*/
const rentalFaq = document.querySelectorAll(".rental_faq > div");
rightObserved.observe(rentalFaq[0]);
leftObserved.observe(rentalFaq[1]);


/* Mobile Media Query */
const Mobile = window.matchMedia('screen and (max-width:767px)');

if (Mobile.matches === true) {
  /* === Main Slider === */
  // Slider Point //
  mainPics.removeEventListener("mousedown", (e)=> {
    startPoint = e.pageX;
  });
  mainPics.removeEventListener("mouseup", (e)=> {
    endPoint = e.pageX;
    if (startPoint < endPoint) {
      prev();
    } else if (startPoint > endPoint) {
      next();
    }
  });
  // autoplay //
  clearInterval(setInterval);

  let textDownObserved = new IntersectionObserver((e) => {
    e.forEach((textDown)=> {
      if (textDown.isIntersecting) {
        textDown.target.style.transform = 'translateY(0%)';
        textDown.target.style.opacity = 1;
      } else {
        textDown.target.style.transform = 'translateY(-30%)';
        textDown.target.style.opacity = 0;
      }
    });
  })
  
  /* ProblemSection Scroll Animation */ 

  textDownObserved.observe(problemSection1);
  textDownObserved.observe(problemSection2);

  /* left & right Animation */
  let rightObserved = new IntersectionObserver((e) => {
    e.forEach((rightAnime) => {
      if (rightAnime.isIntersecting) {
        rightAnime.target.style.transform = 'translateX(0%)';
      } else {
        rightAnime.target.style.transform = 'translateX(100%)';
      }
    })
  })

  let leftObserved = new IntersectionObserver((e) => {
    e.forEach((leftAnime) => {
      if (leftAnime.isIntersecting) {
        leftAnime.target.style.transform = 'translateX(0%)';
      } else {
        leftAnime.target.style.transform = 'translateX(-100%)';
      }
    })
  })
  /* Solutions Section Animation */
  rightObserved.observe(solutions[0]);
  leftObserved.observe(solutions[1]);
}


/* mapFrame */
// document.getElementById('mapFrame').contentWindow.document.querySelector(".container");


const kakaoMapMarker = obj => {
  // 지도 표시 영역
  let mapContainer = document.querySelector('#map');
  
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
      subtitle: item.RENT_NM,
      latlng: new kakao.maps.LatLng(item.STA_LAT, item.STA_LONG),
    }))

    // 인포윈도우 생성
    let infowindow = new kakao.maps.InfoWindow({
      map: map,
      position: position.latlng, 
      content : position.title,
    });
  
    
    // 이미지 마커 경로
    let imageSrc = "/img/marker.png";

    const umbrellaInfo = document.querySelector(".umbrella_info");

    // 이미지 마커 표시
    positions.forEach(position => {
      let imageSize = new kakao.maps.Size(30, 40)

      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      
      // 마커 생성
      let marker = new kakao.maps.Marker({
        map: map,
        position: position.latlng,
        title: position.title,
        image: markerImage,
      })
 
      kakao.maps.event.addListener(marker, "click", () => {
        umbrellaInfo.classList.toggle("show");

        document.querySelector(".umbrella_info_top h2").innerText = marker.Gb;

        let randomNum = Math.floor(Math.random() * 15 + 1);
        let umb = Math.floor(Math.random() * 15 + 1);
        let sunshield = randomNum;

        document.querySelector(".umbrella_leftover").innerText = umb;
        document.querySelector(".sunshield_leftover").innerText = sunshield;
        document.querySelector(".umbrella_total span").innerText = umb + sunshield;
      })

      // 검색
      const searchInput = document.querySelector("#search");
      // let places = new kakao.maps.services.Places();
      searchInput.addEventListener("change", () => {
        if(searchInput.value === position.subtitle) {
          umbrellaInfo.classList.add("show");
          document.querySelector(".umbrella_info_top h2").innerText = marker.Gb;

          let randomNum = Math.floor(Math.random() * 15 + 1);
          let umb = Math.floor(Math.random() * 15 + 1);
          let sunshield = randomNum;

          document.querySelector(".umbrella_leftover").innerText = umb;
          document.querySelector(".sunshield_leftover").innerText = sunshield;
          document.querySelector(".umbrella_total span").innerText = umb + sunshield;

          map.setCenter(position.latlng);
          searchInput.value = "";
        } else if(searchInput.value !== "") {
          umbrellaInfo.classList.remove("show");
        }
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


