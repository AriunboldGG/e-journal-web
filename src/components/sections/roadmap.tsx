import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const roadmap = [
  { title: "Хүргэлтийн тооцоо", text: "Хүргэлтийн захиалга, тооцооллыг апп-д нэгтгэнэ." },
  { title: "Урамшууллын модуль", text: "Хэрэглэгчдэд зориулсан урамшуулал, хөнгөлөлтийн систем." },
  { title: "Офлайн горим", text: "Интернэтгүй үед ч борлуулалт хийх боломж." },
  { title: "Тооллого", text: "Бараа материалын тооллогыг аппликейшн дотроос хийнэ." },
  { title: "Зургаар хайх", text: "Барааг зургаар нь хайж олох боломж." },
  { title: "AI дүн шинжилгээ", text: "Хиймэл оюун ухаанд суурилсан бизнесийн зөвлөмж." },
];

/** The back-of-the-book list of things not yet done: empty boxes. */
export function Roadmap() {
  return (
    <section id="roadmap" className="relative border-y-2 border-text/85 bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Ирээдүйн төлөвлөгөө"
          tone="red"
          tabTop="9rem"
          title="Бид үргэлжлүүлэн хөгжүүлсээр байна"
          description="Цахим дэвтэр байнга сайжирч, шинэ боломжуудаар баяжсаар байх болно."
        />

        <ul className="grid grid-cols-1 gap-x-14 border-t-2 border-text md:grid-cols-2">
          {roadmap.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <li className="flex items-start gap-4 border-b border-text/25 py-6">
                <span
                  aria-hidden="true"
                  className="mt-1 h-6 w-6 shrink-0 rounded-[3px] border-2 border-text bg-surface"
                />
                <div>
                  <h3 className="text-lg font-bold text-text">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{r.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
