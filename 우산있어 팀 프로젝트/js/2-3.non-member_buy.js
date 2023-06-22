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

/* 모달 검은 배경 */
const blackBg = document.querySelector(".blackBg");

/* 1회권 */
ticketOne.addEventListener("click", () => {
  toggleSubmitButton();
  paymentModal.classList.add("active");
  ticketOneValue()
  blackBg.classList.add("active");
})

/* 결제수단 & 이용약관 체크 유무  */
const agreeAll = document.querySelector(".buy_modal_agreeAll input");
const agrees = document.querySelectorAll(".agree_left input");

const agreements = {
  first_agree: false,
  second_agree: false,
  third_agree: false,
  fourth_agree: false,
}

agrees.forEach((item) => item.addEventListener('input', toggleCheckbox));

function toggleCheckbox(e) {
  const { checked, id } = e.target;  
  agreements[id] = checked;
  this.parentNode.classList.toggle('active');
  checkAllStatus();
  toggleSubmitButton();
}

function checkAllStatus() {
  const { first_agree, second_agree, third_agree, fourth_agree } = agreements;
  if (first_agree && second_agree && third_agree && fourth_agree) {
    agreeAll.checked = true;
  } else {
    agreeAll.checked = false;
  }
}

function toggleSubmitButton() {
  const { first_agree, second_agree } = agreements;
  if(first_agree && second_agree) {
    buyBtn.disabled = false;
    buyBtn.style.opacity = 1;
    mobileNextBtn.disabled = false;
    mobileNextBtn.style.opacity = 1;
  } else {
    buyBtn.disabled = true;
    buyBtn.style.opacity = 0.2;
    mobileNextBtn.disabled = true;
    mobileNextBtn.style.opacity = 0.5;
  }
}

agreeAll.addEventListener('click', (e) => {
  const { checked } = e.target;
  if (checked) {
    agrees.forEach((item) => {
      item.checked = true;
      agreements[item.id] = true;
    });
  } else {
    agrees.forEach((item) => {
      item.checked = false;
      agreements[item.id] = false;
    });
  }
  toggleSubmitButton();
});



/* 모달 취소 */
cancelBtn.addEventListener("click", () => {
  paymentModal.classList.remove("active");
  blackBg.classList.remove("active");
  mobileNextBtn.style.opacity = 1;
})
/* 모달 결제하기 */
buyBtn.addEventListener("click", () => {
  location.href = "/html/4.buy_complete.html";
  blackBg.classList.remove("active");
})


/* 모바일 하단 메뉴 */
const mobileType = document.querySelector(".mobile_type");
const mobilePrice = document.querySelector(".mobile_price");
const mobileNextBtn = document.querySelector(".mobile_bottom_next");

/* 다음 버튼 */
mobileNextBtn.addEventListener("click", () => {
  if(!paymentModal.classList.contains("active")) {
    paymentModal.classList.add("active");
    ticketOneValue()
    mobileNextBtn.disabled = true;
    mobileNextBtn.style.opacity = 0.5;
    cancelBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
  } else {
    location.href = "/html/4.buy_complete.html";
  }
})
/* 취소 버튼 */
cancelBtn.addEventListener("click", () => {
  if(window.innerWidth < 767) {
    mobileNextBtn.disabled = false;
  }
})



/* 1회권 함수 */

function ticketOneValue() {
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
}