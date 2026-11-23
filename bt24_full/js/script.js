document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const faces = document.querySelectorAll('.face');
  const statusEl = document.getElementById('statusText');
  const toggleDirBtn = document.getElementById('toggleDir');

  if (!carousel) return;

  let angle = 0;
  let paused = false;
  let dir = 1;
  const speed = 0.45;

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }

  function step() {
    if (!paused) {
      angle = (angle + speed * dir) % 360;
      carousel.style.transform = `rotateY(${angle}deg)`;
    }
    requestAnimationFrame(step);
  }

  faces.forEach((face, idx) => {
    face.addEventListener('mouseenter', () => {
      paused = true;
      setStatus(`⏸ Đèn đang dừng tại Mặt ${idx + 1} — Rê chuột ra ngoài để quay tiếp`);
    });

    face.addEventListener('mouseleave', () => {
      paused = false;
      setStatus('🔄 Đèn kéo quân đang quay vòng tròn...');
    });
  });

  if (toggleDirBtn) {
    toggleDirBtn.addEventListener('click', () => {
      dir *= -1;
    });
  }

  requestAnimationFrame(step);
});
