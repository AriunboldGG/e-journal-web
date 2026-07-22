import { Check, X, NotebookPen, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const oldWay = [
  "Гараар бичдэг, алдаа гардаг",
  "Дэвтэр үрэгдэх, гээгдэх эрсдэлтэй",
  "Тооцоолол удаан, төвөгтэй",
  "Ашиг, зарлагын тайлан гардаггүй",
  "Барааны нөөцийг мэддэггүй",
];

const newWay = [
  "Автоматаар тооцоолж, алдаагүй",
  "Мэдээлэл үүлэнд аюулгүй хадгалагдана",
  "Тайлан секундын дотор бэлэн болно",
  "Ашиг, зарлагын дэлгэрэнгүй аналитик",
  "Бараа материал бодит цагт харагдана",
];

export function Benefits() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Ялгаа"
          title="Хуучин дэвтэр vs Цахим дэвтэр"
          description="Цаасан дэвтрээс цахим системд шилжихэд юу өөрчлөгдөх вэ?"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-background p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/[0.05] text-text-secondary">
                  <NotebookPen className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-text-secondary">Хуучин дэвтэр</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-primary/30 bg-[linear-gradient(160deg,rgba(22,155,98,0.06),rgba(255,255,255,0))] p-8 shadow-[0_20px_50px_-24px_rgba(22,155,98,0.35)]">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#169b62,#22c55e)] text-white">
                  <Smartphone className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-text">Цахим дэвтэр</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {newWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-text">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
