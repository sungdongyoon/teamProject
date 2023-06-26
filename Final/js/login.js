const id = document.querySelector('#login_inputBox #id')
const password = document.querySelector('#login_inputBox #pw')
const btn_login = document.querySelector(".btn_login");

btn_login.addEventListener('click', () => {
  if (id.value == 'green@naver.com') {
      if (password.value == '1234') {
        Swal.fire({
          icon: 'success',
          text: '로그인 되었습니다!',
        }).then((result) => {
          if(result.isConfirmed) {
            location.href = "/html/2-1.member_buy.html";
          }
        })
      }}
    else {
      Swal.fire({
        icon: 'warning',
        text: '아이디와 비밀번호를 다시 확인해주세요!',
      });
    }
})







