// 페이지 진입 시 fade-in 효과 적용
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  if (container) {
    container.classList.add('fade-in');
  }
});
// 로고 클릭 → 메인 페이지 이동
function goHome() {
  window.location.href = "/pages/Main.html";
}

// Depth 페이지 이동
function goDepth() {
  window.location.href = "/pages/Depth.html";
}

// Compare 페이지 이동
function goCompare() {
  window.location.href = "/pages/Compare.html";
}

