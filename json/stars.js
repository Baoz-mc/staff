const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let width, height, stars = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createStar() {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2,
    speed: Math.random() * 1 + 0.5
  };
}

for (let i = 0; i < 150; i++) stars.push(createStar());

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    s.y += s.speed;
    s.x -= s.speed / 2;
    if (s.y > height || s.x < 0) Object.assign(s, createStar());
  }
  requestAnimationFrame(animate);
}
animate();
