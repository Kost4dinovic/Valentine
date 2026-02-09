const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const imageArea = document.getElementById("image-area");

let yesScale = 1;
let currentImage = 1;
const TOTAL_IMAGES = 11;

function escapeNo() {
  moveNoButton();
  spawnImage();
  growYes();
}

function moveNoButton() {
  const area = document.querySelector(".no-area");
  const maxX = area.clientWidth - noBtn.offsetWidth;
  const maxY = area.clientHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

function spawnImage() {
  // ako smo došli do kraja → KRENI OPET
  if (currentImage > TOTAL_IMAGES) {
    currentImage = 1;
  }

  const img = document.createElement("img");
  img.src = `images/cute${currentImage}.png`;
  img.classList.add("cute-img");

  const maxX = window.innerWidth - 150;
  const maxY = window.innerHeight - 150;

  img.style.left = Math.random() * maxX + "px";
  img.style.top = Math.random() * maxY + "px";

  imageArea.appendChild(img);
  currentImage++;
}

function growYes() {
  yesScale += 0.08;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseover", escapeNo);
noBtn.addEventListener("touchstart", escapeNo);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>YAAAY 💖</h1>
    <p>You are officially my Valentine 😘</p>
  `;
});
