$(function() {
  /* Navigation & Footer */ 
    $('.main_gnb').load('/include/navigation.html');
    $('.footer').load('/include/footer.html');
  })

$(".member_btn").click(function() {
  Swal.fire({
    title: "웹 상에서는<br/> 대여권 구매만 가능합니다!",
    text: "대여권 사용은 앱을 이용해주세요😳",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#001665",
    cancelButtonColor: "#d33",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
  }).then((result) => {
    if(result.isConfirmed) {
      location.href = "/html/2-1.member_buy.html";
    }
  })
})
$(".non_member_btn").click(function() {
  Swal.fire({
    title: "웹 상에서는<br/> 대여권 구매만 가능합니다!",
    text: "대여권 사용은 앱을 이용해주세요😳",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#001665",
    cancelButtonColor: "#d33",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    // reverseButtons: true // 버튼 순서 거꾸로
  }).then((result) => {
    if(result.isConfirmed) {
      location.href = "/html/2-2.non-member_info.html";
    }
  })
})
$(".num_request").click(function() {
  Swal.fire({
    title: "인증번호를 전송해드렸습니다!",
    text: "인증번호 4자리를 3분 이내로 입력해주세요😄",
    icon: "info",
    showCancelButton: false,
    confirmButtonColor: "#001665",
    cancelButtonColor: "#d33",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    // reverseButtons: true // 버튼 순서 거꾸로
  })
})
$(".admit_send").click(function() {
  Swal.fire({
    title: "인증번호를 전송해드렸습니다!",
    text: "인증번호 4자리를 3분 이내로 입력해주세요😄",
    icon: "info",
    showCancelButton: false,
    confirmButtonColor: "#001665",
    cancelButtonColor: "#d33",
    confirmButtonText: "확인",
    cancelButtonText: "취소",
    // reverseButtons: true // 버튼 순서 거꾸로
  })
})
$(".admit_finish").click(function() {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: '인증이 완료되었습니다✔',
  });
})
$(".btn_joinin").click(function() {
  Swal.fire({
    icon: 'success',
    title: '회원가입이 완료되었습니다!',
    text: '우산있어?와 함께 해주셔서 감사합니다😄',
  });
})

