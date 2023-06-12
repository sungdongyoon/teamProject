/* 연락처 input */
let infoNum1 = document.querySelector("#info_num1");
let infoNum2 = document.querySelector("#info_num2");
let infoNum3 = document.querySelector("#info_num3");

infoNum1.addEventListener("input", changeFocus);
infoNum2.addEventListener("input", changeFocus);

function changeFocus() {
  if(infoNum1.value.length === 3) {
    infoNum2.focus();
    if(infoNum2.value.length === 4) {
      infoNum3.focus();
    }
  }
}

/* 인증번호 요청버튼 활성화 */
const numRequest = document.querySelector(".num_request");

const check = function() {
  let infoNum1 = document.querySelector("#info_num1").value;
  let infoNum2 = document.querySelector("#info_num2").value;
  let infoNum3 = document.querySelector("#info_num3").value;
  
  if(infoNum1 && infoNum2 && infoNum3) {
    numRequest.disabled = false;
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
let certTime = document.querySelector(".cert_time");
let certComplete = document.querySelector(".cert_complete");

numRequest.addEventListener("click", (e) => {
  e.preventDefault();
  numRequest.innerText = "다시 요청하기"

  let time = 180;
  function timer() {
    if(time >= 0) {
      certComplete.disabled = false;
      let min = Math.floor(time / 60);
      let sec = String(time%60).padStart(2, "0");
      certTime.innerText = `${min}:${sec}`;
      time = time - 1;
    } else {
      certComplete.disabled = true;
    }
  }

  setInterval(timer, 1000);
})



/* 다음 버튼 */

const nextBtn = document.querySelector(".non_member_info_btn");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/html/2-3.non-member_buy.html";
})