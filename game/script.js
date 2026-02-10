const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// player
let x = 200;
let y = 200;
let size = 20;
let speed = 5;

// keyboard input
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") y -= speed;
  if (e.key === "ArrowDown") y += speed;
  if (e.key === "ArrowLeft") x -= speed;
  if (e.key === "ArrowRight") x += speed;
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw player
  ctx.fillStyle = "lime";
  ctx.fillRect(x, y, size, size);

  requestAnimationFrame(gameLoop);
}

gameLoop();
