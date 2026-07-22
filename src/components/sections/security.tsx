import { CloudUpload, Lock, UserCog, ServerCog, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconBadge } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const items = [
  { icon: CloudUpload, title: "Клауд нөөцлөлт", text: "Таны мэдээлэл автоматаар үүлэнд хадгалагдаж, алдагдах эрсдэлгүй." },
  { icon: Lock, title: "Шифрлэгдсэн өгөгдөл", text: "Бүх мэдээлэл орчин үеийн шифрлэлтийн технологиор хамгаалагдана." },
  { icon: UserCog, title: "Эрхийн удирдлага", text: "Ажилтан бүрд тохирсон хандах эрхийг тохируулна." },
  { icon: ServerCog, title: "Найдвартай дэд бүтэц", text: "Тогтвортой, өндөр ашиглалттай сервер дэд бүтэц ашигладаг." },
  { icon: RefreshCw, title: "Автомат синк", text: "Бүх төхөөрөмж дээрх мэдээлэл бодит цагт шинэчлэгдэнэ." },
];

export function Security() {
  return (
    <section id="security" className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Аюулгүй байдал"
          title="Таны мэдээлэл найдвартай хамгаалагдана"
          description="Бизнесийн хамгийн үнэ цэнэтэй зүйл бол мэдээлэл. Бид үүнийг маш ноцтой авч үздэг."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <RevealItem key={it.title}>
              <Card className="h-full items-center text-center">
                <div className="flex flex-col items-center gap-4">
                  <IconBadge icon={it.icon} />
                  <h3 className="text-sm font-bold text-text">{it.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {it.text}
                  </p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
