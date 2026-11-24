"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { BackCover, FrontCover, PAGES, PAGE_H, PAGE_W, Shell } from "./pages";

const NAV_H = 68;
const SPREADS = 12;
const SPREAD_NAMES = [
  "Эхлэл",
  "Бидний тухай",
  "Яагаад бид",
  "Боломжууд",
  "Мобайл апп",
  "Мобайл апп",
  "Хэрхэн ажилладаг",
  "Ялгаа",
  "Тайлан ба аналитик",
  "Ирээдүйн төлөвлөгөө",
  "Түгээмэл асуулт",
  "Холбоо барих",
];

/** Which spread each in-page anchor opens. `end` means the closed back cover. */
const ANCHORS: Record<string, number | "end" | "start"> = {
  "#": "start",
  "#about": 1,
  "#why-us": 2,
  "#features": 3,
  "#how-it-works": 6,
  "#reports": 8,
  "#roadmap": 9,
  "#faq": 10,
  "#contact": 11,
  "#download": "end",
};

/**
 * Two layouts, one notebook.
 * spread: an open two-page book, scaled to the window (laptops and up).
 * single: one page at a time, reflowed to the screen (phones, tablets, short windows).
 */
type Layout =
  | { mode: "spread"; scale: number }
  | { mode: "single"; w: number; h: number };

function geometry(l: Layout) {
  if (l.mode === "spread") {
    // leaf 0 = front cover, 1..11 paper leaves, 12 = back cover
    return { leaves: 13, phases: 13, phaseVh: 0.85, pw: PAGE_W * l.scale, ph: PAGE_H * l.scale };
  }
  // cover, pages 1..24, back cover: each page swings off to the left in turn
  return { leaves: 26, phases: 25, phaseVh: 0.62, pw: l.w, ph: l.h };
}

function computeLayout(): Layout | null {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  const h = window.innerHeight;
  const w = window.innerWidth;
  const scale = Math.min(1, (h - NAV_H - 90) / PAGE_H, (w * 0.96) / (PAGE_W * 2));
  if (scale >= 0.74) return { mode: "spread", scale };
  return {
    mode: "single",
    w: Math.round(Math.min(w - 20, 540)),
    h: Math.max(380, Math.round(h - NAV_H - 96)),
  };
}

export function Book() {
  const [layout, setLayout] = useState<Layout | null>(null);

  useEffect(() => {
    const apply = () => {
      const next = computeLayout();
      document.documentElement.classList.toggle("book-mode", next !== null);
      setLayout(next);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  if (layout === null) return null;
  return <BookInner layout={layout} />;
}

function BookInner({ layout }: { layout: Layout }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [vh, setVh] = useState(() => window.innerHeight);
  const [active, setActive] = useState(-1); // -1 closed front, 0..11 spreads, 12 closed back
  const [visited, setVisited] = useState<Set<number>>(() => new Set());
  const g = geometry(layout);
  const single = layout.mode === "single";

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress: p } = useScroll({
    target: outerRef,
    offset: [`start ${NAV_H}px`, "end end"],
  });

  // The closed book is centred: shifted half a page while only one cover shows.
  const x = useTransform(
    p,
    single ? [0, 1] : [0, 0.18 / g.phases, 0.82 / g.phases, 12.18 / g.phases, 12.82 / g.phases, 1],
    single ? ["0%", "0%"] : ["-25%", "-25%", "0%", "0%", "25%", "25%"]
  );

  useMotionValueEvent(p, "change", (v) => {
    let s: number;
    if (single) {
      const n = Math.round(v * g.phases); // page on show
      s = n <= 0 ? -1 : n >= 25 ? SPREADS : Math.floor((n - 1) / 2);
    } else {
      s = Math.max(-1, Math.min(SPREADS, Math.round(v * g.phases) - 1));
    }
    setActive((prev) => (prev === s ? prev : s));
  });

  // Pen marks: when a spread comes to rest, the pen underlines its headings one by one.
  useEffect(() => {
    if (active < 0 || active >= SPREADS) return;
    setVisited((prev) => (prev.has(active) ? prev : new Set(prev).add(active)));
    const nodes = stageRef.current?.querySelectorAll<HTMLElement>(
      `[data-spread="${active}"] .ink`
    );
    const timers: number[] = [];
    nodes?.forEach((n, i) => {
      timers.push(window.setTimeout(() => n.classList.add("inked"), 650 + i * 260));
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [active]);

  const outerH = vh - NAV_H + g.phases * g.phaseVh * vh;

  const scrollToProgress = useCallback((prog: number) => {
    const outer = outerRef.current;
    if (!outer) return;
    const top = outer.getBoundingClientRect().top + window.scrollY;
    const dist = outer.offsetHeight - (window.innerHeight - NAV_H);
    window.scrollTo({ top: top - NAV_H + prog * dist, behavior: "smooth" });
  }, []);

  const goToSpread = useCallback(
    (s: number | "end" | "start") => {
      if (s === "start") return window.scrollTo({ top: 0, behavior: "smooth" });
      if (s === "end") return scrollToProgress(1);
      scrollToProgress(single ? (2 * s + 1) / g.phases : (s + 1) / g.phases);
    },
    [scrollToProgress, single, g.phases]
  );

  // In-page anchors (navbar, buttons, footer links) turn to the matching page.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href");
      if (!href || !(href in ANCHORS)) return;
      e.preventDefault();
      goToSpread(ANCHORS[href]);
    };
    document.addEventListener("click", onClick);
    const hash = window.location.hash;
    if (hash in ANCHORS) window.setTimeout(() => goToSpread(ANCHORS[hash]), 300);
    return () => document.removeEventListener("click", onClick);
  }, [goToSpread]);

  // Hovering with the pen inks whatever it touches.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const over = (e: MouseEvent) => {
      (e.target as HTMLElement).closest(".ink")?.classList.add("inked");
    };
    stage.addEventListener("mouseover", over);
    return () => stage.removeEventListener("mouseover", over);
  }, []);

  const bookW = single ? g.pw : g.pw * 2;

  return (
    <div
      ref={outerRef}
      className="book-only relative"
      style={{ height: outerH }}
      aria-label="Цахим дэвтэр"
    >
      <div
        ref={stageRef}
        className="book-stage sticky flex items-center justify-center overflow-hidden"
        style={{ top: NAV_H, height: vh - NAV_H, paddingBottom: single ? 52 : 46 }}
      >
        <motion.div className="relative" style={{ width: bookW, height: g.ph, x }}>
          <span
            aria-hidden="true"
            className="absolute inset-x-6 -bottom-3 h-6 rounded-[50%] bg-cloth-deep/30 blur-xl"
          />
          {Array.from({ length: g.leaves }, (_, k) => (
            <Leaf key={k} k={k} p={p} layout={layout} />
          ))}
        </motion.div>

        <Tracker p={p} active={active} visited={visited} onGo={goToSpread} single={single} phases={g.phases} />
        <PenCursor stageRef={stageRef} />
      </div>
    </div>
  );
}

/* ---------- a leaf: two faces that turn about the spine ---------- */

function Face({
  layout,
  flipped,
  flat,
  hidden,
  shade,
  shadeDir,
  children,
}: {
  layout: Layout;
  flipped?: boolean;
  flat?: boolean;
  hidden?: boolean;
  shade: MotionValue<number>;
  shadeDir: "l" | "r";
  children: React.ReactNode;
}) {
  const g = geometry(layout);
  const spread = layout.mode === "spread";
  const scale = spread ? layout.scale : 1;
  const cw = spread ? PAGE_W : g.pw;
  const ch = spread ? PAGE_H : g.ph;
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        backfaceVisibility: flat ? undefined : "hidden",
        WebkitBackfaceVisibility: flat ? undefined : "hidden",
        transform: flipped && !flat ? "rotateY(180deg)" : undefined,
        width: g.pw,
        height: g.ph,
        display: hidden ? "none" : undefined,
      }}
    >
      <div style={{ width: cw, height: ch, transform: `scale(${scale})`, transformOrigin: "0 0" }}>
        {children}
      </div>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: shade,
          background:
            shadeDir === "l"
              ? "linear-gradient(to right, rgba(8,30,20,0.85), rgba(8,30,20,0.2))"
              : "linear-gradient(to left, rgba(8,30,20,0.85), rgba(8,30,20,0.2))",
        }}
      />
    </div>
  );
}

const spreadOfPage = (n: number) => (n % 2 === 1 ? (n - 1) / 2 : n / 2 - 1);

function Leaf({ k, p, layout }: { k: number; p: MotionValue<number>; layout: Layout }) {
  const single = layout.mode === "single";
  const g = geometry(layout);
  const lastLeaf = g.leaves - 1;
  const fixed = single && k === lastLeaf; // on a phone the back cover simply stays put
  const rot = useTransform(p, [(k + 0.18) / g.phases, (k + 0.82) / g.phases], [0, -180], {
    clamp: true,
  });
  const z = useTransform(rot, (r) =>
    r > -0.01 ? g.leaves - k : r < -179.99 ? (single ? 0 : k + 1) : 100
  );
  const frontShade = useTransform(rot, [0, -90], [0, 0.45]);
  const backShade = useTransform(rot, [-90, -180], [0.45, 0]);

  // Text is only crisp on a flat layer. A page at rest (on the right or turned over to the
  // left) is drawn with no 3D transform at all; only a page that is mid-turn gets perspective.
  const stateOf = (r: number): "r" | "t" | "l" => (r > -0.05 ? "r" : r < -179.95 ? "l" : "t");
  const [st, setSt] = useState<"r" | "t" | "l">(() => stateOf(rot.get()));
  useMotionValueEvent(rot, "change", (r) => {
    const next = stateOf(r);
    setSt((prev) => (prev === next ? prev : next));
  });
  const turning = st === "t" && !fixed;

  let front: React.ReactNode;
  let back: React.ReactNode;

  if (single) {
    // page n = leaf n; page 0 is the front cover, 25 the back cover
    front =
      k === 0 ? (
        <FrontCover />
      ) : k === lastLeaf ? (
        <BackCover />
      ) : (
        <div className="h-full w-full" data-spread={spreadOfPage(k)}>
          <Shell side="R" n={k} compact>
            {PAGES[k - 1].node}
          </Shell>
        </div>
      );
    back = <div className="h-full w-full bg-surface" />;
  } else {
    const frontN = 2 * k;
    const backN = 2 * k + 1;
    front =
      k === 0 ? (
        <FrontCover />
      ) : (
        <div className="h-full w-full" data-spread={spreadOfPage(frontN)}>
          <Shell side="R" n={frontN}>
            {PAGES[frontN - 1].node}
          </Shell>
        </div>
      );
    back =
      k === lastLeaf ? (
        <BackCover />
      ) : (
        <div className="h-full w-full" data-spread={spreadOfPage(backN)}>
          <Shell side="L" n={backN}>
            {PAGES[backN - 1].node}
          </Shell>
        </div>
      );
  }

  const flatLeft = st === "l" && !fixed;
  return (
    <motion.div
      className="absolute top-0"
      style={{
        left: single ? 0 : "50%",
        width: g.pw,
        height: g.ph,
        ...(turning
          ? {
              transformOrigin: "left center",
              transformStyle: "preserve-3d" as const,
              transformPerspective: 3000,
              rotateY: rot,
              zIndex: 100,
            }
          : {
              // resting: no rotation, a page turned over simply sits on the left half
              x: flatLeft && !single ? -g.pw : 0,
              zIndex: st === "l" && !fixed ? (single ? 0 : k + 1) : g.leaves - k,
              opacity: flatLeft && single ? 0 : 1,
              pointerEvents: flatLeft && single ? ("none" as const) : undefined,
            }),
      }}
    >
      {/* both faces stay mounted so a page keeps its ink and scroll position */}
      <Face
        layout={layout}
        flat={!turning}
        hidden={!turning && flatLeft}
        shade={frontShade}
        shadeDir="l"
      >
        {front}
      </Face>
      <Face
        layout={layout}
        flipped={turning}
        flat={!turning}
        hidden={!turning && !flatLeft}
        shade={backShade}
        shadeDir="r"
      >
        {back}
      </Face>
    </motion.div>
  );
}

/* ---------- the pen ---------- */

export function PenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M31.5 3.5l5 5-20 20-5-5z" fill="#0b5233" stroke="#0f2118" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11.5 23.5l5 5-9 3.5z" fill="#e2c995" stroke="#0f2118" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7.5 32l1.4-3.7 2.3 2.3z" fill="#0f2118" />
      <path d="M31.5 3.5l2.6-2.6 5 5-2.6 2.6z" fill="#c4352b" stroke="#0f2118" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function PenCursor({ stageRef }: { stageRef: React.RefObject<HTMLDivElement | null> }) {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 900, damping: 50, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 900, damping: 50, mass: 0.2 });
  const [on, setOn] = useState(false);
  const [down, setDown] = useState(false);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(pointer: fine)");
    setFine(m.matches);
    const stage = stageRef.current;
    if (!stage || !m.matches) return;
    stage.classList.add("pen-active");
    const move = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setOn(true);
    };
    const leave = () => setOn(false);
    const dn = () => setDown(true);
    const up = () => setDown(false);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    stage.addEventListener("pointerdown", dn);
    window.addEventListener("pointerup", up);
    return () => {
      stage.classList.remove("pen-active");
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
      stage.removeEventListener("pointerdown", dn);
      window.removeEventListener("pointerup", up);
    };
  }, [stageRef, mx, my]);

  if (!fine) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ x: sx, y: sy, opacity: on ? 1 : 0 }}
    >
      <motion.div
        animate={{ scale: down ? 0.88 : 1, rotate: down ? -6 : 0 }}
        transition={{ duration: 0.12 }}
        style={{ translateX: -7, translateY: -29, transformOrigin: "7px 29px" }}
      >
        <PenIcon className="h-9 w-9 drop-shadow-[0_3px_3px_rgba(8,30,20,0.35)]" />
      </motion.div>
    </motion.div>
  );
}

/* ---------- the pen that ticks off pages ---------- */

function Tracker({
  p,
  active,
  visited,
  onGo,
  single,
  phases,
}: {
  p: MotionValue<number>;
  active: number;
  visited: Set<number>;
  onGo: (s: number) => void;
  single: boolean;
  phases: number;
}) {
  const left = useTransform(
    p,
    single ? [1 / phases, 24 / phases] : [1 / phases, 12 / phases],
    ["0%", "100%"],
    { clamp: true }
  );
  const label =
    active < 0 ? "Хавтас" : active >= SPREADS ? "Төгсгөл" : SPREAD_NAMES[active];

  return (
    <div className="absolute bottom-2 left-1/2 z-40 w-[min(560px,84vw)] -translate-x-1/2 select-none">
      <p className="hand mb-1 text-center text-[22px] leading-none text-cloth">{label}</p>
      <div className="relative h-8">
        <svg
          viewBox="0 0 560 12"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-[18px] h-3 w-full"
          aria-hidden="true"
        >
          <path
            d="M0 6 Q20 1 40 6 T80 6 T120 6 T160 6 T200 6 T240 6 T280 6 T320 6 T360 6 T400 6 T440 6 T480 6 T520 6 T560 6"
            fill="none"
            stroke="rgba(15,33,24,0.45)"
            strokeWidth="1.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {Array.from({ length: SPREADS }, (_, i) => {
          const done = visited.has(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => onGo(i)}
              aria-label={`${SPREAD_NAMES[i]} хуудас руу очих`}
              title={SPREAD_NAMES[i]}
              className="absolute top-0 flex h-8 w-6 -translate-x-1/2 flex-col items-center justify-end"
              style={{ left: `${(i / (SPREADS - 1)) * 100}%` }}
            >
              <span
                className={`hand absolute -top-1 text-[24px] leading-none text-pen transition-opacity duration-500 ${
                  done ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              >
                ✓
              </span>
              <span
                className={`mb-[9px] h-2 w-2 rounded-full border-2 transition-colors ${
                  i === active ? "border-pen bg-pen" : "border-text/60 bg-surface"
                }`}
              />
            </button>
          );
        })}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute top-[2px] -translate-x-1/2"
          style={{ left }}
        >
          <PenIcon className="h-7 w-7 -translate-y-1 drop-shadow-[0_2px_2px_rgba(8,30,20,0.3)]" />
        </motion.span>
      </div>
    </div>
  );
}
