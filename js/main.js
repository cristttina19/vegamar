// Vegamar page behaviour: WhatsApp links, sparkles and hiding past events.
(() => {
  "use strict";

  // Vero's WhatsApp "message link" (same as on her link page). Change it only here.
  const WHATSAPP = "https://wa.me/message/4CHVMTHTK6S3P1";

  // Every element with data-wa="text" becomes a WhatsApp link with that message already written.
  for (const link of document.querySelectorAll("[data-wa]")) {
    link.href = `${WHATSAPP}?text=${encodeURIComponent(link.dataset.wa)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  // Events hide themselves after their date (data-until="YYYY-MM-DD", the last day they are shown)
  const today = new Date();
  const todayKey = [today.getFullYear(), today.getMonth() + 1, today.getDate()]
    .map(n => String(n).padStart(2, "0"))
    .join("-");
  const events = [...document.querySelectorAll(".event[data-until]")];
  let visible = 0;
  for (const event of events) {
    const past = event.dataset.until < todayKey;
    event.hidden = past;
    if (!past) visible += 1;
  }
  const empty = document.querySelector(".events-empty");
  if (empty) empty.hidden = visible > 0;

  // Sparkles: small twinkling stars and dots inside every [data-sparkles="count"] box
  const colors = ["#a8834a", "#d9bf8c", "#ebc98e", "#fff4de"]; // golds and warm light
  const random = (min, max) => min + Math.random() * (max - min);
  for (const box of document.querySelectorAll("[data-sparkles]")) {
    const count = Number(box.dataset.sparkles) || 0;
    for (let i = 0; i < count; i += 1) {
      const sparkle = document.createElement("span");
      sparkle.className = Math.random() < 0.35 ? "sparkle dot" : "sparkle";
      const size = sparkle.classList.contains("dot") ? random(3, 6) : random(7, 15);
      sparkle.style.setProperty("--x", `${random(2, 98)}%`);
      sparkle.style.setProperty("--y", `${random(4, 96)}%`);
      sparkle.style.setProperty("--s", `${size}px`);
      sparkle.style.setProperty("--d", `${random(2.6, 5.5)}s`);
      sparkle.style.setProperty("--delay", `${random(0, 5)}s`);
      sparkle.style.setProperty("--o", random(0.55, 0.95).toFixed(2));
      sparkle.style.setProperty("--c", colors[Math.floor(Math.random() * colors.length)]);
      box.append(sparkle);
    }
  }
})();
