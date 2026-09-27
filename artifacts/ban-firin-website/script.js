const WHATSAPP_URL =
  "https://wa.me/923230007773?text=" +
  encodeURIComponent("Assalamualaikum Ban Firin Bakers — I'd like to order Butter Biscuits (200g).");

const ORDERS = [
  "Ayesha from Lahore just ordered 2 packs",
  "Bilal from Karachi just ordered Butter Biscuits",
  "Fatima from Islamabad just ordered Khatai",
  "Usman from Faisalabad just ordered 4 packs",
  "Hira from Multan just ordered Butter Biscuits",
  "Ahmed from Peshawar just ordered 3 packs",
  "Zara from Rawalpindi just ordered Khatai",
  "Hamza from Sialkot just ordered a carton",
  "Maha from Quetta just ordered 2 packs",
  "Saad from Hyderabad just ordered Butter Biscuits",
];

const TESTIMONIALS = [
  {
    name: "Ayesha R.",
    city: "DHA, Lahore",
    quote:
      "These taste like my nani’s khatai — golden, sandy, gone before chai cools. I ordered again the same evening.",
  },
  {
    name: "Bilal K.",
    city: "Clifton, Karachi",
    quote: "Opened the pack at iftar. The butter hit first. By the time I sat down, the tray was empty.",
  },
  {
    name: "Sana M.",
    city: "F-7, Islamabad",
    quote: "Bought a carton for the office. People kept walking back for ‘just one more’. That’s the whole review.",
  },
];

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.setAttribute("href", WHATSAPP_URL);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const marquee = document.getElementById("marquee");
if (marquee) {
  const lines = [...ORDERS, ...ORDERS];
  marquee.innerHTML = lines
    .map(
      (line) =>
        `<span class="marquee-item"><svg class="icon-sm" style="color:var(--gold-light)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M8 12h8"/></svg>${line}</span>`,
    )
    .join("");
}

const timeEl = document.getElementById("sale-time");
if (timeEl) {
  const total = 8 * 3600 * 1000;
  const origin = Date.now();
  const tick = () => {
    const left = total - ((Date.now() - origin) % total);
    const s = Math.floor(left / 1000);
    const hh = String(Math.floor(s / 3600)).padStart(2, "0");
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    timeEl.textContent = `${hh}:${mm}:${ss}`;
  };
  tick();
  setInterval(tick, 250);
}

const stockEl = document.getElementById("stock");
if (stockEl) {
  let n = 23;
  const loop = () => {
    setTimeout(() => {
      n = Math.max(4, n - 1);
      stockEl.textContent = String(n);
      loop();
    }, 45000 + Math.random() * 45000);
  };
  loop();
}

document.querySelectorAll("[data-product]").forEach((card) => {
  card.querySelectorAll("[data-flip]").forEach((btn) => {
    btn.addEventListener("click", () => card.classList.toggle("is-flipped"));
  });
});

const qr = document.getElementById("qr");
if (qr) {
  const on = [0, 1, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 19, 20, 22, 23, 24];
  qr.innerHTML = Array.from({ length: 25 }, (_, i) => `<i class="${on.includes(i) ? "on" : ""}"></i>`).join("");
}

const reviewsEl = document.getElementById("reviews");
let reviewIndex = 0;
function renderReviews() {
  if (!reviewsEl) return;
  reviewsEl.innerHTML = TESTIMONIALS.map((t, idx) => {
    let off = idx - reviewIndex;
    if (off > 1) off -= TESTIMONIALS.length;
    if (off < -1) off += TESTIMONIALS.length;
    const active = off === 0;
    const opacity = Math.abs(off) > 1 ? 0 : active ? 1 : 0.55;
    const z = 10 - Math.abs(off);
    return `<article class="review-card" style="transform:translateX(${off * 58}%) rotateY(${off * -32}deg) scale(${active ? 1 : 0.86});z-index:${z};opacity:${opacity}">
      <div class="stars" aria-label="5 star rating">${"<svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2l2.9 6.3L22 9.3l-5 4.8 1.2 7L12 17.8 5.8 21.1 7 14.1 2 9.3l7.1-1z'/></svg>".repeat(5)}</div>
      <blockquote>“${t.quote}”</blockquote>
      <p class="who">${t.name}</p>
      <p class="city">${t.city}</p>
    </article>`;
  }).join("");
}
renderReviews();
document.getElementById("prev-review")?.addEventListener("click", () => {
  reviewIndex = (reviewIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  renderReviews();
});
document.getElementById("next-review")?.addEventListener("click", () => {
  reviewIndex = (reviewIndex + 1) % TESTIMONIALS.length;
  renderReviews();
});
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % TESTIMONIALS.length;
    renderReviews();
  }, 5200);
}

const trust = document.getElementById("trust");
if (trust && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) trust.classList.add("in-view");
    },
    { threshold: 0.28 },
  );
  io.observe(trust);
}

const popup = document.getElementById("popup");
let popupShown = false;
function showPopup() {
  if (popupShown || !popup) return;
  popupShown = true;
  popup.classList.add("is-open");
}
document.getElementById("close-popup")?.addEventListener("click", () => popup?.classList.remove("is-open"));
popup?.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("is-open");
});
window.addEventListener(
  "scroll",
  () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
    if (nearBottom) showPopup();
  },
  { passive: true },
);
setTimeout(showPopup, 20000);
