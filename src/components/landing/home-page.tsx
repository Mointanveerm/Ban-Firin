import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  Clock,
  Flame,
  MessageCircle,
  Phone,
  Wheat,
  Sun,
  Recycle,
  Umbrella,
  Star,
  MapPin,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Leaf,
  Cookie,
  QrCode,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, cn } from "@/lib/utils";

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

const INGREDIENTS =
  "Wheat Flour, Butter, Sugar, Vegetable Oil, Milk Powder, Baking Powder, Salt, Vanilla Essence";

const NUTRITION = [
  ["Energy", "520 kcal"],
  ["Protein", "7.8 g"],
  ["Carbohydrates", "62.3 g"],
  ["Total Fat", "26.4 g"],
  ["Sodium", "312 mg"],
] as const;

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
    quote:
      "Opened the pack at iftar. The butter hit first. By the time I sat down, the tray was empty.",
  },
  {
    name: "Sana M.",
    city: "F-7, Islamabad",
    quote:
      "Bought a carton for the office. People kept walking back for ‘just one more’. That’s the whole review.",
  },
];

const PRODUCTS = [
  {
    id: "butter",
    name: "Butter Biscuits",
    kicker: "Rich · Crispy · Delicious",
    image: "/butter-biscuits.jpg",
    alt: "Stack of golden Ban Firin butter biscuits with wheat and a curl of butter",
  },
  {
    id: "khatai",
    name: "Khatai",
    kicker: "Sandy crumb · Fresh from the oven",
    image: "/khatai.jpg",
    alt: "Fresh Pakistani khatai cookies with a cracked golden crumb",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

function useLoopingCountdown(hours = 8) {
  const [label, setLabel] = useState("08:00:00");
  useEffect(() => {
    const total = hours * 3600 * 1000;
    const origin = Date.now();
    const tick = () => {
      const left = total - ((Date.now() - origin) % total);
      const s = Math.floor(left / 1000);
      const hh = String(Math.floor(s / 3600)).padStart(2, "0");
      const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      setLabel(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = window.setInterval(tick, 250);
    return () => window.clearInterval(id);
  }, [hours]);
  return label;
}

function useStock(start = 23) {
  const [n, setN] = useState(start);
  useEffect(() => {
    let id = 0;
    const loop = () => {
      id = window.setTimeout(
        () => {
          setN((x) => Math.max(4, x - 1));
          loop();
        },
        45000 + Math.random() * 45000,
      );
    };
    loop();
    return () => window.clearTimeout(id);
  }, []);
  return n;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.28 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 48 48" className="size-11 shrink-0" aria-hidden="true">
        <rect width="48" height="48" rx="12" fill={light ? "#F5EFDD" : "#0F1A2E"} />
        <ellipse cx="24" cy="27" rx="13" ry="12" fill="#C9973D" />
        <ellipse cx="24" cy="26" rx="9.5" ry="8.5" fill="#E8B968" />
        <ellipse cx="24" cy="26" rx="5" ry="4.5" fill="#F5EFDD" />
        <path
          d="M16 14c3-6 13-6 16 0"
          fill="none"
          stroke="#C9973D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M24 6v8" stroke="#C9973D" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <div className="leading-tight">
        <p
          className={cn(
            "font-display text-lg font-semibold tracking-wide",
            light ? "text-cream" : "text-navy",
          )}
        >
          BAN FIRIN
        </p>
        <p className={cn("text-[10px] font-medium tracking-[0.28em]", light ? "text-gold-light" : "text-gold")}>
          BAKERS
        </p>
      </div>
    </div>
  );
}

function OrderButton({
  className,
  size = "lg",
  glow = false,
  children,
}: {
  className?: string;
  size?: "md" | "lg" | "xl";
  glow?: boolean;
  children?: ReactNode;
}) {
  return (
    <Button asChild variant="gold" size={size} className={cn(glow && "glow-ring", className)}>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="size-4" />
        {children ?? "Order now on WhatsApp"}
      </a>
    </Button>
  );
}

function SectionCta({ kicker }: { kicker: string }) {
  return (
    <div className="flex flex-col items-center gap-3 px-5 py-10 text-center">
      <p className="text-xs font-medium tracking-[0.22em] text-gold uppercase">{kicker}</p>
      <OrderButton size="xl" />
    </div>
  );
}

function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 9}deg) rotateX(${-py * 7}deg)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "transition-transform duration-200 ease-out will-change-transform",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

function ProductCard({
  name,
  kicker,
  image,
  alt,
}: {
  name: string;
  kicker: string;
  image: string;
  alt: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <TiltCard>
      <div className="[perspective:1200px]">
        <div
          className="relative min-h-product transition-transform duration-500 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <article
            className="absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-paper shadow-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
              <img src={image} alt={alt} className="size-full object-cover" width={720} height={540} />
              <span className="absolute top-3 left-3 rounded-sm bg-navy px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-gold-light uppercase">
                Today only
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <p className="font-display text-2xl text-navy">{name}</p>
              <p className="text-xs tracking-[0.18em] text-gold uppercase">{kicker}</p>
              <div className="flex flex-wrap items-end gap-3">
                <p className="text-sm text-ink-muted line-through">Rs. 300</p>
                <p className="font-display text-4xl text-gold">Rs. 250</p>
                <span className="rounded-sm bg-save px-2 py-1 text-[11px] font-semibold text-cream">
                  You save Rs. 50
                </span>
              </div>
              <p className="text-sm text-ink-muted">Net weight 200g · MRP Rs. 250 (incl. all taxes)</p>
              <div className="mt-1">
                <p className="mb-1.5 flex justify-between text-xs font-medium text-navy">
                  <span>Selling fast</span>
                  <span className="tabular-nums">87% claimed</span>
                </p>
                <div className="h-2 overflow-hidden rounded-full bg-cream-dark">
                  <div className="progress-fill h-full w-[87%] rounded-full bg-gold" />
                </div>
              </div>
              <div className="mt-auto flex gap-2 pt-2">
                <OrderButton className="flex-1" size="md">
                  Order this pack
                </OrderButton>
                <Button variant="navy" size="md" type="button" onClick={() => setFlipped(true)}>
                  Nutrition
                </Button>
              </div>
            </div>
          </article>

          <article
            className="absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-paper p-5 shadow-card"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-xl text-navy">{name}</p>
                <p className="text-xs text-ink-muted">Batch BF250925 · MFG 25-09-2026 · EXP 25-03-2027</p>
              </div>
              <Button variant="navy" size="sm" type="button" onClick={() => setFlipped(false)}>
                Back
              </Button>
            </div>
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Ingredients</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">{INGREDIENTS}.</p>
            <p className="mt-3 rounded-sm bg-cream px-3 py-2 text-xs text-navy">
              Allergen information: contains wheat, milk and soy.
            </p>
            <Accordion type="single" collapsible className="mt-3">
              <AccordionItem value="nutrition">
                <AccordionTrigger>Nutrition facts (per 100g)</AccordionTrigger>
                <AccordionContent>
                  <dl className="divide-y divide-navy/10 rounded-md border border-navy/10">
                    {NUTRITION.map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between px-3 py-2 text-sm">
                        <dt className="text-ink-muted">{k}</dt>
                        <dd className="font-medium tabular-nums text-navy">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p className="mt-auto pt-4 text-xs text-ink-muted">While stocks last · Limited batch, packed this morning.</p>
          </article>
        </div>
      </div>
    </TiltCard>
  );
}

function Coverflow() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % TESTIMONIALS.length), 5200);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden">
      <div className="relative h-[340px] overflow-hidden [perspective:1400px]">
        {TESTIMONIALS.map((t, idx) => {
          let off = idx - i;
          if (off > 1) off -= TESTIMONIALS.length;
          if (off < -1) off += TESTIMONIALS.length;
          const active = off === 0;
          return (
            <article
              key={t.name}
              className="absolute top-6 right-0 left-0 mx-auto w-[min(100%,380px)] rounded-xl bg-paper p-6 shadow-card transition-[transform,opacity] duration-500 ease-out"
              style={{
                transform: `translateX(${off * 58}%) rotateY(${off * -32}deg) scale(${active ? 1 : 0.86})`,
                zIndex: 10 - Math.abs(off),
                opacity: Math.abs(off) > 1 ? 0 : active ? 1 : 0.55,
              }}
            >
              <div className="mb-3 flex gap-1 text-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-gold" />
                ))}
              </div>
              <p className="font-display text-xl leading-snug text-navy">“{t.quote}”</p>
              <p className="mt-5 text-sm font-medium text-navy">{t.name}</p>
              <p className="text-xs text-ink-muted">{t.city}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-2 flex justify-center gap-2">
        <Button variant="navy" size="icon" type="button" aria-label="Previous review" onClick={() => setI((x) => (x - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>
          <ChevronLeft />
        </Button>
        <Button variant="navy" size="icon" type="button" aria-label="Next review" onClick={() => setI((x) => (x + 1) % TESTIMONIALS.length)}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export function HomePage() {
  const time = useLoopingCountdown(8);
  const stock = useStock(23);
  const [popup, setPopup] = useState(false);
  const popupShown = useRef(false);
  const trust = useInView<HTMLElement>();

  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      if (nearBottom && !popupShown.current) {
        popupShown.current = true;
        setPopup(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = window.setTimeout(() => {
      if (!popupShown.current) {
        popupShown.current = true;
        setPopup(true);
      }
    }, 20000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-cream pb-28">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-70 focus:rounded-sm focus:bg-gold focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>

      <div className="fixed inset-x-0 top-0 z-50 bg-navy text-gold-light">
        <p className="pulse-soft flex items-center justify-center gap-2 px-3 py-2 text-center text-[11px] font-medium tracking-wide sm:text-xs">
          <Clock className="size-3.5" />
          Limited time sale ends in
          <span className="font-semibold tabular-nums text-gold-pale">{time}</span>
        </p>
      </div>

      <header className="sticky top-9 z-40 border-b border-gold/20 bg-navy/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <BrandMark light />
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <a href={PHONE_TEL}>
                <Phone className="size-3.5" />
                {PHONE_DISPLAY}
              </a>
            </Button>
            <OrderButton size="md" className="hidden md:inline-flex">
              WhatsApp
            </OrderButton>
            <Button asChild variant="gold" size="icon" className="md:hidden">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp">
                <MessageCircle />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="overflow-hidden border-b border-gold/15 bg-navy-mid">
        <div className="marquee-track flex w-max gap-10 py-2 whitespace-nowrap">
          {[...ORDERS, ...ORDERS].map((line, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs text-cream/85">
              <Cookie className="size-3.5 text-gold-light" />
              {line}
            </span>
          ))}
        </div>
      </div>

      <main id="main">
        <section className="relative flex min-h-[88svh] flex-col justify-center bg-navy px-5 pt-16 pb-20">
          <div className="relative z-10 mx-auto w-full max-w-4xl stagger-in">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-navy-mid/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-gold-light uppercase">
              <Flame className="size-3.5" />
              Limited batch — freshly baked this morning
            </p>
            <h1 className="font-display text-hero leading-[0.95] font-semibold tracking-tight text-gold-light">
              Baked fresh.
              <br />
              Loved instantly.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
              Handcrafted Khatai & Butter Biscuits — Real Ingredients, Better Moments. From the ovens in
              Attari, Lahore, to your table while the butter still sings.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <OrderButton size="xl" glow>
                Order now on WhatsApp
              </OrderButton>
              <a href={PHONE_TEL} className="text-sm font-medium text-gold-pale hover:text-gold-light">
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-cream/80">
              <Flame className="size-4 text-gold" />
              Only <span className="font-semibold tabular-nums text-gold-pale">{stock}</span> packs left in
              today’s batch
            </p>
          </div>
        </section>

        <SectionCta kicker="While stocks last" />

        <section className="relative z-10 paper-grain px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium tracking-[0.24em] text-gold uppercase">The bake</p>
            <h2 className="mt-2 font-display text-4xl text-navy sm:text-5xl">Two biscuits. One honest oven.</h2>
            <p className="mt-4 max-w-2xl text-ink-muted">
              The same 200g pack you hold in your hands: wheat, butter, sugar, milk. No mystery. No factory
              aftertaste. Just a morning batch, sealed while it still smells like home.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
            <figure className="mt-10 overflow-hidden rounded-xl border border-navy/10 bg-paper shadow-card">
              <img
                src="/packaging.jpg"
                alt="Ban Firin Bakers Butter Biscuits 200g pack — ingredients, nutrition and WhatsApp on the label"
                className="w-full object-cover"
                width={1400}
                height={900}
              />
              <figcaption className="px-5 py-3 text-xs text-ink-muted">
                The pack you get — batch, MRP, nutrition and the WhatsApp line, printed honestly.
              </figcaption>
            </figure>
          </div>
        </section>

        <SectionCta kicker="Freshly baked this morning" />

        <section className="bg-navy px-5 py-20 text-cream">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium tracking-[0.24em] text-gold uppercase">Why Ban Firin</p>
            <h2 className="mt-2 font-display text-4xl text-gold-light">Why this biscuit, not the other one.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Wheat,
                  title: "Real ingredients",
                  body: "Wheat flour, butter, sugar, milk powder, vanilla. Names you’d write on a kitchen card — not a lab sheet.",
                },
                {
                  icon: Leaf,
                  title: "No preservatives feel",
                  body: "Small batches, short shelf stories. The crumb stays tender because it wasn’t built to sit for a year.",
                },
                {
                  icon: Sparkles,
                  title: "Freshly baked daily",
                  body: "Morning ovens in Attari. Packed the same day. You taste the butter first, the memory second.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-gold/25 bg-navy-mid p-6">
                  <item.icon className="size-7 text-gold-light" />
                  <h3 className="mt-4 font-display text-2xl text-gold-pale">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/80">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="paper-grain px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-medium tracking-[0.24em] text-gold uppercase">From the table</p>
            <h2 className="mt-2 text-center font-display text-4xl text-navy">Loved before the chai cools.</h2>
            <div className="mt-10">
              <Coverflow />
            </div>
          </div>
        </section>

        <SectionCta kicker="Limited batch" />

        <section
          ref={trust.ref}
          className={cn("bg-navy px-5 py-20 text-center", trust.inView && "in-view")}
        >
          <p className="font-display text-4xl text-gold-light italic sm:text-5xl">Freshly Baked, Always</p>
          <svg viewBox="0 0 420 36" className="mx-auto mt-2 h-8 w-[min(100%,420px)]" aria-hidden="true">
            <path
              className="draw-line"
              d="M12 22 C 70 34, 140 8, 210 22 S 340 34, 408 16"
              fill="none"
              stroke="#C9973D"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              { icon: Umbrella, title: "Cool, dry place", body: "Keep the pack closed. The crumb stays crisp." },
              { icon: Sun, title: "Away from sunlight", body: "Butter is precious. Shade keeps the flavour true." },
              { icon: Recycle, title: "Keep your city clean", body: "Eco-conscious pack. Finish the biscuits, recycle the rest." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-gold/20 px-5 py-6">
                <item.icon className="mx-auto size-7 text-gold-light" />
                <h3 className="mt-3 font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-1 text-sm text-cream/75">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div className="rounded-xl border border-navy/10 bg-paper p-6 shadow-card">
              <div className="flex items-center gap-3">
                <QrCode className="size-7 text-gold" />
                <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">On every pack</p>
              </div>
              <h2 className="mt-4 font-display text-3xl text-navy">Scan for batch, nutrition & contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                The same QR printed on the 200g pack: batch number, manufacturing date, expiry, MRP,
                ingredients and this WhatsApp line. No fine print hiding in another language.
              </p>
              <div className="mt-6 flex gap-3">
                <div className="grid size-36 grid-cols-5 gap-1 rounded-md border-2 border-navy bg-paper p-2" aria-hidden="true">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "rounded-[1px]",
                        [0, 1, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 19, 20, 22, 23, 24].includes(i)
                          ? "bg-navy"
                          : "bg-cream",
                      )}
                    />
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-ink-muted">
                  <li>Batch No. BF250925</li>
                  <li>MFG 25-09-2026</li>
                  <li>EXP 25-03-2027</li>
                  <li>MRP Rs. 250</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl bg-navy p-7 text-cream shadow-navy">
              <ShieldCheck className="size-8 text-gold-light" />
              <h2 className="mt-4 font-display text-3xl text-gold-light">Manufactured & packed by</h2>
              <p className="mt-3 font-display text-2xl">BAN FIRIN BAKERS</p>
              <p className="mt-1 text-sm text-cream/80">Banjaras Catering</p>
              <p className="mt-4 flex items-start gap-2 text-sm text-cream/85">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                Attari, Pco Bank Stop, Lahore
              </p>
              <p className="mt-4 text-sm">
                Call & WhatsApp{" "}
                <a href={PHONE_TEL} className="font-medium text-gold-light underline-offset-4 hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <OrderButton className="mt-6" size="lg">
                Message the bakery
              </OrderButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/20 bg-navy px-5 py-10 text-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <BrandMark light />
            <p className="mt-3 max-w-sm text-sm text-cream/70">
              Real Ingredients · Better Moments. Quality bakes a brighter day.
            </p>
            <p className="mt-2 text-sm">
              <a href={PHONE_TEL} className="text-gold-light">
                {PHONE_DISPLAY}
              </a>
              <span className="text-cream/50"> · </span>
              <a href={WHATSAPP_URL} className="text-gold-light">
                WhatsApp
              </a>
            </p>
          </div>
          <p className="text-xs text-cream/55">© {new Date().getFullYear()} Ban Firin Bakers. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed right-4 bottom-4 z-50 max-md:right-3 max-md:bottom-3 max-md:left-3">
        <OrderButton size="xl" glow className="w-full shadow-gold max-md:h-14">
          Order now on WhatsApp
        </OrderButton>
      </div>

      {popup && (
        <div
          className="fixed inset-0 z-60 flex items-end justify-center bg-navy/70 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-title"
        >
          <div className="relative w-full max-w-md rounded-xl bg-paper p-6 shadow-navy">
            <button
              type="button"
              className="absolute top-3 right-3 rounded-sm p-2 text-ink-muted hover:bg-cream"
              aria-label="Close"
              onClick={() => setPopup(false)}
            >
              <X className="size-4" />
            </button>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Wait — don’t miss this</p>
            <h2 id="exit-title" className="mt-2 font-display text-3xl text-navy">
              20% off, only while this batch lasts
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Rs. 300 → <span className="font-semibold text-gold">Rs. 250</span>. Same 200g pack. Same morning bake.
              Limited stock at this price.
            </p>
            <OrderButton className="mt-5 w-full" size="xl" glow>
              Claim 20% off on WhatsApp
            </OrderButton>
          </div>
        </div>
      )}
    </div>
  );
}
