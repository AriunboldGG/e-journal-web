import {
  TrendingUp,
  PiggyBank,
  Receipt,
  Boxes,
  CreditCard,
  Star,
  TrendingDown,
  History,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const reportTypes = [
  { icon: TrendingUp, title: "Борлуулалтын тайлан" },
  { icon: PiggyBank, title: "Ашгийн тайлан" },
  { icon: Receipt, title: "Зарлагын тайлан" },
  { icon: Boxes, title: "Бараа материалын тайлан" },
  { icon: CreditCard, title: "Төлбөрийн хэлбэрийн тайлан" },
  { icon: Star, title: "Хамгийн их зарагдсан бараа" },
  { icon: TrendingDown, title: "Удаан зарагдсан бараа" },
  { icon: History, title: "Барааны эргэлтийн тайлан" },
];

export function Reports() {
  return (
    <section id="reports" className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Тайлан ба аналитик"
            title="Бизнесээ тоо баримтаар удирд"
            description="Цахим дэвтэр таны бизнесийн бүх мэдээллийг ойлгомжтой, гоё харагдацтай тайлан болгож харуулна."
          />

          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {reportTypes.map((r) => (
              <RevealItem key={r.title}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <r.icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="text-sm font-medium text-text">{r.title}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_30px_60px_-30px_rgba(16,24,40,0.2)] sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-text-secondary">Энэ сарын ашиг</p>
                <p className="text-2xl font-bold text-text">₮24,860,000</p>
              </div>
              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-[#0f8a52]">
                +21.4%
              </span>
            </div>

            <div className="mb-8 flex h-40 items-end gap-2">
              {[35, 55, 40, 70, 50, 85, 60, 95, 72, 100, 80, 92].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-lg bg-[linear-gradient(180deg,#22c55e,#169b62)] opacity-90 transition-all duration-500 hover:opacity-100"
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
                <div key={row.label} className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-sm text-text-secondary">
                    {row.label}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/[0.05]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#169b62,#22c55e)]"
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                  <span className="w-9 text-right text-sm font-semibold text-text">
                    {row.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
