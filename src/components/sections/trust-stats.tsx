import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const stats = [
  { value: 500, suffix: "+", label: "Бизнес эрхлэгчид" },
  { value: 15000, suffix: "+", label: "Гүйлгээ сар бүр" },
  { value: 99.9, suffix: "%", label: "Тасралтгүй ажиллагаа", decimals: true },
  { value: 24, suffix: "/7", label: "Дэмжлэг үйлчилгээ" },
];

export function TrustStats() {
  return (
    <section className="relative border-y border-border bg-surface py-14">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((s) => (
            <RevealItem key={s.label} className="flex flex-col items-center gap-1.5 text-center">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {s.decimals ? (
                  <>
                    99.9<span>%</span>
                  </>
                ) : (
                  <Counter value={s.value} suffix={s.suffix} />
                )}
              </p>
              <p className="text-sm text-text-secondary">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
