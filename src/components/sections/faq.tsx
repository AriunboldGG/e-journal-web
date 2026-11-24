"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  { q: "Интернэт байх шаардлагатай юу?", a: "Тийм, одоогийн байдлаар аппликейшнажиллахад интернэт холболт шаардлагатай. Офлайн горим ирээдүйн төлөвлөгөөнд багтсан." },
  { q: "Хэд хэдэн ажилтан зэрэг ашиглаж болох уу?", a: "Тийм. Ажилтан бүрд өөр өөр эрх, бүртгэл олгож, зэрэг ашиглах боломжтой." },
  { q: "Олон дэлгүүрийг нэг дор удирдаж болох уу?", a: "Тийм ээ, олон салбар, дэлгүүрийг нэг бүртгэлийн дор нэгтгэн удирдах боломжтой." },
  // { q: "Huawei утсан дээр ашиглаж болох уу?", a: "Тийм, Цахим дэвтэр Android болон Huawei AppGallery-д зориулсан хувилбартай." },
  { q: "Тайлангаа экспортлож болох уу?", a: "Тийм ээ, борлуулалт болон санхүүгийн тайлангуудаа экспортлох боломжтой." },
  { q: "Миний мэдээлэл хамгаалагдсан уу?", a: "Тийм. Бүх мэдээлэл шифрлэгдэж, аюулгүй үүлэн орчинд хадгалагдана." },
  { q: "аппликейшнашиглахад төлбөртэй юу?", a: "Жижиг бизнест зориулсан хэмнэлттэй үнийн төлөвлөгөөнүүдтэй. Дэлгэрэнгүй мэдээллийг бидэнтэй холбогдож авна уу." },
  { q: "Апп-г хэрхэн суулгах вэ?", a: "App Store, Google Play эсвэл Huawei AppGallery-с татаж авах боломжтой." },
  { q: "Мэдээллээ хуучин дэвтрээс шилжүүлж болох уу?", a: "Одоохондоо гараар шивж оруулна" },
  { q: "Асуудал гарвал хэнтэй холбогдох вэ?", a: "Манай дэмжлэгийн баг 24/7 танд туслахад бэлэн байна." },
];

/** Questions as notebook entries; the answer is written beneath in pen. */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="">
          <SectionHeading
            eyebrow="Түгээмэл асуулт"
            tone="ink"
            tabTop="7rem"
            title="Асуух зүйл байна уу?"
            description="Хамгийн олон асуудаг асуултуудын хариултыг эндээс олоорой."
          />
        </div>

        <div className="flex w-full flex-col border-t-2 border-text">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="border-b border-text/25">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-bold text-text">{f.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-pen transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={2.5}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="hand pb-5 pr-8 text-[1.45rem] leading-[1.35] text-cloth">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
