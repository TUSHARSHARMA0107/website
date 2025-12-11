document.addEventListener('DOMContentLoaded', () => {
  // attach tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const parent = btn.closest('.tab-group');
      const target = btn.getAttribute('data-tab');
      parent.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      parent.querySelectorAll('.tab-content').forEach(tc=>{
        tc.style.display = tc.id===target ? 'block' : 'none';
      });
    });
  });

  // attach play video handlers
  document.querySelectorAll('[data-video]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const src = el.getAttribute('data-video');
      const player = document.querySelector('.video-box video');
      if(player){
        player.src = src;
        player.play();
        // smooth scroll to video
        player.scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
  });

  // small animation: highlight recommended items
  document.querySelectorAll('.recommend').forEach(r=>{
    r.addEventListener('mouseenter', ()=> r.style.boxShadow='0 18px 40px rgba(0,255,136,0.14)');
    r.addEventListener('mouseleave', ()=> r.style.boxShadow='none');
  });
});
