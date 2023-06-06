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
    // reverseButtons: true // 버튼 순서 거꾸로
  }).then((result) => {
    if(result.isConfirmed) {
      location.href = "/html/2-1.member-buy.html";
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

/* 비회원 이용권 선택 */
document.querySelector(".one").addEventListener("click", () => {
  document.querySelector("iframe").classList.add("active");
})

