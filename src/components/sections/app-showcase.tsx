import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { Reveal } from "@/components/ui/reveal";
import { DashboardScreen } from "@/components/screens/dashboard-screen";
import { ProductsScreen } from "@/components/screens/products-screen";
import { ReportsScreen } from "@/components/screens/reports-screen";
import { POSScreen } from "@/components/screens/pos-screen";
import { LayoutDashboard, Boxes, BarChart3, ShoppingCart } from "lucide-react";

const showcases = [
  {
    icon: LayoutDashboard,
    tag: "Хяналтын самбар",
    title: "Бизнесээ нэг харцаар харна",
    text: "Өнөөдрийн борлуулалт, ашиг, захиалгын тоог нэг дэлгэцээс шууд харах боломжтой. Долоо хоногийн худалдааны график таны бизнесийн чиг хандлагыг харуулна.",
    screen: <DashboardScreen />,
    reverse: false,
  },
  {
    icon: ShoppingCart,
    tag: "Борлуулалт",
    title: "Хэдхэн товшилтоор худалдаа хийнэ",
    text: "Бараагаа сонгоод, төлбөрийн хэлбэрээ сонгоод дуусгана. Бэлэн, карт, QPay зэрэг олон хэлбэрийг хослуулан хүлээн авах боломжтой.",
    screen: <POSScreen />,
    reverse: true,
  },
  {
    icon: Boxes,
    tag: "Бараа материал",
    title: "Нөөцөө үргэлж мэдэж байх",
    text: "Аль бараа дуусаж байгааг өнгөөр ялгаж харуулна. Шинэ бараа нэмэх, хайх, ангилах — бүгд энгийн.",
    screen: <ProductsScreen />,
    reverse: false,
  },
  {
    icon: BarChart3,
    tag: "Тайлан",
    title: "Ашгаа тоймлон харна",
    text: "Сарын ашиг, хамгийн их зарагдсан бараа, зарлагын мэдээллийг ойлгомжтой график хэлбэрээр танилцуулна.",
    screen: <ReportsScreen />,
    reverse: true,
  },
];

export function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(22,155,98,0.06),transparent_70%)]" />
      </div>

      <Container className="flex flex-col gap-20 sm:gap-28">
        <SectionHeading
          eyebrow="Мобайл апп"
          title="Таны гар утсан дахь бизнесийн товчоо"
          description="Цахим дэвтэр таны гар утсан дээр байнга байж, бизнесээ хаанаас ч удирдах боломжийг олгоно."
        />

        <div className="flex flex-col gap-24 sm:gap-32">
          {showcases.map((s, i) => (
            <div key={s.tag} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
              <Reveal
                delay={0.05}
                className={`flex flex-col items-start gap-5 ${
                  s.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  <s.icon className="h-3.5 w-3.5" /> {s.tag}
                </span>
                <h3 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-3xl">
                  {s.title}
                </h3>
                <p className="max-w-md text-balance text-base leading-relaxed text-text-secondary">
                  {s.text}
                </p>
              </Reveal>

              <Reveal
                delay={0.1}
                className={`relative flex items-center justify-center py-6 ${
                  s.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(22,155,98,0.12),transparent_70%)] blur-2xl" />
                <div className="animate-float-slow relative z-10">
                  <PhoneFrame>{s.screen}</PhoneFrame>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
