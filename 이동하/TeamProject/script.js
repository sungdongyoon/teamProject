$(function() {
  /* Navigation & Footer */ 
    $('.main_gnb').load('/include/navigation.html');
    // $('.footer').load('/include/footer.html');
  })




// ###### 회원가입 ######
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



// 휴대폰 번호 입력란
function changePhone1() {
  const phone1 = document.querySelector("#phone1").value;
  if(phone1.length === 3) {
    document.querySelector("#phone2").focus()
  }
}
function changePhone2() {
  const phone2 = document.querySelector("#phone2").value;
  if(phone2.length === 4) {
    document.querySelector("#phone3").focus()
  }
}
function changePhone3() {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;

  if(phone1.length === 3 &&  phone2.length === 4 && phone3.length === 4) {
    document.querySelector(".admit_send").style = "background-color: gold; cursor: pointer" ;
    document.querySelector(".admit_send").removeAttribute("disabled");
  }
}

function getToken() {
  const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
  document.querySelector("#token").innerText = token;

  document.querySelector("#admit_send").style = "background-color: #fff";
  document.querySelector("#admit_send").setAttribute("disabled", "true");
  document.querySelector("#admit_finish").style = "background-color: #0068ff; color : #fff; cursor:pointer";
  document.querySelector("#admit_finish").removeAttribute("disabled");
  getTokenTimer();
}


// 3분 인증제한시간
let interval;
function getTokenTimer() {
  let time = 180;
  interval = setInterval(()=> {
    if(time >= 0) {
      const minutes = Math.floor(time / 60);
      const seconds = String(time % 60).padStart(2, "0");
      document.querySelector(".token_timer").innerText = minutes + ":" + String(seconds).padStart(2, "0");
      time -= 1;
    } else {
      document.querySelector(".token_timer").innerText = "000000";
      document.querySelector(".admit_send").style = "";
      document.querySelector(".admit_send").setAttribute = ("disabled", "true");
      document.querySelector(".token_timer").innerText = "3:00";
      document.querySelector(".admit_finish").style = "";
      document.querySelector(".admit_finish").setAttribute("disabled", "true");

      clearInterval(interval);

      document.querySelector(".admit_finish").disabled = true
      isStarted = false;
      clearInterval(timer);
    }
  }, 1000)
}




// 회원가입 동의약관 
const form = document.querySelector("#agreement_box"); // 데이터 전송 form
const checkAll = document.querySelector("#check_all input"); // 모두 동의 체크박스
const checkBoxes = document.querySelectorAll(".agreement_detail_choice input"); // 모두 동의 제외 체크박스
const submitButton = document.querySelector(".btn_joinin"); // 가입 버튼

const agreements = {
  privacyPolicy: false,
  checkAge : false,
  allowPromotions: false
};

checkBoxes.forEach((item) => item.addEventListener("input", toggleCheckbox));

function toggleCheckbox(e) {
  const { checked, id } = e.target;
  agreements[id] = checked;
  this.parentNode.classList.toggle("active");
  checkAllStatus();
  toggleSubmitButton();
}

function checkAllStatus() {
  const { privacyPolicy, checkAge, allowPromotions } = agreements;
  if (privacyPolicy && checkAge && allowPromotions) {
    checkAll.checked = true;
  } else {
    checkAll.checked = false;
  }
}

function toggleSubmitButton() {
  const { privacyPolicy, checkAge } = agreements;
  if (privacyPolicy && checkAge) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkAll.addEventListener("click", (e) => {
  const { checked } = e.target;
  if (checked) {
    checkBoxes.forEach((item) => {
      item.checked = true;
      agreements[item.id] = true;
      item.parentNode.classList.add("active");
    });
  } else {
    checkBoxes.forEach((item) => {
      item.checked = false;
      agreements[item.id] = false;
      item.parentNode.classList.remove("active");
    });
  }
  toggleSubmitButton();
});











  function signup() {
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const passwordCheck = document.querySelector("#passwordCheck").value;
  
    let isValid = true ; //기본세팅!
    if(email.includes("@") === false) {
      document.querySelector("#error_email").innerText = "이메일이 올바르지 않습니다";
      isValid = false;
    } else {
      document.querySelector("#error_email").innerText = "";
    }
    if(name === "") {
      document.querySelector("#error_name").innerText = "이름이 올바르지 않습니다";
      isValid = false;
    } else {
      document.querySelector("#error_name").innerText = "";
    }
    if(password === "") {
      document.querySelector("#error_password").innerText = "비밀번호를 입력해 주세요";
      isValid = false;
    } else {
      document.querySelector("#error_password").innerText = "";
    }
    if(passwordCheck === "") {
      document.querySelector("#error_password").innerText = "비밀번호가 일치하지 않습니다";
      document.querySelector("#error_passwordCheck").innerText = "비밀번호가 일치하지 않습니다";
      isValid = false;
    }
    if(isValid === true) {
      alert("회원가입을 축하합니다")
    }
  }








