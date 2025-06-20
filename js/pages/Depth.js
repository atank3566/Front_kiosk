let autoIndex = 0;
let prevIndex = 0;
let autoTimer;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function startAutoSlide() {
  autoTimer = setInterval(() => {
    autoIndex = (autoIndex + 1) % totalSlides;
    showSlide(autoIndex);
  }, 3000);
}

function showSlide(index) {
  slides[prevIndex].classList.remove("active");
  slides[index].classList.add("active");

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  prevIndex = index;
  autoIndex = index;
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(autoIndex);
  startAutoSlide();
});

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
