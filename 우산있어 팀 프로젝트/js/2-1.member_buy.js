/* 결제 모달창 생성 */
const paymentModal = document.querySelector(".payment_modal");
const cancelBtn = document.querySelector(".cancel");
const buyBtn = document.querySelector(".buy");

const ticketOne = document.querySelector(".one");
const ticketThree = document.querySelector(".three");
const ticketFive = document.querySelector(".five");

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
  ticketOneValue();
  // buyBtn.disabled = true;
})

/* 3회권 */
ticketThree.addEventListener("click", () => {
  paymentModal.classList.add("active");
  ticketThreeValue();
  // buyBtn.disabled = true;
})

/* 5회권 */
ticketFive.addEventListener("click", () => {
  paymentModal.classList.add("active");
  ticketFiveValue();
  // buyBtn.disabled = true;
})


/* 결제수단 & 이용약관 체크 유무  */
const agreements = {
  first_agree: false,
  second_agree: false,
  third_agree: false,
  fourth_agree: false,
}

function toggleSubmitButton() {
  const { first_agree, second_agree } = agreements;
  if(first_agree && second_agree) {
    buyBtn.disabled = false;
  } else {
    buyBtn.disabled = true;
  }
}


/* 약관동의 */
const agreeAll = document.querySelector(".buy_modal_agreeAll");
const agrees = document.querySelectorAll(".buy_modal_agree input");
const firstAgree = document.querySelector("#first_agree");
const secondAgree = document.querySelector("#second_agree");

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





/* 모바일 */

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




/* 모바일 티켓 버튼 */
const one = document.querySelector("#one");
const three = document.querySelector("#three");
const five = document.querySelector("#five");

const firstTicket = document.querySelector(".first_ticket");
const secondTicket = document.querySelector(".second_ticket");
const thirdTicket = document.querySelector(".third_ticket");


one.addEventListener("click", () => {
  ticketOneValue();
  firstTicket.classList.remove("hide");
  secondTicket.classList.remove("show");
  thirdTicket.classList.remove("show");
})
three.addEventListener("click", () => {
  ticketThreeValue();
  firstTicket.classList.add("hide");
  secondTicket.classList.add("show");
  thirdTicket.classList.remove("show");
})
five.addEventListener("click", () => {
  ticketFiveValue();
  firstTicket.classList.add("hide");
  secondTicket.classList.remove("show");
  thirdTicket.classList.add("show");
})



/* 1, 3, 5 회권 함수 */
/* 1회권 */
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
  mobileType.innerHTML = `${ticketObj.type}`;
  mobilePrice.innerHTML = `${ticketObj.price}원`;

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
/* 3회권 */
function ticketThreeValue() {
  const third = {
    type: '3회권',
    price: '20,400'
  }

  const information = JSON.stringify(third);
  window.localStorage.setItem('ticket', information);
  const ticketInfo = window.localStorage.getItem('ticket');
  const ticketObj = JSON.parse(ticketInfo);

  ticketType.innerHTML = `${ticketObj.type}`;
  ticketPrice.innerHTML = `${ticketObj.price}원 (보증금 18,000원 + 대여료 2,400원)`;
  mobileType.innerHTML = `${ticketObj.type}`;
  mobilePrice.innerHTML = `${ticketObj.price}원`;

  card.addEventListener("click", () => {
    third.method = '카드';
    const information = JSON.stringify(third);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  naver.addEventListener("click", () => {
    third.method = '네이버페이';
    const information = JSON.stringify(third);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  kakao.addEventListener("click", () => {
    third.method = '카카오페이';
    const information = JSON.stringify(third);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  zero.addEventListener("click", () => {
    third.method = '제로페이';
    const information = JSON.stringify(third);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
}

/* 5회권 */
function ticketFiveValue() {
  const fifth = {
    type: '5회권',
    price: '28,500'
  }

  const information = JSON.stringify(fifth);
  window.localStorage.setItem('ticket', information);
  const ticketInfo = window.localStorage.getItem('ticket');
  const ticketObj = JSON.parse(ticketInfo);

  ticketType.innerHTML = `${ticketObj.type}`;
  ticketPrice.innerHTML = `${ticketObj.price}원 (보증금 25,000원 + 대여료 3,500원)`;
  mobileType.innerHTML = `${ticketObj.type}`;
  mobilePrice.innerHTML = `${ticketObj.price}원`;
  

  card.addEventListener("click", () => {
    fifth.method = '카드';
    const information = JSON.stringify(fifth);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  naver.addEventListener("click", () => {
    fifth.method = '네이버페이';
    const information = JSON.stringify(fifth);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  kakao.addEventListener("click", () => {
    fifth.method = '카카오페이';
    const information = JSON.stringify(fifth);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
  zero.addEventListener("click", () => {
    fifth.method = '제로페이';
    const information = JSON.stringify(fifth);
    window.localStorage.setItem('ticket', information);
    const ticketInfo = window.localStorage.getItem('ticket');
    const ticketObj = JSON.parse(ticketInfo);
  })
}