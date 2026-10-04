"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  { q: "Интернэт байх шаардлагатай юу?", a: "Тийм, одоогийн байдлаар апп ажиллахад интернэт холболт шаардлагатай. Офлайн горим ирээдүйн төлөвлөгөөнд багтсан." },
  { q: "Хэд хэдэн ажилтан зэрэг ашиглаж болох уу?", a: "Тийм. Ажилтан бүрд өөр өөр эрх, бүртгэл олгож, зэрэг ашиглах боломжтой." },
  { q: "Олон дэлгүүрийг нэг дор удирдаж болох уу?", a: "Тийм ээ, олон салбар, дэлгүүрийг нэг бүртгэлийн дор нэгтгэн удирдах боломжтой." },
  { q: "Huawei утсан дээр ашиглаж болох уу?", a: "Тийм, Цахим дэвтэр Android болон Huawei AppGallery-д зориулсан хувилбартай." },
  { q: "Тайлангаа экспортлож болох уу?", a: "Тийм ээ, борлуулалт болон санхүүгийн тайлангуудаа экспортлох боломжтой." },
  { q: "Миний мэдээлэл хамгаалагдсан уу?", a: "Тийм. Бүх мэдээлэл шифрлэгдэж, аюулгүй үүлэн орчинд хадгалагдана." },
  { q: "Апп ашиглахад төлбөртэй юу?", a: "Жижиг бизнест зориулсан хэмнэлттэй үнийн төлөвлөгөөнүүдтэй. Дэлгэрэнгүй мэдээллийг бидэнтэй холбогдож авна уу." },
  { q: "Апп-г хэрхэн суулгах вэ?", a: "App Store, Google Play эсвэл Huawei AppGallery-с татаж авах боломжтой." },
  { q: "Мэдээллээ хуучин дэвтрээс шилжүүлж болох уу?", a: "Тийм" },
  { q: "Асуудал гарвал хэнтэй холбогдох вэ?", a: "Манай дэмжлэгийн баг 24/7 танд туслахад бэлэн байна." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Түгээмэл асуулт"
          title="Асуух зүйл байна уу?"
          description="Хамгийн олон асуудаг асуултуудын хариултыг эндээс олоорой."
        />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-text sm:text-base">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
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
