(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isNarrow = window.matchMedia('(max-width: 700px)').matches;

  if (prefersReducedMotion || isNarrow) return;

  var factor = 0.3;
  var panels = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var layers = panels.map(function (panel) {
    return { panel: panel, bg: panel.querySelector('.bg') };
  });

  var ticking = false;

  function update() {
    var viewportH = window.innerHeight;
    layers.forEach(function (layer) {
      var rect = layer.panel.getBoundingClientRect();
      var offset = (rect.top - viewportH / 2) * factor;
      layer.bg.style.transform = 'translateY(' + offset + 'px)';
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
