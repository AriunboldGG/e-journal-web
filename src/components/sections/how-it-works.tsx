import { UserPlus, Store, PackagePlus, ScanBarcode, LineChart, Rocket } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { icon: UserPlus, title: "Бүртгүүлэх", text: "Хэдхэн минутын дотор апп-д бүртгэл үүсгэнэ." },
  { icon: Store, title: "Дэлгүүр үүсгэх", text: "Өөрийн дэлгүүр эсвэл салбараа апп-д нэмнэ." },
  { icon: PackagePlus, title: "Бараа нэмэх", text: "Борлуулах бараагаа жагсаалтад оруулна." },
  { icon: ScanBarcode, title: "Худалдаа хийх", text: "Борлуулалтаа апп дээрээс шууд бүртгэнэ." },
  { icon: LineChart, title: "Тайлан харах", text: "Ашиг, орлого, зарлагаа бодит цагт хянана." },
  { icon: Rocket, title: "Бизнесээ өсгөх", text: "Дата дээр үндэслэн зөв шийдвэр гаргана." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Хэрхэн ажилладаг"
          title="6 алхмаар эхлээрэй"
          description="Цахим дэвтэрийг ашиглаж эхлэхэд юу ч төвөгтэй зүйл байхгүй."
        />

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="absolute left-1/2 top-8 hidden h-px w-[calc(100%-8rem)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,var(--color-border)_15%,var(--color-border)_85%,transparent)] lg:block" />

          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="relative flex flex-col items-start gap-4 rounded-3xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#169b62,#22c55e)] text-white shadow-[0_10px_20px_-8px_rgba(22,155,98,0.5)]">
                    <s.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-bold text-text-secondary">
                    Алхам {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
