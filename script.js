// Tạo hiệu ứng trái tim bay
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "&#10084;";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 10 + "px";
  heart.style.animationDuration = Math.random() * 5 + 6 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 11000);
}
setInterval(createHeart, 600);

// Xử lý nhạc nền
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸ Tắt nhạc";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Bật nhạc";
  }
  playing = !playing;
});

// Carousel kéo được bằng chuột
    const carousel = document.getElementById("carousel");
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
      isDown = true;
      carousel.classList.add("active");
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener("mouseleave", () => {
      isDown = false;
      carousel.classList.remove("active");
    });
    carousel.addEventListener("mouseup", () => {
      isDown = false;
      carousel.classList.remove("active");
    });
    carousel.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });
//
   function openPopup(id) {
      document.getElementById(id).classList.add('active');
    }

    function closePopup(id) {
      document.getElementById(id).classList.remove('active');
    }

    // Ẩn popup khi click ra ngoài ảnh
    function closeOutside(event, id) {
      const popupContent = document.querySelector(`#${id} .popup-content`);
      if (!popupContent.contains(event.target)) {
        closePopup(id);
      }
    }