const yesBtn = document.getElementById("btn-yes");
const noBtn = document.getElementById("btn-no");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

// YES BUTTON
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  document.body.style.overflow = "auto";
});

// NO BUTTON (move randomly)
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// TEXT SCROLL ANIMATION
const faders = document.querySelectorAll(".fade-text");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});