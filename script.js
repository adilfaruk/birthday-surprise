const yesBtn = document.getElementById("btn-yes");
const noBtn = document.getElementById("btn-no");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const music = document.getElementById("bg-music");
const heartsContainer = document.getElementById("hearts-container");

// YES CLICK
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");

  // ✅ Scroll top fix
  window.scrollTo({ top: 0, behavior: "smooth" });

  // ✅ Music play
  music.play().catch(() => {});

  // ✅ Run animations once
  startTextAnimation();
  launchConfetti();
  heartBurst();
});

// NO BUTTON MOVE (FASTER + SAFE)
function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Desktop + Mobile support
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // mobile double trigger fix
  moveNoButton();
});

// TEXT ANIMATION (RUN ONCE)
let textAnimated = false;

function startTextAnimation() {
  if (textAnimated) return; // prevent repeat
  textAnimated = true;

  const lines = document.querySelectorAll(".fade-text");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("show");
    }, index * 600);
  });
}

// HEART BURST 💖
function heartBurst() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");

    heart.style.left = "50%";
    heart.style.top = "50%";

    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;

    heart.style.setProperty("--x", `${x}px`);
    heart.style.setProperty("--y", `${y}px`);

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }
}

// CONFETTI 🎉
function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const conf = document.createElement("div");
    conf.classList.add("confetti");

    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 4000);
  }
}
