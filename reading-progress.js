(() => {
  'use strict';

  const progress = document.querySelector('[data-reading-progress]');
  if (!progress) return;

  let frameRequested = false;

  const update = () => {
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 1;
    progress.value = Math.round(ratio * 100);
    frameRequested = false;
  };

  const requestUpdate = () => {
    if (frameRequested) return;
    window.requestAnimationFrame(update);
    frameRequested = true;
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
