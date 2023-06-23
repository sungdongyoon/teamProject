/* 연락처 input */
// let infoNum1 = document.querySelector("#info_num1");
// let infoNum2 = document.querySelector("#info_num2");
// let infoNum3 = document.querySelector("#info_num3");

// infoNum1.addEventListener("input", changeFocus);
// infoNum2.addEventListener("input", changeFocus);

// function changeFocus() {
//   if(infoNum1.value.length === 3) {
//     infoNum2.focus();
//     if(infoNum2.value.length === 4) {
//       infoNum3.focus();
//     }
//   }
// }

/* 한글, 숫자 */
function onlyKorean() {
  this.value = this.value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '').replace(/(\..*)\./g, '$1');
}
function onlyNumber() {
  this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}


/* 이름 */
const infoName = document.querySelector("#info_name");
infoName.addEventListener("input", onlyKorean);

/* 연락처 */
const infoNum = document.querySelector("#info_num");
infoNum.addEventListener("input", onlyNumber)



/* 인증번호 요청버튼 활성화 */
const numRequest = document.querySelector(".num_request");

const check = function() {
  let infoNum = document.querySelector("#info_num").value;
  // let infoNum2 = document.querySelector("#info_num2").value;
  // let infoNum3 = document.querySelector("#info_num3").value;
  
  if(infoNum.length === 11 && infoName.value !== "") {
    numRequestDisabledFalse();
  } else {
    numRequest.disabled = true;
  }
}

check();

/* 통신사 버튼 */
const mobileCarrier = document.querySelector(".mobile_carrier");

function select(mc, span) {
  Array.from(mc.children).forEach(v => {
    v.classList.remove("carrier_active");
  })
  if(span) {
    span.classList.add("carrier_active");
  }
}
mobileCarrier.addEventListener("click", e => {
  const selected = e.target;
  select(mobileCarrier, selected);
  check();
})

/* 인증번호 요청 클릭 */
const certTime = document.querySelector(".cert_time");
const certComplete = document.querySelector(".cert_complete");
const infoCertNum = document.querySelector("#info_certNum");

numRequest.addEventListener("click", (e) => {
  e.preventDefault();

  let time = 5;
  function timer() {
    if(time >= 0) {
      let min = String(Math.floor(time / 60)).padStart(2, "0");
      let sec = String(time%60).padStart(2, "0");
      certTime.innerText = `${min}:${sec}`;
      time = time - 1;
    } else {
      certCompleteDisabledTrue();
    }
  }
  
  infoCertNum.addEventListener("input", () => {
    if(infoCertNum.value.length === 4) {
      certCompleteDisabledFalse()
    } else {
      certCompleteDisabledTrue();
    }
  })
  setInterval(timer, 1000);
})

infoCertNum.addEventListener("input", onlyNumber);

/* 인증완료 */

certComplete.addEventListener("click", (e) => {
  e.preventDefault();
  nextBtnDisabledFalse();
})


/* 다음 버튼 */

const nextBtn = document.querySelector(".non_member_info_btn");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/html/2-3.non-member_buy.html";
})


/* 회원가입 하러 가기 */
const goJoin = document.querySelector(".non_member_right_three");

goJoin.addEventListener("click", () => {
  location.href = "";
})







/* disabled 상태 함수 */

function numRequestDisabledFalse() {
  numRequest.disabled = false;
  numRequest.style.opacity = 1;
  numRequest.style.backgroundColor = "var(--dark-blue)";
  numRequest.style.color = "var(--white)";
}

function certCompleteDisabledTrue() {
  certComplete.disabled = true;
  certComplete.style.opacity = 0.5;
  certComplete.style.backgroundColor = "var(--white)";
  certComplete.style.color = "var(--dark-blue)";
}

function certCompleteDisabledFalse() {
  certComplete.disabled = false;
  certComplete.style.opacity = 1;
  certComplete.style.backgroundColor = "var(--dark-blue)";
  certComplete.style.color = "var(--white)";
}

function nextBtnDisabledFalse() {
  nextBtn.disabled = false;
  nextBtn.style.opacity = 1;
  nextBtn.style.backgroundColor = "var(--dark-blue)";
  nextBtn.style.color = "var(--white)";
  nextBtn.style.boxShadow = "0px 5px 10px var(--gray)";
}