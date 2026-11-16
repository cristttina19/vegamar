// Vegamar page behaviour: WhatsApp links, mobile menu, sparkles and hiding past events.
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

  // Mobile menu
  const menuButton = document.querySelector(".menu-btn");
  const menu = document.getElementById("menu");
  if (menuButton && menu) {
    const setOpen = open => {
      menu.classList.toggle("open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? "Cerrar" : "Menú";
    };
    menuButton.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
    menu.addEventListener("click", event => {
      if (event.target.closest("a")) setOpen(false);
    });
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
  const colors = ["#c9a35f", "#e6c88a", "#ffffff", "#d9a6b0", "#b9a3d8"];
  const random = (min, max) => min + Math.random() * (max - min);
  for (const box of document.querySelectorAll("[data-sparkles]")) {
    const count = Number(box.dataset.sparkles) || 0;
    for (let i = 0; i < count; i += 1) {
      const sparkle = document.createElement("span");
      sparkle.className = Math.random() < 0.35 ? "sparkle dot" : "sparkle";
      const size = sparkle.classList.contains("dot") ? random(3, 6) : random(8, 20);
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
