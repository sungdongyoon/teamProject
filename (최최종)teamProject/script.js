$(function() {
  /* Navigation & Footer */ 
    $('.main_gnb').load('/include/navigation.html');
    $('.footer').load('/include/footer.html');
  })
$(".member_btn_bottom").click(function() {
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
      location.href = "/html/member_buy.html";
    }
  })
})
$(".non_member_btn_bottom").click(function() {
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
      location.href = "/html/non-member_info.html";
    }
  })
})
$(".num_request").click(function() {
  Swal.fire({
    title: "인증번호를 전송해드렸습니다!",
    text: "3분 이내로 인증을 완료해주세요😄",
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
    text: "3분 이내로 인증을 완료해주세요😄",
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
