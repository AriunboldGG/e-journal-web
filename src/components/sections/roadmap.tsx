import { Truck, Gift, WifiOff, ClipboardList, ScanSearch, BrainCircuit } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const roadmap = [
  { icon: Truck, title: "Хүргэлтийн тооцоо", text: "Хүргэлтийн захиалга, тооцооллыг апп-д нэгтгэнэ." },
  { icon: Gift, title: "Урамшууллын модуль", text: "Хэрэглэгчдэд зориулсан урамшуулал, хөнгөлөлтийн систем." },
  { icon: WifiOff, title: "Офлайн горим", text: "Интернэтгүй үед ч борлуулалт хийх боломж." },
  { icon: ClipboardList, title: "Тооллого", text: "Бараа материалын тооллогыг апп дотроос хийнэ." },
  { icon: ScanSearch, title: "Зургаар хайх", text: "Барааг зургаар нь хайж олох боломж." },
  { icon: BrainCircuit, title: "AI дүн шинжилгээ", text: "Хиймэл оюун ухаанд суурилсан бизнесийн зөвлөмж." },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Ирээдүйн төлөвлөгөө"
          title="Бид үргэлжлүүлэн хөгжиж байна"
          description="Цахим дэвтэр байнга сайжирч, шинэ боломжуудаар баяжсаар байх болно."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block" />
          <div className="flex flex-col gap-8">
            {roadmap.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="flex items-start gap-6">
                  <span className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-primary sm:flex">
                    <r.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-1 items-start gap-4 rounded-2xl border border-border bg-background p-5 sm:items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:hidden">
                      <r.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-text">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {r.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
