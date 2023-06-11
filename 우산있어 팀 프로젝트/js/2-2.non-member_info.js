/* 인증번호 요청 */
const numRequest = document.querySelector(".num_request");

const check = function() {
  let infoNum1 = document.querySelector("#info_num1").value;
  let infoNum2 = document.querySelector("#info_num2").value;
  let infoNum3 = document.querySelector("#info_num3").value;
  
  numRequest.addEventListener("click", (e) => {
    e.preventDefault();
    if(infoNum1) {
      console.log("hi");
    }
  })
  
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
})


/* 다음 버튼 */

const nextBtn = document.querySelector(".non_member_info_btn");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/html/2-3.non-member_buy.html";
})