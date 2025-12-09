const heartContainer = document.querySelector(".falling-hearts");

function createFallingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-fall");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createFallingHeart, 200);