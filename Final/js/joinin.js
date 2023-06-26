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
    document.querySelector(".admit_send").style = "background-color: #ffe610; cursor: pointer; color: black" ;
    document.querySelector(".admit_send").removeAttribute("disabled");
  }
}

/* 인증번호 요청 클릭 */
const token_timer = document.querySelector(".token_timer");
const admit_send = document.querySelector(".admit_send");
const admit_finish = document.querySelector(".admit_finish");
const infoCertNum = document.querySelector(".info_certNum");


admit_send.addEventListener("click", (e) => {
  e.preventDefault();

  let time = 5;
  function timer() {
    if(time >= 0) {
      let min = String(Math.floor(time / 60));
      let sec = String(time%60).padStart(2, "0");
      token_timer.innerText = `${min} : ${sec}`;
      time = time - 1;
      if(infoCertNum.value.length === 4) {
        certCompleteDisabledFalse();
      } else {
        certCompleteDisabledTrue();
      }
      infoCertNum.disabled = false;
    } else {
      infoCertNum.disabled = true;
      Swal.fire({
        title: "제한시간이 초과되었습니다😞",
        text: "다시 인증요청 버튼을 클릭해주세요!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#001665",
        cancelButtonColor: "#d33",
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      })
      clearInterval(interval);
    }
  }

  let interval = setInterval(timer, 1000);

  admit_send.addEventListener("click", () => {
    clearInterval(interval);
    interval;
  })
  infoCertNum.addEventListener("input", () => {
    if(infoCertNum.value.length === 4) {
      admit_finish.disabled = false;
      admit_finish.style.opacity = 1;
      admit_finish.style.backgroundColor = "#ffe610";
      admit_finish.style.color = "black";
      admit_finish.style.cursor = "pointer";
    }
  })
  function stopTimer() {
    clearInterval(interval);
  }
})




// 회원가입 동의약관 
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
      Swal.fire({
        icon: 'success',
        title: '회원가입이 완료되었습니다!',
        text: '우산있어?와 함께 해주셔서 감사합니다😄',
      }).then((result) => {
        if(result.isConfirmed) {
          location.href = "/html/login.html";
        }
      })
    }
  }








