// 모델 리스트
const models = ["i7", "iX", "i5", "i4"];

// 현재 페이지에서 모델 인덱스 자동 추출
let currentModel = window.location.pathname.split("/").pop().replace(".html", "");
let currentIndex = models.indexOf(currentModel);

// 이전 모델 이동
function prevSlide() {
  let prevIndex = (currentIndex - 1 + models.length) % models.length;
  window.location.href = `/pages/CarInfo/${models[prevIndex]}.html`;
}

// 다음 모델 이동
function nextSlide() {
  let nextIndex = (currentIndex + 1) % models.length;
  window.location.href = `/pages/CarInfo/${models[nextIndex]}.html`;
}