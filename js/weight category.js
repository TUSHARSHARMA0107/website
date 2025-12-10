// weight-category.js - upgraded: YouTube embeds, checklist, booking modal, tabs, expanders
document.addEventListener('DOMContentLoaded', () => {

  const KEY_CHECKS = 'wg_checks_v1';
  const KEY_BOOKINGS = 'wg_bookings_v1';

  // Helper to get stored checks map
  function loadChecks() {
    try { return JSON.parse(localStorage.getItem(KEY_CHECKS)) || {}; }
    catch { return {}; }
  }
  function saveChecks(obj) { localStorage.setItem(KEY_CHECKS, JSON.stringify(obj)); }

  // Initialize checklist state UI
  function initChecks() {
    const checks = loadChecks();
    document.querySelectorAll('.check-item').forEach(ch => {
      const key = ch.dataset.key;
      ch.checked = !!checks[key];
      ch.addEventListener('change', () => {
        const c = loadChecks();
        c[key] = ch.checked;
        saveChecks(c);
      });
    });
  }

  // Clear today's checks (resets all checkboxes)
  document.getElementById('clearChecks')?.addEventListener('click', () => {
    if (!confirm('Clear all checklist marks?')) return;
    localStorage.removeItem(KEY_CHECKS);
    initChecks();
  });

  initChecks();

  // Expand/collapse item details
  document.querySelectorAll('.wg-expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.wg-item');
      const body = item.querySelector('.wg-item-body');
      const isOpen = body.style.display === 'block';
      body.style.display = isOpen ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Play => embed YouTube into the appropriate frame
  function createYouTubeEmbed(idOrUrl) {
    // Accept either ID or full URL. If URL, try extract ID.
    const url = String(idOrUrl || '');
    let videoId = url;
    // if full URL, attempt to extract v= or /embed/ or last path
    try {
      if (url.includes('youtube') || url.includes('youtu.be')) {
        const u = new URL(url.startsWith('http') ? url : 'https://www.youtube.com/watch?v=' + url);
        if (u.searchParams.get('v')) videoId = u.searchParams.get('v');
        else {
          // pathname like /watch or /embed/ID or /ID
          const p = u.pathname.split('/');
          videoId = p.filter(Boolean).pop();
        }
      }
    } catch (e) { /* fallthrough - treat as id */ }

    return https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0;
  }

  function setFrame(frameId, videoId, title = '', desc = '') {
    const frame = document.getElementById(frameId);
    if (!frame) return;
    // clear
    frame.innerHTML = '';
    // create iframe
    const iframe = document.createElement('iframe');
    iframe.src = createYouTubeEmbed(videoId);
    iframe.title = title || 'Video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);

    // set info text below if exists
    const tEl = frame.parentElement.querySelector('.video-info h4, .video-info #videoTitle');
    const dEl = frame.parentElement.querySelector('.video-info p, .video-info #videoDesc');
    if (tEl) tEl.textContent = title || '';
    if (dEl) dEl.textContent = desc || '';
  }

  // Attach play handlers for watch buttons
  document.querySelectorAll('.wg-play').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const parent = btn.closest('.wg-item');
      const title = parent.querySelector('.wg-item-title').textContent;
      const descEl = parent.querySelector('.wg-item-body p');
      const desc = descEl ? descEl.textContent : '';
      const section = parent.closest('section');
      if (section && section.id === 'yoga') {
        setFrame('yogaFrame', src, title, desc);
        location.hash = '#yoga';
      } else {
        setFrame('videoFrame', src, title, desc);
        location.hash = '#exercise';
      }
      // smooth scroll to right pane
      setTimeout(() => {
        const right = section.querySelector('.wg-right');
        right?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    });
  });

  // NAV TAB active on click + smooth scroll
  document.querySelectorAll('.wg-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.wg-nav a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const id = link.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Tabs for Diet
  document.querySelectorAll('.tablink').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const t = btn.dataset.tab;
      document.querySelectorAll('.tabcontent').forEach(tc => {
        tc.style.display = (tc.id === t) ? 'block' : 'none';
        tc.setAttribute('aria-hidden', tc.id === t ? 'false' : 'true');
      });
    });
  });

  // If URL has hash go to that section
  if (location.hash) {
    const hash = location.hash;
    const navlink = document.querySelector(.wg-nav a[href="${hash}"]);
    if (navlink) navlink.click();
  }

  /* ----------------
     BOOKING MODAL
     ---------------- */
  const bookingModal = document.getElementById('bookingModal');
  const openBooking = document.getElementById('openBooking');
  const closeBooking = document.getElementById('closeBooking');
  const bookingForm = document.getElementById('bookingForm');

  function setModal(open) {
    if (!bookingModal) return;
    bookingModal.setAttribute('aria-hidden', String(!open));
  }

  openBooking?.addEventListener('click', () => setModal(true));
  closeBooking?.addEventListener('click', () => setModal(false));
  bookingModal?.addEventListener('click', (e) => {
    if (e.target === bookingModal) setModal(false);
  });

  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('bk_name').value.trim(),
      email: document.getElementById('bk_email').value.trim(),
      phone: document.getElementById('bk_phone').value.trim(),
      date: document.getElementById('bk_date').value,
      notes: document.getElementById('bk_notes').value.trim(),
      createdAt: new Date().toISOString()
    };
    // store locally
    const bookings = JSON.parse(localStorage.getItem(KEY_BOOKINGS) || '[]');
    bookings.push(data);
    localStorage.setItem(KEY_BOOKINGS, JSON.stringify(bookings));
    setModal(false);
    alert('Coach request submitted! Our team will contact you soon.');
    bookingForm.reset();
  });

});