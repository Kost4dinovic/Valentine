const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const img = document.getElementById("cuteImage");

let yesScale = 1;
let imgIndex = 1;
const totalImages = 3;

function moveNo() {
  const area = document.querySelector(".buttons");
  const maxX = area.clientWidth - noBtn.offsetWidth;
  const maxY = area.clientHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  imgIndex = (imgIndex % totalImages) + 1;
  img.src = `images/cute${imgIndex}.png`;

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// PC
noBtn.addEventListener("mouseover", moveNo);

// Mobile
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = "<h1>YAAAY 💖 I knew it!</h1>";
});
