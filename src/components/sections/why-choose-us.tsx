import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export const reasons = [
  { title: "Ашиглахад хялбар", text: "Толгой эргэм тоо томшгүй олон үйлдэлгүй" },
  { title: "Клауд суурьтай", text: "Мэдээлэл үүлэн технологид хадгалагдана, гацахгүй, тасалдаж алга болохгүй" },
  { title: "Найдвартай хамгаалалт", text: "Таны бизнесийн өгөгдөл шифрлэгдсэн, аюулгүй орчинд хадгалагдана." },
  { title: "Хурдан ажиллагаа", text: "Секундын дотор борлуулалт бүртгэж, бодит цагаар харуулна." },
  { title: "24/7 хандах боломж", text: "Өдрийн 24 цагт, танд тулгарсан асуудалд сошиал сувгуудаараа хариу өгнө" },
  { title: "Орон даяар ашиглах боломжтой", text: "Хэн ч хаанаас салбаруудаа удирдах боломжтой" },
  { title: "Офлайн горим (тун удахгүй)", text: "Интернэт тасарсан ч ажлаа зогсоохгүй үргэлжлүүлнэ." },
  { title: "Боломжийн үнэ", text: "Ажиллагаа бүрт тохирсон үнийн санал." },
];

/** A spec sheet: row after row, ticked off. */
export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative border-y-2 border-text/85 bg-surface py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="">
          <SectionHeading
            eyebrow="Яагаад бид"
            tone="red"
            tabTop="5rem"
            title="Танд яагаад Цахим дэвтэр хэрэгтэй вэ?"
            description="Бүгдийг нэг дороос"
          />
        </div>

        <RevealGroup className="flex flex-col border-t-2 border-text" stagger={0.05}>
          {reasons.map((r) => (
            <RevealItem key={r.title}>
              <div className="grid grid-cols-[2rem_1fr] gap-x-4 border-b border-text/25 py-5 sm:grid-cols-[2rem_15rem_1fr]">
                <Check className="mt-0.5 h-6 w-6 text-pen" strokeWidth={3} />
                <h3 className="text-base font-bold text-text">{r.title}</h3>
                <p className="col-start-2 mt-1 text-sm leading-relaxed text-text-secondary sm:col-start-3 sm:mt-0">
                  {r.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
