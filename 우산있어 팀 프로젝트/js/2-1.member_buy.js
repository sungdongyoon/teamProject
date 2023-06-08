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
})

/* 3회권 */
ticketThree.addEventListener("click", () => {
  paymentModal.classList.add("active");
  ticketThreeValue()
})

/* 5회권 */
ticketFive.addEventListener("click", () => {
  paymentModal.classList.add("active");
  ticketFiveValue()
})

/* 이용권 타입 */
// const ticket = document.querySelectorAll(".member_ticket_buy");
// const ticketArr = [1, 3, 5];

// for(let i = 0; i < ticket.length; i++) {
//   ticket[i].addEventListener("click", () => {
//     ticketType.innerText = `${ticketArr[i]}회권`;
//   })
// }



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





/* 모바일 */

/* 모바일 티켓 버튼 */
const one = document.querySelector("#one");
const three = document.querySelector("#three");
const five = document.querySelector("#five");


one.addEventListener("click", () => {
  // paymentModal.classList.add("active");
  ticketOneValue();
})
three.addEventListener("click", () => {
  // paymentModal.classList.add("active");
  ticketThreeValue();
})
five.addEventListener("click", () => {
  // paymentModal.classList.add("active");
  ticketFiveValue();
})


/* 모바일 하단 메뉴 */


const mobileType = document.querySelector(".mobile_type");
const mobilePrice = document.querySelector(".mobile_price");
const mobileNextBtn = document.querySelector(".mobile_bottom_right");

const ticketInfo = window.localStorage.getItem('ticket');
const ticketObj = JSON.parse(ticketInfo);

mobileType.innerHTML = `${ticketObj.type}`;



/* 해당 티켓값에 대한 함수 */
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
/* 2회권 */
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

/* 3회권 */
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