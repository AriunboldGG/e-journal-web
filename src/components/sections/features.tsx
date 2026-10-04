import {
  ShoppingCart,
  Boxes,
  Warehouse,
  Building2,
  Users,
  Handshake,
  TrendingUp,
  Receipt,
  BarChart3,
  PieChart,
  Bell,
  LineChart,
  ArrowLeftRight,
  LayoutDashboard,
  UserCog,
  Store,
  CreditCard,
  Split,
  RotateCcw,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconBadge } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const features = [
  { icon: ShoppingCart, title: "Борлуулалт", text: "Хурдан бөгөөд хялбараар борлуулалтаа бүртгэнэ." },
  { icon: Boxes, title: "Бараа материал", text: "Бүх барааны нөөцийг нэг дороос хянана." },
  { icon: Warehouse, title: "Нөөцийн удирдлага", text: "Хэдэн ширхэг үлдсэнийг үргэлж мэднэ." },
  { icon: Building2, title: "Салбар удирдлага", text: "Олон дэлгүүрээ нэг апп-аас хянана." },
  { icon: Users, title: "Харилцагчийн өр", text: "Зээлдэгсдийн бүртгэл, төлбөрийн хугацааг хянана." },
  { icon: Handshake, title: "Нийлүүлэгчийн төлбөр", text: "Нийлүүлэгч рүү өгөх төлбөрөө хянана." },
  { icon: TrendingUp, title: "Орлого", text: "Өдөр тутмын орлогоо автоматаар бүртгэнэ." },
  { icon: Receipt, title: "Зарлага", text: "Бизнесийн зардлаа ангилж бүртгэнэ." },
  { icon: BarChart3, title: "Борлуулалтын тайлан", text: "Өдөр, сар, жилээр дэлгэрэнгүй тайлан." },
  { icon: PieChart, title: "Ашгийн тайлан", text: "Цэвэр ашгаа бодит цагт хардаг." },
  { icon: Bell, title: "Ухаалаг мэдэгдэл", text: "Бараа дуусах, өр хугацаандаа сануулна." },
  { icon: LineChart, title: "Аналитик", text: "Борлуулалтын чиг хандлагыг ойлгоно." },
  { icon: ArrowLeftRight, title: "Бараа шилжүүлэг", text: "Салбар хооронд барааг шилжүүлнэ." },
  { icon: LayoutDashboard, title: "Эзэмшигчийн хяналтын самбар", text: "Бүх бизнесээ нэг дэлгэцээс харна." },
  { icon: UserCog, title: "Хэрэглэгчийн эрх", text: "Ажилтан бүрт тохирсон эрх өгнө." },
  { icon: Store, title: "Олон дэлгүүр", text: "Хэдэн ч дэлгүүрийг нэг бүртгэлээр удирдана." },
  { icon: CreditCard, title: "Төлбөрийн хэлбэр", text: "Бэлэн, карт, QPay зэргийг тохируулна." },
  { icon: Split, title: "Хосолсон төлбөр", text: "Нэг гүйлгээг хэд хэдэн хэлбэрээр хүлээн авна." },
  { icon: RotateCcw, title: "Буцаалт", text: "Буцаасан бараагаа хялбар бүртгэнэ." },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Боломжууд"
          title="Бизнест хэрэгтэй бүх зүйл нэг дор"
          description="Худалдаа, бараа, санхүү, тайлан — Цахим дэвтэр бүгдийг нэг дор шийднэ."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <Card className="h-full !p-6">
                <div className="flex items-start gap-4">
                  <IconBadge icon={f.icon} className="h-11 w-11 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-text">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {f.text}
                    </p>
                  </div>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
