import { Target, Eye, Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, IconBadge } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Target,
    title: "Эрхэм зорилго",
    text: "Монголын жижиг, дунд бизнес эрхлэгчид өдөр тутмын худалдаагаа хялбар, ил тод, цахим хэлбэрээр удирдах боломжийг олгох.",
  },
  {
    icon: Eye,
    title: "Алсын хараа",
    text: "Улс орны бүх зах, дэлгүүр, гар худалдаачдыг нэг цахим системд холбож, тоо бүртгэлийн соёлыг өөрчлөх.",
  },
  {
    icon: Heart,
    title: "Яагаад бид үүнийг бүтээх болсон бэ?",
    text: "Бизнес эрхлэгч худалдаачидтай ярилцаж, тэдний өдөр тутам тулгардаг бэрхшээлийг харсны үр дүнд Цахим дэвтэр бий болсон.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Бидний тухай"
          title="Цахим дэвтэр софт ХХК"
          description="Бид Монголын жижиг дунд бизнес эрхлэгчдэд зориулж, энгийн бөгөөд найдвартай программ хангамж бүтээдэх зорилготой технологийн компани юм."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Card className="h-full">
                <IconBadge icon={p.icon} />
                <h3 className="mt-5 text-lg font-bold text-text">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {p.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
