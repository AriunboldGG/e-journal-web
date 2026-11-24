import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Эрхэм зорилго",
    text: "Монголын жижиг, дунд бизнес эрхлэгчид өдөр тутмын худалдаагаа хялбар, ил тод, цахим хэлбэрээр удирдах боломжийг олгох.",
  },
  {
    title: "Алсын хараа",
    text: "Цахим хэлбэрээр бизнесээ амар удирдах",
  },
  {
    title: "Яагаад бид үүнийг бүтээх болсон бэ?",
    text: "Бизнес эрхлэгч худалдаачидтай ярилцаж, тэдний өдөр тутам тулгардаг бэрхшээлийг харсны үр дүнд Цахим дэвтэр бий болсон.",
  },
];

/** An open notebook: heading on the left leaf, entries on the right. */
export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 rounded-sm border-2 border-text/85 bg-surface shadow-[0_24px_36px_-24px_rgba(8,61,38,0.55)] md:grid-cols-2">
          <div className="flex flex-col justify-center border-b-2 border-text/20 p-8 sm:p-12 md:border-b-0">
            <SectionHeading
              eyebrow="Бидний тухай"
              tabTop="6rem"
              title="Цахим дэвтэр - Хувийн санхүүч"
              description="Бид Монголын жижиг дунд бизнес эрхлэгчдэд зориулж, энгийн бөгөөд найдвартай ашиглахад хялбар гар утасны аппликейшн бүтээв"
            />
          </div>

          <div className="sheet relative flex flex-col px-8 pb-10 pt-[36px] sm:px-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-[linear-gradient(90deg,rgba(8,61,38,0.16),transparent)] md:block"
            />
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="pb-9">
                  <h3 className="hand text-[1.7rem] leading-9 text-cloth">{p.title}</h3>
                  <p className="text-[15px] leading-9 text-text-secondary">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
