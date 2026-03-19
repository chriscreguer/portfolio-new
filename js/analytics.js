(function () {
  function ga(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // ── Scroll Depth ─────────────────────────────────────────────────────────
  var scrollMilestones = [25, 50, 75, 90, 100];
  var reachedMilestones = new Set();

  function getScrollPercent() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return 100;
    return Math.round((scrollTop / docHeight) * 100);
  }

  window.addEventListener('scroll', function () {
    var pct = getScrollPercent();
    scrollMilestones.forEach(function (milestone) {
      if (pct >= milestone && !reachedMilestones.has(milestone)) {
        reachedMilestones.add(milestone);
        ga('scroll_depth', {
          page_path: window.location.pathname,
          page_title: document.title,
          percent_scrolled: milestone
        });
      }
    });
  }, { passive: true });

  // ── Portfolio Project Card Clicks ────────────────────────────────────────
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    var isExternal = /^https?:\/\//.test(href) || link.getAttribute('target') === '_blank';

    // Project card
    var card = link.querySelector('.project-card');
    if (card) {
      var titleEl = card.querySelector('.project-card-title');
      ga('project_card_click', {
        project_name: titleEl ? titleEl.innerText.trim() : href,
        destination: href
      });
      return;
    }

    // External links
    if (isExternal) {
      ga('external_link_click', {
        link_url: href,
        link_text: (link.innerText || link.textContent || '').trim().slice(0, 100),
        page_path: window.location.pathname,
        page_title: document.title
      });
    }
  });

  // ── Nav Clicks ───────────────────────────────────────────────────────────
  document.querySelectorAll('.navbar-list a, .navbar-list-mobile a').forEach(function (link) {
    link.addEventListener('click', function () {
      ga('nav_click', {
        link_text: link.innerText.trim(),
        destination: link.getAttribute('href')
      });
    });
  });

  // ── Filter Chip Clicks (homepage) ────────────────────────────────────────
  var indexChips = document.getElementById('index-chips');
  if (indexChips) {
    indexChips.addEventListener('click', function (e) {
      var chip = e.target.closest('li');
      if (chip) {
        ga('filter_click', {
          filter_label: chip.innerText.trim()
        });
      }
    });
  }

  // ── Case Study Section Nav Clicks ────────────────────────────────────────
  document.querySelectorAll('.cs-nav a, .wy-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      ga('case_study_nav_click', {
        section: link.innerText.trim(),
        page_title: document.title
      });
    });
  });

  // ── Image Lightbox / Modal Opens ─────────────────────────────────────────
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-target') || e.target.classList.contains('glightbox')) {
      ga('image_expand', {
        image_alt: e.target.alt || e.target.getAttribute('data-alt') || '',
        page_path: window.location.pathname,
        page_title: document.title
      });
    }
  });

  // ── CTA Button Clicks ─────────────────────────────────────────────────────
  document.querySelectorAll('.button-primary, .button-secondary, .cs-cta a, .wy-cta a').forEach(function (btn) {
    btn.addEventListener('click', function () {
      ga('cta_click', {
        button_text: (btn.innerText || btn.textContent || '').trim(),
        destination: btn.getAttribute('href') || '',
        page_title: document.title
      });
    });
  });
})();
