import { i as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, r as Item, s as Slot, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Clock, a as Sun, b as ChevronDown, c as ShieldCheck, d as Phone, f as MessageCircle, g as Cookie, h as Flame, l as Recycle, m as Leaf, n as Wheat, o as Star, p as MapPin, r as Umbrella, s as Sparkles, t as X, u as QrCode, v as ChevronRight, y as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DCqUNNg4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var WHATSAPP_URL = "https://wa.me/923230007773?text=" + encodeURIComponent("Assalamualaikum Ban Firin Bakers — I'd like to order Butter Biscuits (200g).");
var PHONE_DISPLAY = "0323-0007773";
var PHONE_TEL = "tel:+923230007773";
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-navy/12", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-3 py-3 text-left text-sm font-medium text-navy transition-colors hover:text-gold [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-gold transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pt-0 pb-4", className),
		children
	})
}));
AccordionContent.displayName = "AccordionContent";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			gold: "bg-gold text-navy shadow-gold hover:bg-gold-light",
			navy: "bg-navy text-cream hover:bg-navy-mid",
			outline: "border border-gold/50 bg-transparent text-gold-pale hover:bg-gold/10",
			cream: "bg-cream text-navy hover:bg-paper",
			ghost: "bg-transparent text-cream hover:bg-cream/10"
		},
		size: {
			sm: "h-9 rounded-sm px-3",
			md: "h-11 rounded-md px-5",
			lg: "h-12 rounded-md px-6 text-base",
			xl: "h-14 rounded-lg px-7 text-base font-semibold",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var ORDERS = [
	"Ayesha from Lahore just ordered 2 packs",
	"Bilal from Karachi just ordered Butter Biscuits",
	"Fatima from Islamabad just ordered Khatai",
	"Usman from Faisalabad just ordered 4 packs",
	"Hira from Multan just ordered Butter Biscuits",
	"Ahmed from Peshawar just ordered 3 packs",
	"Zara from Rawalpindi just ordered Khatai",
	"Hamza from Sialkot just ordered a carton",
	"Maha from Quetta just ordered 2 packs",
	"Saad from Hyderabad just ordered Butter Biscuits"
];
var INGREDIENTS = "Wheat Flour, Butter, Sugar, Vegetable Oil, Milk Powder, Baking Powder, Salt, Vanilla Essence";
var NUTRITION = [
	["Energy", "520 kcal"],
	["Protein", "7.8 g"],
	["Carbohydrates", "62.3 g"],
	["Total Fat", "26.4 g"],
	["Sodium", "312 mg"]
];
var TESTIMONIALS = [
	{
		name: "Ayesha R.",
		city: "DHA, Lahore",
		quote: "These taste like my nani’s khatai — golden, sandy, gone before chai cools. I ordered again the same evening."
	},
	{
		name: "Bilal K.",
		city: "Clifton, Karachi",
		quote: "Opened the pack at iftar. The butter hit first. By the time I sat down, the tray was empty."
	},
	{
		name: "Sana M.",
		city: "F-7, Islamabad",
		quote: "Bought a carton for the office. People kept walking back for ‘just one more’. That’s the whole review."
	}
];
var PRODUCTS = [{
	id: "butter",
	name: "Butter Biscuits",
	kicker: "Rich · Crispy · Delicious",
	image: "/butter-biscuits.jpg",
	alt: "Stack of golden Ban Firin butter biscuits with wheat and a curl of butter"
}, {
	id: "khatai",
	name: "Khatai",
	kicker: "Sandy crumb · Fresh from the oven",
	image: "/khatai.jpg",
	alt: "Fresh Pakistani khatai cookies with a cracked golden crumb"
}];
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReduced(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	return reduced;
}
function useLoopingCountdown(hours = 8) {
	const [label, setLabel] = (0, import_react.useState)("08:00:00");
	(0, import_react.useEffect)(() => {
		const total = hours * 3600 * 1e3;
		const origin = Date.now();
		const tick = () => {
			const left = total - (Date.now() - origin) % total;
			const s = Math.floor(left / 1e3);
			const hh = String(Math.floor(s / 3600)).padStart(2, "0");
			const mm = String(Math.floor(s % 3600 / 60)).padStart(2, "0");
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
	const [n, setN] = (0, import_react.useState)(start);
	(0, import_react.useEffect)(() => {
		let id = 0;
		const loop = () => {
			id = window.setTimeout(() => {
				setN((x) => Math.max(4, x - 1));
				loop();
			}, 45e3 + Math.random() * 45e3);
		};
		loop();
		return () => window.clearTimeout(id);
	}, []);
	return n;
}
function useInView() {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setInView(true);
		}, { threshold: .28 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		inView
	};
}
function BrandMark({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: "size-11 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "48",
					height: "48",
					rx: "12",
					fill: light ? "#F5EFDD" : "#0F1A2E"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "24",
					cy: "27",
					rx: "13",
					ry: "12",
					fill: "#C9973D"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "24",
					cy: "26",
					rx: "9.5",
					ry: "8.5",
					fill: "#E8B968"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "24",
					cy: "26",
					rx: "5",
					ry: "4.5",
					fill: "#F5EFDD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 14c3-6 13-6 16 0",
					fill: "none",
					stroke: "#C9973D",
					strokeWidth: "2.2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 6v8",
					stroke: "#C9973D",
					strokeWidth: "2.2",
					strokeLinecap: "round"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("font-display text-lg font-semibold tracking-wide", light ? "text-cream" : "text-navy"),
				children: "BAN FIRIN"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-[10px] font-medium tracking-[0.28em]", light ? "text-gold-light" : "text-gold"),
				children: "BAKERS"
			})]
		})]
	});
}
function OrderButton({ className, size = "lg", glow = false, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "gold",
		size,
		className: cn(glow && "glow-ring", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: WHATSAPP_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), children ?? "Order now on WhatsApp"]
		})
	});
}
function SectionCta({ kicker }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3 px-5 py-10 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-[0.22em] text-gold uppercase",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderButton, { size: "xl" })]
	});
}
function TiltCard({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		el.style.transform = `perspective(1000px) rotateY(${px * 9}deg) rotateX(${-py * 7}deg)`;
	};
	const reset = () => {
		if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: reset,
		className: cn("transition-transform duration-200 ease-out will-change-transform", className),
		style: { transformStyle: "preserve-3d" },
		children
	});
}
function ProductCard({ name, kicker, image, alt }) {
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "[perspective:1200px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-product transition-transform duration-500 ease-out",
			style: {
				transformStyle: "preserve-3d",
				transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-paper shadow-card",
				style: { backfaceVisibility: "hidden" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] overflow-hidden bg-cream-dark",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt,
						className: "size-full object-cover",
						width: 720,
						height: 540
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-3 left-3 rounded-sm bg-navy px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-gold-light uppercase",
						children: "Today only"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col gap-3 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-navy",
							children: name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.18em] text-gold uppercase",
							children: kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ink-muted line-through",
									children: "Rs. 300"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl text-gold",
									children: "Rs. 250"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-sm bg-save px-2 py-1 text-[11px] font-semibold text-cream",
									children: "You save Rs. 50"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-muted",
							children: "Net weight 200g · MRP Rs. 250 (incl. all taxes)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-1.5 flex justify-between text-xs font-medium text-navy",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Selling fast" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: "87% claimed"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 overflow-hidden rounded-full bg-cream-dark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "progress-fill h-full w-[87%] rounded-full bg-gold" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderButton, {
								className: "flex-1",
								size: "md",
								children: "Order this pack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "navy",
								size: "md",
								type: "button",
								onClick: () => setFlipped(true),
								children: "Nutrition"
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-paper p-5 shadow-card",
				style: {
					backfaceVisibility: "hidden",
					transform: "rotateY(180deg)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-navy",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink-muted",
							children: "Batch BF250925 · MFG 25-09-2026 · EXP 25-03-2027"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "navy",
							size: "sm",
							type: "button",
							onClick: () => setFlipped(false),
							children: "Back"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.16em] text-gold uppercase",
						children: "Ingredients"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm leading-relaxed text-ink-muted",
						children: [INGREDIENTS, "."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 rounded-sm bg-cream px-3 py-2 text-xs text-navy",
						children: "Allergen information: contains wheat, milk and soy."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "nutrition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Nutrition facts (per 100g)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "divide-y divide-navy/10 rounded-md border border-navy/10",
								children: NUTRITION.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between px-3 py-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-ink-muted",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium tabular-nums text-navy",
										children: v
									})]
								}, k))
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto pt-4 text-xs text-ink-muted",
						children: "While stocks last · Limited batch, packed this morning."
					})
				]
			})]
		})
	}) });
}
function Coverflow() {
	const [i, setI] = (0, import_react.useState)(0);
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		const id = window.setInterval(() => setI((x) => (x + 1) % TESTIMONIALS.length), 5200);
		return () => window.clearInterval(id);
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto max-w-4xl overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[340px] overflow-hidden [perspective:1400px]",
			children: TESTIMONIALS.map((t, idx) => {
				let off = idx - i;
				if (off > 1) off -= TESTIMONIALS.length;
				if (off < -1) off += TESTIMONIALS.length;
				const active = off === 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "absolute top-6 right-0 left-0 mx-auto w-[min(100%,380px)] rounded-xl bg-paper p-6 shadow-card transition-[transform,opacity] duration-500 ease-out",
					style: {
						transform: `translateX(${off * 58}%) rotateY(${off * -32}deg) scale(${active ? 1 : .86})`,
						zIndex: 10 - Math.abs(off),
						opacity: Math.abs(off) > 1 ? 0 : active ? 1 : .55
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 flex gap-1 text-gold",
							"aria-label": "5 star rating",
							children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold" }, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl leading-snug text-navy",
							children: [
								"“",
								t.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm font-medium text-navy",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink-muted",
							children: t.city
						})
					]
				}, t.name);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex justify-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "navy",
				size: "icon",
				type: "button",
				"aria-label": "Previous review",
				onClick: () => setI((x) => (x - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "navy",
				size: "icon",
				type: "button",
				"aria-label": "Next review",
				onClick: () => setI((x) => (x + 1) % TESTIMONIALS.length),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
			})]
		})]
	});
}
function HomePage() {
	const time = useLoopingCountdown(8);
	const stock = useStock(23);
	const [popup, setPopup] = (0, import_react.useState)(false);
	const popupShown = (0, import_react.useRef)(false);
	const trust = useInView();
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80 && !popupShown.current) {
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
		}, 2e4);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.clearTimeout(t);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-svh overflow-x-hidden bg-cream pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-70 focus:rounded-sm focus:bg-gold focus:px-3 focus:py-2 focus:text-navy",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 top-0 z-50 bg-navy text-gold-light",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pulse-soft flex items-center justify-center gap-2 px-3 py-2 text-center text-[11px] font-medium tracking-wide sm:text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }),
						"Limited time sale ends in",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold tabular-nums text-gold-pale",
							children: time
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-9 z-40 border-b border-gold/20 bg-navy/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PHONE_TEL,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), PHONE_DISPLAY]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderButton, {
								size: "md",
								className: "hidden md:inline-flex",
								children: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "gold",
								size: "icon",
								className: "md:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Order on WhatsApp",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden border-b border-gold/15 bg-navy-mid",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track flex w-max gap-10 py-2 whitespace-nowrap",
					children: [...ORDERS, ...ORDERS].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-xs text-cream/85",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, { className: "size-3.5 text-gold-light" }), line]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "relative flex min-h-[88svh] flex-col justify-center bg-navy px-5 pt-16 pb-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto w-full max-w-4xl stagger-in",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-4 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-navy-mid/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-gold-light uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3.5" }), "Limited batch — freshly baked this morning"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-hero leading-[0.95] font-semibold tracking-tight text-gold-light",
									children: [
										"Baked fresh.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Loved instantly."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg",
									children: "Handcrafted Khatai & Butter Biscuits — Real Ingredients, Better Moments. From the ovens in Attari, Lahore, to your table while the butter still sings."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderButton, {
										size: "xl",
										glow: true,
										children: "Order now on WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: PHONE_TEL,
										className: "text-sm font-medium text-gold-pale hover:text-gold-light",
										children: ["Call ", PHONE_DISPLAY]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 inline-flex items-center gap-2 text-sm text-cream/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4 text-gold" }),
										"Only ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold tabular-nums text-gold-pale",
											children: stock
										}),
										" packs left in today’s batch"
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCta, { kicker: "While stocks last" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "relative z-10 paper-grain px-5 py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.24em] text-gold uppercase",
									children: "The bake"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl text-navy sm:text-5xl",
									children: "Two biscuits. One honest oven."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl text-ink-muted",
									children: "The same 200g pack you hold in your hands: wheat, butter, sugar, milk. No mystery. No factory aftertaste. Just a morning batch, sealed while it still smells like home."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid gap-6 md:grid-cols-2",
									children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { ...p }, p.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "mt-10 overflow-hidden rounded-xl border border-navy/10 bg-paper shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/packaging.jpg",
										alt: "Ban Firin Bakers Butter Biscuits 200g pack — ingredients, nutrition and WhatsApp on the label",
										className: "w-full object-cover",
										width: 1400,
										height: 900
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
										className: "px-5 py-3 text-xs text-ink-muted",
										children: "The pack you get — batch, MRP, nutrition and the WhatsApp line, printed honestly."
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCta, { kicker: "Freshly baked this morning" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-navy px-5 py-20 text-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.24em] text-gold uppercase",
									children: "Why Ban Firin"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-4xl text-gold-light",
									children: "Why this biscuit, not the other one."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid gap-5 md:grid-cols-3",
									children: [
										{
											icon: Wheat,
											title: "Real ingredients",
											body: "Wheat flour, butter, sugar, milk powder, vanilla. Names you’d write on a kitchen card — not a lab sheet."
										},
										{
											icon: Leaf,
											title: "No preservatives feel",
											body: "Small batches, short shelf stories. The crumb stays tender because it wasn’t built to sit for a year."
										},
										{
											icon: Sparkles,
											title: "Freshly baked daily",
											body: "Morning ovens in Attari. Packed the same day. You taste the butter first, the memory second."
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-lg border border-gold/25 bg-navy-mid p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-7 text-gold-light" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 font-display text-2xl text-gold-pale",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-cream/80",
												children: item.body
											})
										]
									}, item.title))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "paper-grain px-5 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-xs font-medium tracking-[0.24em] text-gold uppercase",
									children: "From the table"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-center font-display text-4xl text-navy",
									children: "Loved before the chai cools."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coverflow, {})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCta, { kicker: "Limited batch" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						ref: trust.ref,
						className: cn("bg-navy px-5 py-20 text-center", trust.inView && "in-view"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl text-gold-light italic sm:text-5xl",
								children: "Freshly Baked, Always"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 420 36",
								className: "mx-auto mt-2 h-8 w-[min(100%,420px)]",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									className: "draw-line",
									d: "M12 22 C 70 34, 140 8, 210 22 S 340 34, 408 16",
									fill: "none",
									stroke: "#C9973D",
									strokeWidth: "2.4",
									strokeLinecap: "round"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3",
								children: [
									{
										icon: Umbrella,
										title: "Cool, dry place",
										body: "Keep the pack closed. The crumb stays crisp."
									},
									{
										icon: Sun,
										title: "Away from sunlight",
										body: "Butter is precious. Shade keeps the flavour true."
									},
									{
										icon: Recycle,
										title: "Keep your city clean",
										body: "Eco-conscious pack. Finish the biscuits, recycle the rest."
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-lg border border-gold/20 px-5 py-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "mx-auto size-7 text-gold-light" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-xl text-cream",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-cream/75",
											children: item.body
										})
									]
								}, item.title))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "px-5 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-navy/10 bg-paper p-6 shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-7 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
											children: "On every pack"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl text-navy",
										children: "Scan for batch, nutrition & contact"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ink-muted",
										children: "The same QR printed on the 200g pack: batch number, manufacturing date, expiry, MRP, ingredients and this WhatsApp line. No fine print hiding in another language."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-36 grid-cols-5 gap-1 rounded-md border-2 border-navy bg-paper p-2",
											"aria-hidden": "true",
											children: Array.from({ length: 25 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("rounded-[1px]", [
												0,
												1,
												2,
												4,
												5,
												6,
												8,
												10,
												12,
												14,
												16,
												18,
												19,
												20,
												22,
												23,
												24
											].includes(i) ? "bg-navy" : "bg-cream") }, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "space-y-2 text-sm text-ink-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Batch No. BF250925" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "MFG 25-09-2026" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "EXP 25-03-2027" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "MRP Rs. 250" })
											]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-navy p-7 text-cream shadow-navy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-8 text-gold-light" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl text-gold-light",
										children: "Manufactured & packed by"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-2xl",
										children: "BAN FIRIN BAKERS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-cream/80",
										children: "Banjaras Catering"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 flex items-start gap-2 text-sm text-cream/85",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-gold" }), "Attari, Pco Bank Stop, Lahore"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm",
										children: [
											"Call & WhatsApp",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: PHONE_TEL,
												className: "font-medium text-gold-light underline-offset-4 hover:underline",
												children: PHONE_DISPLAY
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderButton, {
										className: "mt-6",
										size: "lg",
										children: "Message the bakery"
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-gold/20 bg-navy px-5 py-10 text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { light: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm text-cream/70",
							children: "Real Ingredients · Better Moments. Quality bakes a brighter day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: PHONE_TEL,
									className: "text-gold-light",
									children: PHONE_DISPLAY
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cream/50",
									children: " · "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									className: "text-gold-light",
									children: "WhatsApp"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-cream/55",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Ban Firin Bakers. All rights reserved."
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed right-4 bottom-4 z-50 max-md:right-3 max-md:bottom-3 max-md:left-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderButton, {
					size: "xl",
					glow: true,
					className: "w-full shadow-gold max-md:h-14",
					children: "Order now on WhatsApp"
				})
			}),
			popup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-60 flex items-end justify-center bg-navy/70 p-4 sm:items-center",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "exit-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-md rounded-xl bg-paper p-6 shadow-navy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "absolute top-3 right-3 rounded-sm p-2 text-ink-muted hover:bg-cream",
							"aria-label": "Close",
							onClick: () => setPopup(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.2em] text-gold uppercase",
							children: "Wait — don’t miss this"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "exit-title",
							className: "mt-2 font-display text-3xl text-navy",
							children: "20% off, only while this batch lasts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-ink-muted",
							children: [
								"Rs. 300 → ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-gold",
									children: "Rs. 250"
								}),
								". Same 200g pack. Same morning bake. Limited stock at this price."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderButton, {
							className: "mt-5 w-full",
							size: "xl",
							glow: true,
							children: "Claim 20% off on WhatsApp"
						})
					]
				})
			})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
