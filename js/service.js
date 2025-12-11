// open/close details neat animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item').forEach(d => {
    d.addEventListener('toggle', (e) => {
      // simple micro-interaction: flash border
      if (d.open) {
        d.style.borderColor = 'rgba(0,255,136,0.4)';
        setTimeout(()=> d.style.borderColor = 'rgba(0,123,255,0.06)', 900);
      }
    });
  });

  // progressive image lazy load for coach art
  document.querySelectorAll('.hero-art img, .coach img').forEach(img=>{
    img.loading = 'lazy';
  });
});
