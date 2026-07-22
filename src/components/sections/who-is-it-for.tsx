import {
  Shirt,
  Footprints,
  Sparkles,
  Store,
  Cpu,
  Tent,
  Gem,
  Package,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const audiences = [
  { icon: Shirt, title: "Хувцасны дэлгүүр" },
  { icon: Footprints, title: "Гутлын дэлгүүр" },
  { icon: Sparkles, title: "Гоо сайхны бүтээгдэхүүн" },
  { icon: Store, title: "Мини маркет" },
  { icon: Cpu, title: "Электроник бараа" },
  { icon: Tent, title: "Захын худалдаачид" },
  { icon: Gem, title: "Гоёл чимэглэл" },
  { icon: Package, title: "Бөөний худалдаа" },
];

export function WhoIsItFor() {
  return (
    <section id="who" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Хэнд зориулагдсан"
          title="Ямар бизнест тохирох вэ?"
          description="Нарантуул, Хархорин, Ням зах болон хот даяарх жижиг дэлгүүрүүдэд тохируулан бүтээсэн."
        />

        <RevealGroup className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {audiences.map((a) => (
            <RevealItem key={a.title}>
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-16px_rgba(22,155,98,0.18)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(22,155,98,0.12),rgba(34,197,94,0.12))] text-primary">
                  <a.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <p className="text-sm font-semibold text-text">{a.title}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
