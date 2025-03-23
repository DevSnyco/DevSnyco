document.addEventListener("DOMContentLoaded", () => {
  const starryBackground = document.querySelector(".starry-background");

  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    starryBackground.appendChild(star);
  }
});

