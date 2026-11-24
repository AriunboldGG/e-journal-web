import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const oldWay = [
  "Гараар бичдэг, алдаа их гардаг",
  "Дэвтэр дуусах, гээгдэх эрсдэлтэй",
  "Тооцоолол удаан, төвөгтэй",
  "Орлого, зарлагын тайлан гардаггүй",
  "Барааны нөөцийг мэддэггүй",
];

export const newWay = [
  "Автоматаар тооцоолж, алдаагүй тулгалт хийнэ",
  "Мэдээлэл Үүлэн технологид хадгалах (Cloud Storage) аюулгүй хадгалагдана",
  "Тайлан хормын дотор бэлэн болно",
  "Ашиг, зарлагын дэлгэрэнгүй тайлан",
  "Бараа материалын үлдэгдэл бодит цагт харагдана",
];

/** Two pages side by side: the old paper one is struck out, the new one is signed off. */
export function Benefits() {
  return (
    <section className="relative border-y-2 border-text/85 bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Ялгаа"
          tone="paper"
          tabTop="7rem"
          title="Цаасан дэвтэр vs Цахим дэвтэр"
          description="Цаасан дэвтрээс цахим системд шилжихэд юу өөрчлөгдөх вэ?"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <Reveal>
            <div className="relative h-full -rotate-1 rounded-sm border border-border bg-[#e6e4d6] px-7 pb-8 pt-7 text-[#4a4a3c] shadow-[0_14px_22px_-16px_rgba(0,0,0,0.5)]">
              <span className="tape -top-3 left-10 -rotate-3 bg-[rgba(120,120,90,0.28)]" />
              <h3 className="hand mb-4 text-4xl leading-none text-[#4a4a3c]">Хуучин дэвтэр</h3>
              <ul className="flex flex-col">
                {oldWay.map((item) => (
                  <li
                    key={item}
                    className="strike-pen border-b border-[#4a4a3c]/25 py-3.5 text-[15px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="sheet relative h-full rotate-1 rounded-sm border-2 border-cloth px-7 pb-8 pt-7">
              <span className="tape -top-3 right-10 rotate-3" />
              <h3 className="hand mb-4 text-4xl leading-none text-cloth">Цахим дэвтэр</h3>
              <ul className="flex flex-col">
                {newWay.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-text/20 py-3.5 text-[15px] font-semibold text-text"
                  >
                    <span aria-hidden="true" className="hand -mt-1 text-3xl leading-none text-cloth">
                      ✓
                    </span>
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
