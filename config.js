// ============================================================
//  SITE SETTINGS — the only file to edit.
//  Change the text between the quotes, save, and the site updates.
// ============================================================

window.SITE = {

  // --- Brand -------------------------------------------------
  BRAND_NAME: "FlatRx",
  HERO_HEADLINE: "Compounded GLP-1s. One flat price.",
  HERO_SUB: "Sign up online. If a licensed provider prescribes, it ships to your door. Message your provider anytime.",

  // --- Scrolling top banner (delete any line you don't want) ---
  MARQUEE_ITEMS: [
    "Message Your Care Team Anytime",
    "Online Visit",
    "US-Licensed Pharmacies",
    "Free Shipping"
  ],

  // --- Where the big buttons go -------------------------------
  CTA_URL: "https://start.flatrx.io/",      // online visit
  CTA_LABEL: "Get started",

  // --- Prices -------------------------------------------------
  // Per-month price on the 3-month plan, the amount billed every 3 months,
  // and the monthly plan price. Keep them in sync (per-month x 3 = billed).
  SEMAGLUTIDE: {
    three_month_monthly: 89,
    three_month_billed: 267,
    monthly: 99
  },
  TIRZEPATIDE: {
    three_month_monthly: 109,
    three_month_billed: 327,
    monthly: 119
  },

  // --- Claims that are OFF until confirmed ---------------------
  HSA_FSA_ACCEPTED: false,                  // set to true ONLY once HSA/FSA payment is actually accepted

  // --- Support -------------------------------------------------
  SUPPORT_EMAIL: "support@flatrx.io",
  SUPPORT_PHONE: "(631) 488-0789",

  // --- Trustpilot (off until the new brand has real reviews) ---
  TRUSTPILOT_ENABLED: false,
  TRUSTPILOT_SCORE: "",
  TRUSTPILOT_COUNT: "",
  TRUSTPILOT_URL: "#",

  // --- Legal / footer -----------------------------------------
  LEGAL_ENTITY: "Leanio Health LLC, doing business as FlatRx",
  PROVIDER_GROUP: "Wasef Health, PC, an independent medical group"
};
