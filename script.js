const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const imageArea = document.getElementById("image-area");

let yesScale = 1;
let currentImage = 1;
const TOTAL_IMAGES = 11;

// Glavna funkcija kad NO pokušaš
function escapeNo() {
  moveNo();
  spawnImage();
  growYes();
}

// NO dugme beži (samo u svojoj zoni)
function moveNo() {
  const area = document.querySelector(".no-area");
  const maxX = area.clientWidth - noBtn.offsetWidth;
  const maxY = area.clientHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

// Slike: 1 → 11 → opet 1 (i ostaju na ekranu)
function spawnImage() {
  if (currentImage > TOTAL_IMAGES) {
    currentImage = 1;
  }

  const img = document.createElement("img");
  img.src = `images/cute${currentImage}.png`;
  img.className = "cute-img";

  const maxX = window.innerWidth - 150;
  const maxY = window.innerHeight - 150;

  img.style.left = Math.random() * maxX + "px";
  img.style.top = Math.random() * maxY + "px";

  imageArea.appendChild(img);
  currentImage++;
}

// YES raste
function growYes() {
  yesScale += 0.08;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// EVENTS
noBtn.addEventListener("mouseover", escapeNo);
noBtn.addEventListener("touchstart", escapeNo);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>YAAAY 💖</h1>
    <p>You are officially my Valentine 😘</p>
  `;
});
