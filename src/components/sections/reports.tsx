import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export const reportTypes = [
  "Борлуулалтын тайлан",
  "Ашгийн тайлан",
  "Зарлагын тайлан",
  "Бараа материалын тайлан",
  "Төлбөрийн хэлбэрийн тайлан",
  "Хамгийн их зарагдсан бараа",
  "Удаан зарагдсан бараа",
  "Барааны эргэлтийн тайлан",
];

/** Spec table on one side, the month's profit page on the other. */
export function Reports() {
  return (
    <section id="reports" className="relative py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Тайлан ба аналитик"
            tone="green"
            tabTop="6rem"
            title="Бизнесээ тоо баримтаар удирд"
            description="Цахим дэвтэр таны бизнесийн бүх мэдээллийг ойлгомжтой, тодорхой тайлан болгож харуулна."
          />

          <RevealGroup stagger={0.04} className="flex flex-col border-t-2 border-text">
            {reportTypes.map((r) => (
              <RevealItem key={r}>
                <div className="flex items-baseline gap-3 border-b border-text/25 py-3.5">
                  <p className="text-[15px] font-semibold text-text">{r}</p>
                  <span className="leader" aria-hidden="true" />
                  <span aria-hidden="true" className="hand text-2xl leading-none text-cloth">
                    ✓
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="sheet relative rotate-1 rounded-sm border-2 border-text/85 p-6 sm:p-8">
            <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
            <div className="mb-6 flex items-end justify-between gap-4 pt-2">
              <div>
                <p className="text-xs font-semibold text-text-secondary">Энэ сарын ашиг</p>
                <p className="pen-underline font-mono text-3xl font-bold text-text">₮24,860,000</p>
              </div>
              <span className="stamp text-xs">+21.4%</span>
            </div>

            <div className="mb-8 flex h-40 items-end gap-2 border-b-2 border-text/80">
              {[35, 55, 40, 70, 50, 85, 60, 95, 72, 100, 80, 92].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 border-2 border-cloth-deep bg-[repeating-linear-gradient(135deg,var(--color-cloth)_0_3px,var(--color-cloth-deep)_3px_5px)] transition-all duration-500 hover:bg-cloth"
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
                  <span className="w-28 shrink-0 text-sm font-medium text-text">{row.label}</span>
                  <div className="h-3 flex-1 border border-text/70 bg-surface">
                    <div className="h-full bg-cloth" style={{ width: `${row.value}%` }} />
                  </div>
                  <span className="w-10 text-right font-mono text-sm font-bold text-text">
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
