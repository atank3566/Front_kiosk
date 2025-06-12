let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// 슬라이드 변경 함수
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}

// dot 클릭 시 호출될 함수
function currentSlide(index) {
  showSlide(index);
}

// 메인 페이지 이동
function goHome() {
  window.location.href = "/pages/Main.html";
}

// CarInfo 페이지 이동
function goCarInfo() {
  window.location.href = "/pages/CarInfo.html";
}

// 각 GO 버튼 개별 이동 경로 지정
window.addEventListener("DOMContentLoaded", () => {
  const goButtons = document.querySelectorAll('.card button');

  goButtons[0].addEventListener("click", () => {
    window.location.href = "/pages/CarInfo/i7.html";
  });

  goButtons[1].addEventListener("click", () => {
    window.location.href = "/pages/CarInfo/iX.html";
  });

  goButtons[2].addEventListener("click", () => {
    window.location.href = "/pages/CarInfo/i5.html";
  });

  goButtons[3].addEventListener("click", () => {
    window.location.href = "/pages/CarInfo/i4.html";
  });
});