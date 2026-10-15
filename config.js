// ============================================================
//  SITE SETTINGS — this is the ONLY file Gabo needs to edit.
//  Change the text between the quotes, save, and the site updates.
//  (Everything marked PLACEHOLDER must be decided before launch.)
// ============================================================

window.SITE = {

  // --- Brand -------------------------------------------------
  BRAND_NAME: "FlatRx",                     
  HERO_HEADLINE: "Compounded GLP-1s. One flat price.",
  HERO_SUB: "Sign up online. If a licensed provider prescribes, it ships to your door. Message your provider anytime.",

  // --- Scrolling top banner (delete any line you don't want) ---
  MARQUEE_ITEMS: [
    "24/7 Messaging Support",
    // "LegitScript-Certified",        // CONFIRM — only once FlatRx itself is certified
    "100% Online",
    "US-Licensed Pharmacies",
    "Free Shipping",
    // "Provider Review in 24 Hours",  // CONFIRM — timing claim
    // "HSA/FSA Accepted"              // CONFIRM — HSA_FSA_ACCEPTED below is still false
  ],

  // --- Where the big buttons go -------------------------------
  CTA_URL: "#",                             // PLACEHOLDER — intake / checkout link
  CTA_LABEL: "Get started",

  // --- Prices (PLACEHOLDERS — not final) ----------------------
  // Monthly price on the annual plan, the yearly total that is actually charged,
  // and the month-to-month price. Keep them in sync (annual x 12 = yearly).
  SEMAGLUTIDE: {
    annual_monthly: 79,     // PLACEHOLDER
    annual_yearly: 948,     // PLACEHOLDER ($79 x 12)
    monthly: 149            // PLACEHOLDER month-to-month
  },
  TIRZEPATIDE: {
    annual_monthly: 119,    // PLACEHOLDER
    annual_yearly: 1428,    // PLACEHOLDER ($119 x 12)
    monthly: 199            // PLACEHOLDER month-to-month
  },

  // --- Claims that are OFF until confirmed ---------------------
  HSA_FSA_ACCEPTED: false,                  // set to true ONLY once HSA/FSA payment is actually accepted

  // --- Support -------------------------------------------------
  SUPPORT_EMAIL: "support@example.com",     // PLACEHOLDER
  SUPPORT_PHONE: "(000) 000-0000",          // PLACEHOLDER

  // --- Trustpilot (off until the new brand has real reviews) ---
  TRUSTPILOT_ENABLED: false,
  TRUSTPILOT_SCORE: "4.6",
  TRUSTPILOT_COUNT: "0",
  TRUSTPILOT_URL: "#",

  // --- Legal / footer -----------------------------------------
  LEGAL_ENTITY: "FlatRx, LLC",              // PLACEHOLDER — confirm the legal company name
  PROVIDER_GROUP: "an independent, licensed provider group", // PLACEHOLDER — e.g. "Wasef Health, PC" once confirmed
  PRIVACY_URL: "#",                         // PLACEHOLDER
  TERMS_URL: "#",                           // PLACEHOLDER
  REFUND_URL: "#"                           // PLACEHOLDER
};
