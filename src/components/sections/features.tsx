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
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconBadge } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const features = [
  { icon: ShoppingCart, title: "Борлуулалт бүртгэл", text: "Хурдан бөгөөд энгийн хэдэн товшилтоор борлуулалтаа бүртгэх боломжтой." },
  { icon: Boxes, title: "Бараа материал", text: "Бүх барааны нөөцийг нэг дороос хянана." },
  { icon: Warehouse, title: "Нөөцийн удирдлага", text: "Хэдэн ширхэг үлдсэнийг үргэлж мэднэ." },
  { icon: Building2, title: "Салбар удирдлага", text: "Олон дэлгүүрээ нэг апп-аас хянана." },
  { icon: Users, title: "Харилцагчийн авлага", text: "Зээлдэгсдийн бүртгэл, төлбөрийн хугацаа." },
  { icon: Handshake, title: "Нийлүүлэгчийн төлбөр", text: "Нийлүүлэгч рүү өгөх төлбөрөө хянана." },
  { icon: TrendingUp, title: "Орлого", text: "Өдөр тутмын орлогоо автоматаар бүртгэнэ." },
  { icon: Receipt, title: "Зарлага", text: "Бизнесийн зардлаа ангилж бүртгэнэ." },
  { icon: BarChart3, title: "Борлуулалтын тайлан", text: "Өдөр, сар, жилээр дэлгэрэнгүй тайлан." },
  { icon: PieChart, title: "Ашгийн тайлан", text: "Цэвэр ашгаа бодит цагт хардаг." },
  { icon: Bell, title: "Ухаалаг мэдэгдэл", text: "Бараа дуусах, авлага, өглөг, дуусах хугацааг сануулна." },
  { icon: LineChart, title: "Анализ", text: "Борлуулалтын чиг хандлагыг ойлгоно." },
  { icon: ArrowLeftRight, title: "Бараа шилжүүлэг", text: "Салбар хооронд барааг шилжүүлнэ." },
  { icon: LayoutDashboard, title: "Эзэмшигчийн хяналтын самбар", text: "Бүх салбараа нэг эрхээр харна." },
  { icon: UserCog, title: "Хэрэглэгчийн эрх", text: "Ажилтан бүрт тохируулсан эрх өгнө." },
  { icon: Store, title: "Олон салбар", text: "Хэдэн ч дэлгүүрийг нэг бүртгэлээр удирдана." },
  { icon: CreditCard, title: "Төлбөрийн хэлбэр", text: "Өөрийн дэлгүүрт ашиглагддаг төлбөрийн хэлбэрүүдийг аппликейшнээсээ тохируулна." },
  { icon: Split, title: "Хосолсон төлбөр", text: "Нэг гүйлгээг хэд хэдэн төлбөрийн хэлбэрээр сонгож борлуулалт бүртгэнэ." },
  { icon: RotateCcw, title: "Буцаалт", text: "Буцаасан бараагаа хялбар бүртгэнэ." },
  { icon: Truck, title: "Хүргэлт", text: "Онлайнаар зарсан борлуулалт Хүргэлт цэс рүү бүртгэгдэнэ." },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Боломжууд"
          title="Бизнест хэрэгтэй бүх үйлдэл нэг дор"
          description="Борлуулалт, бараа бүртгэл, авлага, өглөг, хүргэлт тайлан — Цахим дэвтэр бүгдийг нэг дор шингээв."
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
