"use client";

import { ArrowDown, ArrowRight, PlayCircle, QrCode } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { AppShot } from "@/components/ui/app-shot";
import { SITE } from "@/lib/constants";
import { entries } from "@/components/sections/hero";
import { stats } from "@/components/sections/trust-stats";
import { pillars } from "@/components/sections/about";
import { reasons } from "@/components/sections/why-choose-us";
import { features } from "@/components/sections/features";
import { showcases } from "@/components/sections/app-showcase";
import { steps } from "@/components/sections/how-it-works";
import { oldWay, newWay } from "@/components/sections/benefits";
import { reportTypes } from "@/components/sections/reports";
import { roadmap } from "@/components/sections/roadmap";
import { faqs } from "@/components/sections/faq";
import { stores } from "@/components/sections/download";
import { info } from "@/components/sections/contact";
import { columns } from "@/components/layout/footer";

/** Every page is authored on one fixed canvas and scaled to the book. */
export const PAGE_W = 620;
export const PAGE_H = 760;

/* ---------- page furniture ---------- */

/** Font size that holds its value on the full page and eases down on a narrow one. */
const fs = (px: number) =>
  `clamp(${Math.round(px * 0.62)}px, ${(px / 6.2).toFixed(2)}cqw, ${px}px)`;

function Shell({
  side,
  n,
  children,
  compact,
}: {
  side: "L" | "R";
  n: number;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-surface text-text shadow-[inset_0_0_0_1px_rgba(15,33,24,0.12)]"
      style={{ containerType: "inline-size" }}
    >
      {/* the gutter: paper curves into the spine */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-10 w-14"
        style={{
          [side === "L" ? "right" : "left"]: 0,
          background: `linear-gradient(${
            side === "L" ? "to left" : "to right"
          }, rgba(8,61,38,0.2), rgba(8,61,38,0.05) 45%, transparent)`,
        }}
      />
      <div
        className={`absolute inset-0 flex flex-col ${
          compact ? "overflow-y-auto overscroll-y-auto" : ""
        }`}
        style={{ padding: compact ? "30px 22px 48px" : "56px 52px 52px" }}
      >
        <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      </div>
      <span
        aria-hidden="true"
        className={`hand pointer-events-none absolute bottom-3 z-10 text-[20px] leading-none text-text-secondary ${
          side === "L" ? "left-5" : "right-5"
        }`}
      >
        {n}
      </span>
    </div>
  );
}

function Ink({ children }: { children: React.ReactNode }) {
  return <span className="ink">{children}</span>;
}

function Head({
  title,
  desc,
  size = 32,
}: {
  title: string;
  desc?: string;
  size?: number;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3">
      <h2
        className="text-balance font-extrabold leading-[1.1] tracking-tight"
        style={{ fontSize: fs(size) }}
      >
        <Ink>{title}</Ink>
      </h2>
      {desc && (
        <p className="text-[15px] leading-relaxed text-text-secondary">{desc}</p>
      )}
    </div>
  );
}

function Ruled({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`ruled-28 text-[14.5px] leading-[28px] ${className ?? ""}`}>{children}</div>;
}

function Row({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-b border-dashed border-text/25 py-[9px]">
      <h3 className="text-[14.5px] font-bold leading-snug">
        <Ink>{title}</Ink>
      </h3>
      <p className="mt-0.5 text-[13px] leading-[1.45] text-text-secondary">{text}</p>
    </div>
  );
}

/* ---------- covers ---------- */

export function FrontCover() {
  return (
    <div
      className="cloth stitch relative flex h-full w-full flex-col items-center justify-center gap-8 rounded-r-md"
      style={{ containerType: "inline-size" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-9"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.38), rgba(0,0,0,0.12) 60%, transparent)",
        }}
      />
      <div className="relative flex w-[72%] flex-col items-center gap-5 bg-surface px-6 pb-9 pt-10 text-center text-text shadow-[0_14px_22px_-12px_rgba(0,0,0,0.6)]">
        <span className="tape -top-3 left-1/2 w-24 -translate-x-1/2 -rotate-2" />
        <Logo size={84} className="rounded-2xl" />
        <p className="font-extrabold leading-none tracking-tight" style={{ fontSize: fs(38) }}>Цахим дэвтэр</p>
        <span className="block h-[7px] w-24 border-y-2 border-pen" aria-hidden="true" />
        <p className="text-balance text-[15px] leading-snug text-text-secondary">{SITE.tagline}</p>
      </div>
      <p className="hand flex flex-col items-center text-[28px] leading-none text-cloth-ink">
        Нээхийн тулд гүйлгэнэ үү
        <ArrowDown className="mt-2 h-6 w-6 animate-bounce" strokeWidth={2.25} />
      </p>
    </div>
  );
}

export function BackCover() {
  return (
    <div
      className="cloth stitch relative flex h-full w-full flex-col items-center justify-between gap-6 overflow-y-auto rounded-l-md px-[8%] py-[7%] text-center"
      style={{ containerType: "inline-size" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-9"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.38), rgba(0,0,0,0.12) 60%, transparent)",
        }}
      />
      <div className="relative flex flex-col items-center gap-5">
        <span className="hand -rotate-2 text-[32px] leading-none text-cloth-ink">Аппликейшн татах</span>
        <h2 className="text-balance font-extrabold leading-[1.05] tracking-tight text-white" style={{ fontSize: fs(38) }}>
          <span className="pen-underline-light">Бизнесээ өнөөдрөөс цахимжуулаарай</span>
        </h2>
        <p className="text-[15px] text-cloth-ink">Цахим дэвтэр аппликейшн татах холбоосууд</p>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col gap-2.5">
            {stores.map((s) => {
              const cls =
                "flex w-[200px] items-center gap-3 rounded-lg bg-surface px-4 py-2.5 text-left transition-transform hover:-translate-y-0.5";
              const inner = (
                <>
                  <s.icon className="h-6 w-6 text-cloth-deep" />
                  <div>
                    <p className="text-[11px] leading-tight text-text-secondary">{s.sub}</p>
                    <p className="text-sm font-bold leading-tight text-text">{s.name}</p>
                  </div>
                </>
              );
              return s.href ? (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}-с татах`} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={s.name} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="relative flex rotate-3 flex-col items-center gap-1.5 bg-surface px-3.5 pb-2.5 pt-4 text-text shadow-[0_12px_18px_-10px_rgba(0,0,0,0.6)]">
            <span className="tape -top-3 left-1/2 w-14 -translate-x-1/2 -rotate-3" />
            <QrCode className="h-20 w-20" strokeWidth={1.25} />
            <p className="text-[11px] font-semibold">QR кодоор татах</p>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-5 text-left text-cloth-ink">
        <div className="grid grid-cols-3 gap-4">
          {columns.map((c) => (
            <div key={c.title} className="flex flex-col gap-1.5">
              <p className="hand text-[22px] leading-none text-white">{c.title}</p>
              {c.links.map((l) => (
                <a key={l.label} href={l.href} className="text-[12.5px] hover:text-white hover:underline">
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 border-t border-white/25 pt-4 text-[12px]">
          <span>
            {SITE.companyNameMn} · {SITE.email} · {SITE.phone}
          </span>
          <span className="flex flex-wrap items-center justify-between gap-2">
            <span>
              © {new Date().getFullYear()} {SITE.companyNameMn}. Бүх эрх хуулиар хамгаалагдсан.
            </span>
            <span className="flex gap-4">
              <a href="/privacy" className="hover:text-white hover:underline">Нууцлалын бодлого</a>
              <a href="#" className="hover:text-white hover:underline">Үйлчилгээний нөхцөл</a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- pages 1 to 24 ---------- */

const F = features;
const showcasePage = (i: number) => {
  const s = showcases[i];
  return (
    <div className="flex h-full flex-col gap-3">
      <span className="hand inline-flex items-center gap-2 text-[28px] leading-none text-pen">
        <s.icon className="h-5 w-5" strokeWidth={2.25} /> {s.tag}
      </span>
      <h2 className="text-balance font-extrabold leading-[1.12] tracking-tight" style={{ fontSize: fs(27) }}>
        <Ink>{s.title}</Ink>
      </h2>
      <p className="text-[14px] leading-relaxed text-text-secondary">{s.text}</p>
      <div className="relative mt-1 flex min-h-[450px] flex-1 items-start justify-center overflow-hidden border-2 border-text/70 bg-background pt-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,122,77,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,122,77,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <span className="tape -top-3 left-8 -rotate-6" />
        <span className="tape -top-3 right-8 rotate-6" />
        <AppShot src={s.shot} alt={s.alt} className="w-[190px]" />
      </div>
    </div>
  );
};

export const PAGES: { side: "L" | "R"; node: React.ReactNode }[] = [
  /* 1 */
  {
    side: "L",
    node: (
      <div className="flex h-full flex-col justify-center gap-5">
        <h1 className="text-balance font-extrabold leading-[1.08] tracking-tight" style={{ fontSize: fs(44) }}>
          Цаасан дэвтрийг мартаж.
          <br />
          <span className="pen-underline">Цахим дэвтэр рүү шилжие.</span>
        </h1>
       
        <p className="text-[14px] leading-relaxed text-text-secondary">
          Цаасан дэвтрийг мартаж, бизнесээ гар утаснаасаа удирдаарай! Цахим дэвтэр нь жижиг, дунд бизнес эрхлэгчид, дэлгүүр эзэмшигч, борлуулагчдад зориулсан борлуулалт болон санхүүгийн иж бүрэн тооцооллын функцуудыг шингээсэн гар утасны ухаалаг аппликейшн юм.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Button href="#download" size="md">
            Аппликейшн татах <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#how-it-works" variant="secondary" size="md">
            <PlayCircle className="h-4 w-4" /> Демо үзэх
          </Button>
        </div>
      </div>
    ),
  },
  /* 2 */
  {
    side: "R",
    node: (
      <div className="flex h-full flex-col">
        <h2 className="hand h-[56px] text-[36px] leading-[56px] text-cloth">
          <Ink>Үндсэн боломжууд:</Ink>
        </h2>
        <Ruled>
          {entries.map((e) => (
            <p key={e.label}>
              <span className="font-bold">{e.label}:</span>{" "}
              <span className="text-text-secondary">{e.text}</span>
            </p>
          ))}
        </Ruled>
        <div className="mt-auto flex justify-end pb-4">
          <span className="stamp text-[13px]">50+ бизнес эрхлэгчид бүртгүүлсэн байна</span>
        </div>
      </div>
    ),
  },
  /* 3 */
  {
    side: "L",
    node: (
      <div className="flex h-full flex-col gap-9">
        <div className="grid grid-cols-2 border-y-2 border-text">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-1.5 px-3 py-5 ${i % 2 ? "border-l border-text/25" : ""} ${i > 1 ? "border-t border-text/25" : ""}`}
            >
              <p className="font-mono font-bold leading-none tracking-tight" style={{ fontSize: fs(40) }}>
                {s.decimals ? "99.9%" : `${s.value.toLocaleString("en-US")}${s.suffix}`}
              </p>
              <p className="text-[13px] font-semibold text-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-balance font-extrabold leading-[1.08] tracking-tight" style={{ fontSize: fs(34) }}>
            <Ink>Цахим дэвтэр софт ХХК</Ink>
          </h2>
          <p className="text-[15px] leading-relaxed text-text-secondary">
            Бид Монголын жижиг дунд бизнес эрхлэгчдэд зориулж, энгийн бөгөөд найдвартай, хялбар программ хангамж бүтээх зорилготой технологийн компани юм.
          </p>
        </div>
      </div>
    ),
  },
  /* 4 */
  {
    side: "R",
    node: (
      <Ruled className="pt-[28px]">
        {pillars.map((p) => (
          <div key={p.title} className="pb-[28px]">
            <h3 className="hand text-[28px] leading-[28px] text-cloth">
              <Ink>{p.title}</Ink>
            </h3>
            <p className="pt-[14px] text-text-secondary">{p.text}</p>
          </div>
        ))}
      </Ruled>
    ),
  },
  /* 5 */
  {
    side: "L",
    node: (
      <div className="flex h-full flex-col">
        <Head
          size={30}
          title="Танд яагаад Цахим дэвтэр хэрэгтэй вэ?"
          desc="Бид бизнес эрхлэгчдэд бодит амьдрал дээр тулгардаг асуудлуудыг шийдэхэд зориулсан функцуудыг шингээсэн."
        />
        <div className="border-t-2 border-text">
          {reasons.slice(0, 4).map((r) => (
            <Row key={r.title} title={r.title} text={r.text} />
          ))}
        </div>
      </div>
    ),
  },
  /* 6 */
  {
    side: "R",
    node: (
      <div className="flex h-full flex-col">
        <div className="border-t-2 border-text">
          {reasons.slice(4).map((r) => (
            <Row key={r.title} title={r.title} text={r.text} />
          ))}
        </div>
      </div>
    ),
  },
  /* 7 */
  {
    side: "L",
    node: (
      <div className="flex h-full flex-col">
        <Head
          size={30}
          title="Бизнест хэрэгтэй бүх үйлдэл нэг дор"
          desc="Борлуулалт, бараа бүртгэл, авлага, өглөг, хүргэлт тайлан — Цахим дэвтэр бүгдийг нэг дор шингээв."
        />
        <div className="border-t-2 border-text">
          {F.slice(0, 6).map((f) => (
            <FeatureRow key={f.title} f={f} />
          ))}
        </div>
      </div>
    ),
  },
  /* 8 */
  {
    side: "R",
    node: (
      <div className="border-t-2 border-text">
        {F.slice(6, 13).map((f) => (
          <FeatureRow key={f.title} f={f} />
        ))}
      </div>
    ),
  },
  /* 9 */
  {
    side: "L",
    node: (
      <div className="border-t-2 border-text">
        {F.slice(13).map((f) => (
          <FeatureRow key={f.title} f={f} />
        ))}
      </div>
    ),
  },
  /* 10 */
  {
    side: "R",
    node: (
      <div className="flex h-full flex-col gap-4">
        <div>
          <h2 className="mb-2 text-balance text-[22px] font-extrabold leading-tight tracking-tight text-text-secondary">
            <Ink>Таны гар утсан дахь хувийн санхүүч</Ink>
          </h2>
          <p className="text-[13px] leading-snug text-text-secondary">
            Цахим дэвтэр таны гар утсан дээр байнга байж, бизнесээ хаанаас ч удирдах боломжийг олгоно.
          </p>
        </div>
        <div className="min-h-0 flex-1">{showcasePage(0)}</div>
      </div>
    ),
  },
  /* 11 */
  { side: "L", node: showcasePage(1) },
  /* 12 */
  { side: "R", node: showcasePage(2) },
  /* 13 */
  { side: "L", node: showcasePage(3) },
  /* 14 */
  {
    side: "R",
    node: (
      <div className="flex h-full flex-col">
        <Head size={34} title="6 алхмаар эхлээрэй" />
        <Ruled className="relative pl-[44px]">
          {steps.slice(0, 3).map((s, i) => (
            <Step key={s.title} s={s} i={i} />
          ))}
        </Ruled>
      </div>
    ),
  },
  /* 15 */
  {
    side: "L",
    node: (
      <Ruled className="relative pl-[44px] pt-[28px]">
        {steps.slice(3).map((s, i) => (
          <Step key={s.title} s={s} i={i + 3} />
        ))}
      </Ruled>
    ),
  },
  /* 16 */
  {
    side: "R",
    node: (
      <div className="flex h-full flex-col">
        <Head
          size={30}
          title="Цаасан дэвтэр vs Цахим дэвтэр"
          desc="Цаасан дэвтрээс цахим системд шилжихэд юу өөрчлөгдөх вэ?"
        />
        <div className="relative -rotate-1 border border-border bg-[#e6e4d6] px-6 pb-4 pt-5 text-[#4a4a3c] shadow-[0_12px_18px_-14px_rgba(0,0,0,0.5)]">
          <span className="tape -top-3 left-8 -rotate-3 bg-[rgba(120,120,90,0.28)]" />
          <h3 className="hand mb-1 text-[34px] leading-none">Хуучин дэвтэр</h3>
          {oldWay.map((t) => (
            <p key={t} className="strike-pen border-b border-[#4a4a3c]/25 py-2.5 text-[14px]">
              {t}
            </p>
          ))}
        </div>
      </div>
    ),
  },
  /* 17 */
  {
    side: "L",
    node: (
      <div className="sheet relative mt-4 rotate-1 border-2 border-cloth px-6 pb-5 pt-5">
        <span className="tape -top-3 right-8 rotate-3" />
        <h3 className="hand mb-1 text-[34px] leading-none text-cloth">
          <Ink>Цахим дэвтэр</Ink>
        </h3>
        {newWay.map((t) => (
          <p key={t} className="flex items-start gap-3 border-b border-text/20 py-3 text-[14px] font-semibold">
            <span aria-hidden="true" className="hand -mt-1 text-[28px] leading-none text-cloth">✓</span>
            {t}
          </p>
        ))}
      </div>
    ),
  },
  /* 18 */
  {
    side: "R",
    node: (
      <div className="flex h-full flex-col">
        <Head
          size={30}
          title="Бизнесээ тоо баримтаар удирд"
          desc="Цахим дэвтэр таны бизнесийн бүх мэдээллийг ойлгомжтой, тодорхой тайлан болгож харуулна."
        />
        <div className="border-t-2 border-text">
          {reportTypes.map((r) => (
            <div key={r} className="flex items-baseline gap-3 border-b border-text/25 py-[11px]">
              <p className="text-[14.5px] font-semibold">
                <Ink>{r}</Ink>
              </p>
              <span className="leader" aria-hidden="true" />
              <span aria-hidden="true" className="hand text-[24px] leading-none text-cloth">✓</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  /* 19 */
  {
    side: "L",
    node: (
      <div className="sheet relative rotate-1 border-2 border-text/80 p-6">
        <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
        <div className="mb-5 flex items-end justify-between gap-4 pt-1">
          <div>
            <p className="text-xs font-semibold text-text-secondary">Энэ сарын ашиг</p>
            <p className="pen-underline font-mono text-[28px] font-bold">₮24,860,000</p>
          </div>
          <span className="stamp text-xs">+21.4%</span>
        </div>
        <div className="mb-7 flex h-40 items-end gap-2 border-b-2 border-text/80">
          {[35, 55, 40, 70, 50, 85, 60, 95, 72, 100, 80, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 border-2 border-cloth-deep bg-[repeating-linear-gradient(135deg,var(--color-cloth)_0_3px,var(--color-cloth-deep)_3px_5px)]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {[
            { label: "Цагаан цамц", value: 82 },
            { label: "Ноосон малгай", value: 64 },
            { label: "Оймс", value: 47 },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-[13px] font-medium">{row.label}</span>
              <div className="h-3 flex-1 border border-text/70 bg-surface">
                <div className="h-full bg-cloth" style={{ width: `${row.value}%` }} />
              </div>
              <span className="w-10 text-right font-mono text-[13px] font-bold">{row.value}%</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  /* 20 */
  {
    side: "R",
    node: (
      <div className="flex h-full flex-col">
        <Head
          size={30}
          title="Бид үргэлжлүүлэн хөгжүүлсээр байна"
          desc="Цахим дэвтэр байнга сайжирч, шинэ боломжуудаар баяжсаар байх болно."
        />
        <div className="border-t-2 border-text">
          {roadmap.map((r) => (
            <div key={r.title} className="flex items-start gap-3.5 border-b border-text/25 py-[11px]">
              <span aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 rounded-[3px] border-2 border-text" />
              <div>
                <h3 className="text-[15px] font-bold">
                  <Ink>{r.title}</Ink>
                </h3>
                <p className="text-[13px] leading-snug text-text-secondary">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  /* 21 */
  {
    side: "L",
    node: (
      <div className="flex h-full flex-col">
        <Head size={30} title="Асуух зүйл байна уу?" desc="Хамгийн олон асуудаг асуултуудын хариултыг эндээс олоорой." />
        <div className="border-t-2 border-text">
          {faqs.slice(0, 4).map((f) => (
            <QA key={f.q} f={f} />
          ))}
        </div>
      </div>
    ),
  },
  /* 22 */
  {
    side: "R",
    node: (
      <div className="border-t-2 border-text">
        {faqs.slice(4).map((f) => (
          <QA key={f.q} f={f} />
        ))}
      </div>
    ),
  },
  /* 23 */
  {
    side: "L",
    node: (
      <div className="flex h-full flex-col">
        <Head
          size={32}
          title="Бидэнтэй холбоо барих"
          desc="Асуулт, санал хүсэлт байвал бидэнд бичээрэй, тун удахгүй хариу өгөх болно."
        />
        <p className="hand mb-2 text-[30px] leading-none text-cloth">{SITE.companyNameMn}</p>
        <div className="border-t-2 border-text">
          {info.map((it) => (
            <div key={it.label} className="flex items-center gap-4 border-b border-text/25 py-3">
              <it.icon className="h-5 w-5 shrink-0 text-cloth" strokeWidth={1.75} />
              <div>
                <p className="text-[11.5px] font-semibold text-text-secondary">{it.label}</p>
                <p className="text-[14.5px] font-medium">{it.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  /* 24 */
  {
    side: "R",
    node: (
      <form className="flex h-full flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-5">
          <Field id="b-name" label="Нэр" ph="Таны нэр" type="text" ac="name" />
          <Field id="b-phone" label="Утасны дугаар" ph="99xxxxxx" type="tel" ac="tel" />
        </div>
        <Field id="b-email" label="И-мэйл" ph="name@example.com" type="email" ac="email" />
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="b-msg" className="text-sm font-bold">Мессеж</label>
          <textarea
            id="b-msg"
            name="message"
            placeholder="Бидэнд юу тусалж чадах вэ?"
            className="ruled-28 flex-1 resize-none bg-transparent px-1 text-[15px] leading-[28px] outline-none placeholder:text-text-secondary/70"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-cloth px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_14px_-8px_rgba(8,61,38,0.6)] transition-colors hover:bg-cloth-deep"
        >
          Илгээх
        </button>
      </form>
    ),
  },
];

/* ---------- small page pieces ---------- */

function FeatureRow({ f }: { f: (typeof features)[number] }) {
  return (
    <div className="flex items-start gap-3.5 border-b border-dashed border-text/25 py-[9px]">
      <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-cloth" strokeWidth={1.75} />
      <div>
        <h3 className="text-[14.5px] font-bold leading-snug">
          <Ink>{f.title}</Ink>
        </h3>
        <p className="mt-0.5 text-[12.5px] leading-[1.4] text-text-secondary">{f.text}</p>
      </div>
    </div>
  );
}

function Step({ s, i }: { s: (typeof steps)[number]; i: number }) {
  return (
    <div className="relative pb-[28px]">
      <span
        aria-hidden="true"
        className="hand absolute -left-[44px] top-0 text-[28px] leading-[28px] text-pen"
      >
        {i + 1}.
      </span>
      <h3 className="text-[17px] font-bold leading-[28px]">
        <span className="mr-2 font-mono text-[11px] font-semibold text-text-secondary">Алхам {i + 1}</span>
        <Ink>{s.title}</Ink>
      </h3>
      <p className="text-text-secondary">{s.text}</p>
    </div>
  );
}

function QA({ f }: { f: (typeof faqs)[number] }) {
  return (
    <div className="border-b border-text/25 py-3">
      <h3 className="text-[14.5px] font-bold leading-snug">
        <Ink>{f.q}</Ink>
      </h3>
      <p className="hand mt-1 text-[20px] leading-[1.2] text-cloth">{f.a}</p>
    </div>
  );
}

function Field({
  id,
  label,
  ph,
  type,
  ac,
}: {
  id: string;
  label: string;
  ph: string;
  type: string;
  ac: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-bold">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={ac}
        placeholder={ph}
        className="rounded-none border-0 border-b-2 border-text/70 bg-transparent px-1 py-2 text-[15px] outline-none placeholder:text-text-secondary/70 focus:border-pen"
      />
    </div>
  );
}

export { Shell };
