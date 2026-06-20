/*
 * mohammedqahtani.com — Google tag + WhatsApp lead conversion
 * Loads Google Ads AW-18085047456 + GA4 G-BHWK9615C8 and fires the
 * WhatsApp Click conversion on any WhatsApp button, then opens WhatsApp.
 */
(function () {
  var AW_ID = 'AW-18085047456';
  var GA4_ID = 'G-BHWK9615C8';
  var SEND_TO = 'AW-18085047456/MuPgCK' + 'XzyJ4cEKDZz69D';

  // If this page already has the inline homepage conversion, do nothing.
  if (document.documentElement.innerHTML.indexOf('MuPgCK' + 'XzyJ4cEKDZz69D') !== -1) return;

  // Bind only once, even if included twice.
  if (window.__waConvBound) return;
  window.__waConvBound = true;

  // Load gtag once.
  if (!window.__gtagLoaded) {
    window.__gtagLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + AW_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', AW_ID);
    gtag('config', GA4_ID);
  }

  function fireConversion(cb) {
    gtag('event', 'conversion', {
      'send_to': SEND_TO,
      'value': 1.0,
      'currency': 'SAR',
      'event_callback': cb
    });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com/send"]');
    if (!link) return;
    if (link.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) { fireConversion(); return; }
    e.preventDefault();
    var url = link.href, done = false;
    function go() { if (!done) { done = true; window.location.href = url; } }
    fireConversion(go);
    setTimeout(go, 800);
  }, true);
})();
