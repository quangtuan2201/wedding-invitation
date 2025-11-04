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

   const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicToggle');
    btn.addEventListener('click', () => {
      if (music.paused) {
        music.play();
        btn.style.background = '#ffb6c1';
      } else {
        music.pause();
        btn.style.background = '#fff';
      }
    });
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
    // Hộp quà
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
    // Lịch
    // NGÀY HÔN LỄ
    const weddingDate = new Date("2025-11-10T13:30:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        document.querySelector(".countdown h3").textContent = "💖 HÔN LỄ ĐÃ DIỄN RA 💖";
        document.querySelector(".time").style.display = "none";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();