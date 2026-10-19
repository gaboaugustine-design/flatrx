// Reads config.js and fills in the page. No edits needed here.
(function () {
  var S = window.SITE || {};

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, S);
  }
  function money(n) { return Number(n).toLocaleString("en-US"); }

  // Text fields: <span data-bind="BRAND_NAME">
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = get(el.getAttribute("data-bind"));
    if (v == null) return;
    // Keep terms like "GLP-1s" on one line in headings (non-breaking hyphen)
    if (el.tagName === "H1") v = String(v).replace(/(\w)-(\w)/g, "$1\u2011$2");
    el.textContent = v;
  });

  // Prices: <span data-price="SEMAGLUTIDE.monthly">
  document.querySelectorAll("[data-price]").forEach(function (el) {
    var v = get(el.getAttribute("data-price"));
    if (v != null) el.textContent = money(v);
  });

  // Every CTA button points at CTA_URL
  document.querySelectorAll("[data-cta]").forEach(function (a) {
    a.setAttribute("href", S.CTA_URL || "#");
    if (S.CTA_URL && S.CTA_URL !== "#") a.setAttribute("rel", "noopener");
  });

  // Footer legal links, email, phone
  document.querySelectorAll("[data-href]").forEach(function (a) {
    a.setAttribute("href", get(a.getAttribute("data-href")) || "#");
  });
  document.querySelectorAll("[data-mailto]").forEach(function (a) {
    a.setAttribute("href", "mailto:" + (get(a.getAttribute("data-mailto")) || ""));
  });
  document.querySelectorAll("[data-tel]").forEach(function (a) {
    var raw = get(a.getAttribute("data-tel")) || "";
    a.setAttribute("href", "tel:" + raw.replace(/[^\d+]/g, ""));
  });

  // Trustpilot badge: hidden unless enabled in config.js
  document.querySelectorAll("[data-trustpilot]").forEach(function (a) {
    if (S.TRUSTPILOT_ENABLED) {
      a.hidden = false;
      a.setAttribute("href", S.TRUSTPILOT_URL || "#");
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }
  });

  // Optional claims: <p data-flag="HSA_FSA_ACCEPTED" hidden> shows only when the config flag is true
  document.querySelectorAll("[data-flag]").forEach(function (el) {
    if (get(el.getAttribute("data-flag")) === true) el.hidden = false;
  });

  // Scrolling banner: items from config.js, duplicated so the loop is seamless
  document.querySelectorAll("[data-marquee]").forEach(function (track) {
    var items = (S.MARQUEE_ITEMS || []).filter(Boolean);
    if (!items.length) { track.closest(".marquee").hidden = true; return; }
    var html = items.map(function (t) { return '<span class="mq-item"><span class="mq-check" aria-hidden="true">\u2713</span>' + String(t).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }) + "</span>"; }).join("");
    track.innerHTML = html + html;
  });

  // Copyright year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Page title
  if (S.BRAND_NAME) document.title = S.BRAND_NAME + " — Compounded GLP-1s, flat pricing at every dose";
})();
