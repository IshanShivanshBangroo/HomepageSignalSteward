
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

const cursorColors = {
  hero: ['rgba(109, 231, 183, 0.65)', 'rgba(109, 231, 183, 0.22)'],
  signal: ['rgba(99, 214, 255, 0.72)', 'rgba(99, 214, 255, 0.28)'],
  edit: ['rgba(255, 190, 92, 0.72)', 'rgba(255, 190, 92, 0.24)'],
  support: ['rgba(255, 138, 200, 0.72)', 'rgba(179, 136, 255, 0.22)']
};

function initCursorEffects() {
  if (prefersReducedMotion || !finePointer) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let ringX = window.innerWidth / 2;
  let ringY = window.innerHeight / 2;
  let targetX = ringX;
  let targetY = ringY;
  let rafId = null;

  const animateRing = () => {
    ringX += (targetX - ringX) * 0.18;
    ringY += (targetY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    rafId = requestAnimationFrame(animateRing);
  };

  const setRingColor = (key = 'signal') => {
    const colors = cursorColors[key] || cursorColors.signal;
    ring.style.borderColor = colors[0];
    ring.style.boxShadow = `0 0 26px ${colors[1]}`;
  };

  const updatePointer = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
    document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
    if (!rafId) rafId = requestAnimationFrame(animateRing);
  };

  const activateRing = () => ring.classList.add('cursor-active');
  const relaxRing = () => ring.classList.remove('cursor-active');

  const spawnBurst = (event) => {
    const palette = ['#63d6ff', '#ffbe5c', '#ff8ac8', '#b388ff'];
    const total = 12;
    for (let i = 0; i < total; i += 1) {
      const particle = document.createElement('span');
      particle.className = 'click-burst';
      particle.style.background = palette[i % palette.length];
      particle.style.boxShadow = `0 0 16px ${palette[i % palette.length]}`;
      const angle = (Math.PI * 2 * i) / total + Math.random() * 0.35;
      const distance = 24 + Math.random() * 48;
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;
      particle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      document.body.appendChild(particle);
      particle.animate(
        [
          { transform: `translate(${event.clientX}px, ${event.clientY}px) scale(1)`, opacity: 1 },
          { transform: `translate(${event.clientX + endX}px, ${event.clientY + endY}px) scale(0.18)`, opacity: 0 }
        ],
        { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      ).finished.finally(() => particle.remove());
    }
  };

  window.addEventListener('pointermove', updatePointer, { passive: true });
  window.addEventListener('pointerdown', (event) => {
    activateRing();
    spawnBurst(event);
  }, { passive: true });
  window.addEventListener('pointerup', relaxRing, { passive: true });

  document.querySelectorAll('[data-cursor]').forEach((node) => {
    const key = node.getAttribute('data-cursor');
    node.addEventListener('pointerenter', () => {
      activateRing();
      setRingColor(key);
    });
    node.addEventListener('pointerleave', () => {
      relaxRing();
      setRingColor('signal');
    });
  });

  setRingColor('signal');
}

function initTiltCards() {
  if (prefersReducedMotion || !finePointer) return;

  const cards = document.querySelectorAll('.interactive-tilt');
  cards.forEach((card) => {
    let frame = null;
    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 5;
      const rotateX = (0.5 - py) * 5;
      card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        card.style.setProperty('--glow-x', `${px * 100}%`);
        card.style.setProperty('--glow-y', `${py * 100}%`);
      });
    };

    const handleLeave = () => {
      card.style.transform = '';
    };

    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerleave', handleLeave);
  });
}

initCursorEffects();
initTiltCards();
