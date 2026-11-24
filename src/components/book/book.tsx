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
const LEAVES = 13; // 0 = front cover, 1..11 = paper leaves, 12 = back cover
const SPREADS = 12;
const PHASE_VH = 0.85; // scroll distance per page turn, in viewport heights
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

function bookScale() {
  const h = window.innerHeight;
  const w = window.innerWidth;
  return Math.min(1, (h - NAV_H - 90) / PAGE_H, (w * 0.96) / (PAGE_W * 2));
}

function wantsBook() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return bookScale() >= 0.74;
}

export function Book() {
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const apply = () => {
      const on = wantsBook();
      document.documentElement.classList.toggle("book-mode", on);
      setScale(on ? bookScale() : null);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  if (scale === null) return null;
  return <BookInner scale={scale} />;
}

function BookInner({ scale }: { scale: number }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [vh, setVh] = useState(() => window.innerHeight);
  const [active, setActive] = useState(-1); // -1 closed front, 0..11 spreads, 12 closed back
  const [visited, setVisited] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress: p } = useScroll({
    target: outerRef,
    offset: [`start ${NAV_H}px`, "end end"],
  });

  const x = useTransform(
    p,
    [0, 0.18 / LEAVES, 0.82 / LEAVES, 12.18 / LEAVES, 12.82 / LEAVES, 1],
    ["-25%", "-25%", "0%", "0%", "25%", "25%"]
  );

  useMotionValueEvent(p, "change", (v) => {
    const s = Math.max(-1, Math.min(SPREADS, Math.round(v * LEAVES) - 1));
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

  const outerH = vh - NAV_H + LEAVES * PHASE_VH * vh;

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
      scrollToProgress((s + 1) / LEAVES);
    },
    [scrollToProgress]
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
      const el = (e.target as HTMLElement).closest(".ink");
      el?.classList.add("inked");
    };
    stage.addEventListener("mouseover", over);
    return () => stage.removeEventListener("mouseover", over);
  }, []);

  const bookW = PAGE_W * 2 * scale;
  const bookH = PAGE_H * scale;

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
        style={{ top: NAV_H, height: vh - NAV_H, paddingBottom: 46 }}
      >
        <motion.div className="relative" style={{ width: bookW, height: bookH, x }}>
          <span
            aria-hidden="true"
            className="absolute inset-x-6 -bottom-3 h-6 rounded-[50%] bg-cloth-deep/30 blur-xl"
          />
          {Array.from({ length: LEAVES }, (_, k) => (
            <Leaf key={k} k={k} p={p} scale={scale} />
          ))}
        </motion.div>

        <Tracker p={p} active={active} visited={visited} onGo={goToSpread} />
        <PenCursor stageRef={stageRef} />
      </div>
    </div>
  );
}

/* ---------- a leaf: two faces that turn about the spine ---------- */

function Face({
  scale,
  flipped,
  shade,
  children,
  shadeDir,
}: {
  scale: number;
  flipped?: boolean;
  shade: MotionValue<number>;
  shadeDir: "l" | "r";
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: flipped ? "rotateY(180deg)" : undefined,
        width: PAGE_W * scale,
        height: PAGE_H * scale,
      }}
    >
      <div style={{ width: PAGE_W, height: PAGE_H, transform: `scale(${scale})`, transformOrigin: "0 0" }}>
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

function Leaf({ k, p, scale }: { k: number; p: MotionValue<number>; scale: number }) {
  const rot = useTransform(p, [(k + 0.18) / LEAVES, (k + 0.82) / LEAVES], [0, -180], { clamp: true });
  const z = useTransform(rot, (r) => (r > -0.01 ? LEAVES - k : r < -179.99 ? k + 1 : 100));
  const frontShade = useTransform(rot, [0, -90], [0, 0.45]);
  const backShade = useTransform(rot, [-90, -180], [0.45, 0]);

  const frontPage = k === 0 ? null : PAGES[2 * k - 1];
  const backPage = k === LEAVES - 1 ? null : PAGES[2 * k];

  // Page numbers (1-based): leaf k front = 2k, back = 2k+1
  const frontN = 2 * k;
  const backN = 2 * k + 1;
  const spreadOf = (n: number) => (n % 2 === 1 ? (n - 1) / 2 : n / 2 - 1);

  return (
    <motion.div
      className="absolute top-0"
      style={{
        left: "50%",
        width: PAGE_W * scale,
        height: PAGE_H * scale,
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        transformPerspective: 3000,
        rotateY: rot,
        zIndex: z,
      }}
    >
      <Face scale={scale} shade={frontShade} shadeDir="l">
        {k === 0 ? (
          <FrontCover />
        ) : (
          <div data-spread={spreadOf(frontN)}>
            <Shell side="R" n={frontN}>
              {frontPage!.node}
            </Shell>
          </div>
        )}
      </Face>
      <Face scale={scale} flipped shade={backShade} shadeDir="r">
        {k === LEAVES - 1 ? (
          <BackCover />
        ) : (
          <div data-spread={spreadOf(backN)}>
            <Shell side="L" n={backN}>
              {backPage!.node}
            </Shell>
          </div>
        )}
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
}: {
  p: MotionValue<number>;
  active: number;
  visited: Set<number>;
  onGo: (s: number) => void;
}) {
  const left = useTransform(p, [1 / LEAVES, 12 / LEAVES], ["0%", "100%"], { clamp: true });
  const label =
    active < 0 ? "Хавтас" : active >= SPREADS ? "Төгсгөл" : SPREAD_NAMES[active];

  return (
    <div className="absolute bottom-2 left-1/2 z-40 w-[min(560px,70vw)] -translate-x-1/2 select-none">
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
