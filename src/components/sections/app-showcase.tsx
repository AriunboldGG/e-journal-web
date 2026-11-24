import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AppShot } from "@/components/ui/app-shot";
import { Reveal } from "@/components/ui/reveal";
import { LayoutDashboard, Boxes, BarChart3, ShoppingCart } from "lucide-react";

const showcases = [
  {
    icon: LayoutDashboard,
    tag: "Хяналтын самбар",
    title: "Бизнесээ нэг аппликейшнээс удирдана",
    text: "Өнөөдрийн борлуулалт, ашиг, захиалгын тоог нэг дэлгэцээс шууд харах боломжтой. ",
    shot: "/images/screenshots/image00001.png",
    alt: "Хяналтын самбар: өнөөдрийн нийт борлуулалт, салбар сонгох, үндсэн цэсүүд",
    reverse: false,
    tilt: "-rotate-2",
  },
  {
    icon: ShoppingCart,
    tag: "Борлуулалт",
    title: "Хэдхэн товшилтоор борлуулалтаа бүртгэнэ",
    text: "Бараагаа сонгоод, борлуулалтын сувгаа сонгоод, төлбөрөө бүртгэхэд хангалттай. Борлуулалтын түүхийг хялбархан харах боломжтой.",
    shot: "/images/screenshots/image00005.png",
    alt: "Хаалтын жагсаалт: огноо, дүн, төлөв",
    reverse: true,
    tilt: "rotate-2",
  },
  {
    icon: Boxes,
    tag: "Бараа материал",
    title: "Нөөцөө үргэлж мэдэж байх",
    text: "Аль бараа дуусаж байгааг мэдэгдэл илгээж сануулна. Шинэ бараа нэмэх, хайх, ангилах — бүгд энгийн.",
    shot: "/images/screenshots/image00003.png",
    alt: "Бараа: зураг, үнэ, үлдэгдэл бүхий барааны жагсаалт",
    reverse: false,
    tilt: "-rotate-1",
  },
  {
    icon: BarChart3,
    tag: "Тайлан",
    title: "Ашгийн тайлан харна",
    text: "Сарын ашиг, хамгийн их зарагдсан бараа, зарлагын мэдээллийг ойлгомжтой хэлбэрээр танилцуулна.",
    shot: "/images/screenshots/image00004.png",
    alt: "Санхүүгийн тайлан: нийт орлого, буцаалт, зарлага, авлага",
    reverse: true,
    tilt: "rotate-1",
  },
];

/** Photos pasted into the notebook: each phone is taped to a graph-paper mount. */
export function AppShowcase() {
  return (
    <section className="relative border-y-2 border-text/85 bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-20 sm:gap-28">
        <SectionHeading
          eyebrow="Мобайл апп"
          tone="green"
          tabTop="6rem"
          title="Таны гар утсан дахь хувийн санхүүч"
          description="Цахим дэвтэр таны гар утсан дээр байнга байж, бизнесээ хаанаас ч удирдах боломжийг олгоно."
        />

        <div className="flex flex-col gap-20 sm:gap-28">
          {showcases.map((s) => (
            <div
              key={s.tag}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                delay={0.05}
                className={`flex flex-col items-start gap-4 ${
                  s.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="hand inline-flex items-center gap-2 text-3xl leading-none text-pen">
                  <s.icon className="h-5 w-5" strokeWidth={2.25} /> {s.tag}
                </span>
                <h3 className="text-balance text-2xl font-extrabold tracking-tight text-text sm:text-4xl">
                  {s.title}
                </h3>
                <p className="max-w-md text-balance text-base leading-relaxed text-text-secondary">
                  {s.text}
                </p>
              </Reveal>

              <Reveal
                delay={0.1}
                className={`${s.reverse ? "lg:order-1" : "lg:order-2"}`}
              >
                <div
                  className={`relative mx-auto flex w-full max-w-md justify-center border-2 border-text/85 bg-background px-6 pb-8 pt-12 ${s.tilt}`}
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(15,122,77,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,122,77,0.12) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                >
                  <span className="tape -top-3 left-8 -rotate-6" />
                  <span className="tape -top-3 right-8 rotate-6" />
                  <AppShot src={s.shot} alt={s.alt} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
