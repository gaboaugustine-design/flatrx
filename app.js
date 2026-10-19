// Reads config.js and fills in the page. No edits needed here.
(function () {
  var S = window.SITE || {};

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, S);
  }
  function money(n) { return Number(n).toLocaleString("en-US"); }

  // Editable marquee. The visual duplicate is hidden from assistive technology.
  var track = document.querySelector("[data-marquee]");
  var items = Array.isArray(S.MARQUEE_ITEMS) ? S.MARQUEE_ITEMS.filter(function (item) { return typeof item === "string" && item.trim(); }) : [];
  if (track && items.length) {
    var group = document.createElement("ul");
    group.className = "fx-marquee-group";
    items.forEach(function (text) {
      var item = document.createElement("li");
      var check = document.createElement("span");
      check.textContent = "✓";
      check.setAttribute("aria-hidden", "true");
      item.appendChild(check);
      item.appendChild(document.createTextNode(text));
      group.appendChild(item);
    });
    track.appendChild(group);
    var duplicate = group.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    track.appendChild(duplicate);
    document.querySelector(".fx-marquee-toggle").addEventListener("click", function () {
      var paused = this.getAttribute("aria-pressed") !== "true";
      this.setAttribute("aria-pressed", String(paused));
      this.setAttribute("aria-label", paused ? "Resume animations" : "Pause animations");
      this.textContent = paused ? "▶" : "Ⅱ";
      track.classList.toggle("is-paused", paused);
      document.documentElement.classList.toggle("fx-motion-paused", paused);
    });
  } else if (track) {
    track.closest(".fx-marquee").hidden = true;
  }

  // Text fields: <span data-bind="BRAND_NAME">
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var v = get(el.getAttribute("data-bind"));
    if (v == null) return;
    // Keep terms like "GLP-1s" on one line in headings (non-breaking hyphen)
    if (el.tagName === "H1") v = String(v).replace(/(\w)-(\w)/g, "$1\u2011$2");
    el.textContent = v;
    if (el.id === "hero-heading" && /One flat price\.$/.test(v)) {
      var firstLine = document.createElement("span");
      firstLine.className = "fx-headline-line";
      firstLine.textContent = v.replace(/\s*One flat price\.$/, "");
      var secondLine = document.createElement("span");
      secondLine.className = "fx-headline-line";
      secondLine.appendChild(document.createTextNode("One "));
      var flat = document.createElement("span");
      flat.className = "fx-flat-word";
      flat.textContent = "flat";
      secondLine.appendChild(flat);
      secondLine.appendChild(document.createTextNode(" price."));
      el.replaceChildren(firstLine, secondLine);
    }
  });

  // Prices: <span data-price="SEMAGLUTIDE.annual_monthly">
  document.querySelectorAll("[data-price]").forEach(function (el) {
    var v = get(el.getAttribute("data-price"));
    if (v != null) el.textContent = money(v);
  });

  // Every CTA button points at CTA_URL
  document.querySelectorAll("[data-cta]").forEach(function (a) {
    a.setAttribute("href", S.CTA_URL || "#");
    if (S.CTA_URL && S.CTA_URL !== "#") a.setAttribute("rel", "noopener");
  });

  // Independent billing selection for each medication. Intake URL is configured separately.
  document.querySelectorAll('.plan-col[data-medication]').forEach(function (column) {
    function updateSelection() {
      var selected = column.querySelector('.plan-choice:checked');
      var cta = column.querySelector('[data-cta]');
      column.dataset.plan = selected.value;
      cta.dataset.medication = column.dataset.medication;
      cta.dataset.plan = selected.value;
    }
    column.querySelectorAll('.plan-choice').forEach(function (radio) {
      radio.addEventListener('change', updateSelection);
    });
    updateSelection();
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

  // Copyright year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Page title
  if (S.BRAND_NAME) document.title = S.BRAND_NAME + (document.body.dataset.page === "refund-policy" ? " — Cancellation & refund policy" : " — Compounded GLP-1s, one flat price");
})();
