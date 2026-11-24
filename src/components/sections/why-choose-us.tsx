import {
  Sparkles,
  Cloud,
  ShieldCheck,
  Zap,
  Clock,
  MapPin,
  WifiOff,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconBadge } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const reasons = [
  { icon: Sparkles, title: "Ашиглахад хялбар", text: "Толгой эргэм тоо томшгүй олон үйлдэлгүй" },
  { icon: Cloud, title: "Клауд суурьтай", text: "Мэдээлэл үүлэн технологид хадгалагдана, гацахгүй, удааширахгүй" },
  { icon: ShieldCheck, title: "Найдвартай хамгаалалт", text: "Таны бизнесийн өгөгдөл шифрлэгдсэн, аюулгүй орчинд хадгалагдана." },
  { icon: Zap, title: "Хурдан ажиллагаа", text: "Секундын дотор борлуулалт бүртгэж, бодит цагаар харуулна." },
  { icon: Clock, title: "24/7 хандах боломж", text: "Өдрийн 24 цагт, танд тулгарсан асуудалд сошиал сувгуудаараа хариу өгнө" },
  { icon: MapPin, title: "Орон даяар ашиглах боломжтой", text: "Хэн ч хаанаас салбаруудаа удирдах боломжтой" },
  { icon: WifiOff, title: "Офлайн горим (тун удахгүй)", text: "Интернэт тасарсан ч ажлаа зогсоохгүй үргэлжлүүлнэ." },
  { icon: Wallet, title: "Боломжийн үнэ", text: "Жижиг бизнест тохирсон, хэмнэлттэй үнийн санал." },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Яагаад бид"
          title="Танд яагаад Цахим дэвтэр хэрэгтэй вэ?"
          description="Бид бизнес эрхлэгчдэд бодит амьдрал дээр тулгардаг асуудлуудыг шийдэхэд зориулж энэхүү аппликейшнийг бүтээв."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <RevealItem key={r.title}>
              <Card className="h-full">
                <IconBadge icon={r.icon} />
                <h3 className="mt-5 text-base font-bold text-text">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {r.text}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
