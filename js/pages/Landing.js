// 랜딩 → 메인으로 이동 (전체 어디든 클릭시)
function startKiosk() {
  window.location.href = "/pages/Main.html";
}

// DOMContentLoaded 이후 전체 body 클릭시 이동
window.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", startKiosk);
  document.body.addEventListener("touchstart", startKiosk); // 터치스크린 대응
});