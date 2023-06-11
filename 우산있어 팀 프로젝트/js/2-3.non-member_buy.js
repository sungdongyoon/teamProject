/* 결제 모달창 생성 */
const paymentModal = document.querySelector(".payment_modal");
const cancelBtn = document.querySelector(".cancel");
const buyBtn = document.querySelector(".buy");

const ticketOne = document.querySelector(".one");

const ticketType = document.querySelector(".buy_modal_type_right");
const ticketPrice = document.querySelector(".buy_modal_price_right");



/* 결제수단 */
const card = document.querySelector(".card");
const naver = document.querySelector(".naver");
const kakao = document.querySelector(".kakao");
const zero = document.querySelector(".zero");


/* 1회권 */
ticketOne.addEventListener("click", () => {
  paymentModal.classList.add("active");
  const first = {
    type: '1회권',
    price: '8,000',
  }

  const information = JSON.stringify(first);
  window.localStorage.setItem('ticket', information);
  const ticketInfo = window.localStorage.getItem('ticket');
  const ticketObj = JSON.parse(ticketInfo);

  ticketType.innerHTML = `${ticketObj.type}`;
  ticketPrice.innerHTML = `${ticketObj.price}원 (보증금 7,000원 + 대여료 1,000원)`;

  card.addEventListener("click", () => {
    first.method = '카드';
    const information = JSON.stringify(first);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  naver.addEventListener("click", () => {
    first.method = '네이버페이';
    const information = JSON.stringify(first);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  kakao.addEventListener("click", () => {
    first.method = '카카오페이';
    const information = JSON.stringify(first);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  zero.addEventListener("click", () => {
    first.method = '제로페이';
    const information = JSON.stringify(first);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
})



/* 약관동의 */
const agreeAll = document.querySelector(".buy_modal_agreeAll");
const agrees = document.querySelectorAll(".buy_modal_agree input");

const checkAll = (target) => {
  const isChecked = target.checked;

  agrees.forEach((el) => {
    el.checked = isChecked;
  })
}

/* 모달 취소 */
cancelBtn.addEventListener("click", () => {
  paymentModal.classList.remove("active");
})
/* 모달 결제하기 */
buyBtn.addEventListener("click", () => {
  location.href = "/html/4.buy_complete.html";
})


/* 모바일 하단 메뉴 */
const mobileType = document.querySelector(".mobile_type");
const mobilePrice = document.querySelector(".mobile_price");
const mobileNextBtn = document.querySelector(".mobile_bottom_right");

/* 다음 버튼 */
mobileNextBtn.addEventListener("click", () => {
  if(!paymentModal.classList.contains("active")) {
    paymentModal.classList.add("active");
    // mobileNextBtn.disabled = true;
  } else {
    location.href = "/html/4.buy_complete.html";
  }
})