import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { title: "Бүртгүүлэх", text: "Хэдхэн минутын дотор апп-д бүртгэл үүсгэнэ." },
  { title: "Дэлгүүр үүсгэх", text: "Өөрийн дэлгүүр эсвэл салбараа апп-д нэмнэ." },
  { title: "Бараа нэмэх", text: "Борлуулах бараагаа жагсаалтад оруулна." },
  { title: "Борлуулалт хийх", text: "Борлуулалтаа аппликейшн дээрээс шууд бүртгэнэ." },
  { title: "Тайлан харах", text: "Ашиг, орлого, зарлагаа бодит цагт хянана." },
  { title: "Бизнесээ өсгөх", text: "Дата дээр үндэслэн зөв шийдвэр гаргана." },
];

/** A to-do page: the six steps, ticked off in order. */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="">
          <SectionHeading
            eyebrow="Хэрхэн ажилладаг"
            tone="red"
            tabTop="8rem"
            title="Ашиглаж эхлэх алхамууд"
            description="Таны бизнесийг онлайнжуулахад тусална"
          />
        </div>

        <ol className="sheet margin-rule relative rounded-sm border border-border pb-10 pl-[4.6rem] pr-6 pt-[36px] sm:pr-10">
          <span className="spiral" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="relative pb-9 [counter-increment:step]">
                <span
                  aria-hidden="true"
                  className="hand absolute -left-[3.6rem] top-0 flex h-9 w-9 items-center justify-center text-[1.7rem] leading-none text-pen"
                >
                  {i + 1}.
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 leading-9">
                  <h3 className="text-lg font-bold text-text">
                    <span className="mr-2 font-mono text-xs font-semibold text-text-secondary">
                      Алхам {i + 1}
                    </span>
                    {s.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-9 text-text-secondary">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
