import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export const stats = [
  { value: 500, suffix: "+", label: "Бизнес эрхлэгчид" },
  { value: 15000, suffix: "+", label: "Бараа бүтээгдэхүүн" },
  { value: 99.9, suffix: "%", label: "Тасралтгүй ажиллагаа", decimals: true },
  { value: 24, suffix: "/7", label: "Дэмжлэг үйлчилгээ" },
];

/** The totals row at the foot of the ledger. */
export function TrustStats() {
  return (
    <section className="relative border-b-2 border-text/85 bg-surface">
      <Container>
        <RevealGroup className="grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <RevealItem
              key={s.label}
              className={`flex flex-col gap-2 border-text/20 px-2 py-9 sm:px-6 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "border-t sm:border-t-0" : ""} ${i > 0 ? "sm:border-l" : ""}`}
            >
              <p className="font-mono text-4xl font-bold tracking-tight text-text sm:text-5xl">
                {s.decimals ? (
                  <>
                    99.9<span>%</span>
                  </>
                ) : (
                  <Counter value={s.value} suffix={s.suffix} />
                )}
              </p>
              <p className="pen-underline w-fit text-sm font-semibold text-text-secondary">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
