"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AppShot } from "@/components/ui/app-shot";

const entries = [
  { label: "Борлуулалт", text: "Хэдхэн товшилтоор борлуулалт хийж, борлуулалтаа цахимаар бүртгэх." },
  { label: "Бараа материалын удирдлага", text: "Нөөцийн үлдэгдлийг бодит цагт хянаж, бараа дуусахаас урьдчилан сэргийлэх." },
  { label: "Санххууүгийн тайлан & Аналитик", text: "Орлого, зарлага, цэвэр ашиг болон хамгийн их зарагдсан барааны дэлгэрэнгүй тайланг харах." },
  { label: "Олон салбарын удирдлага", text: "Хэд хэдэн дэлгүүр, салбараа нэг бүртгэлээр удирдах." },
  { label: "Өр авлагын бүртгэл", text: "Харилцагчийн зээл болон нийлүүлэгчийн төлбөрийн хяналт." },
  { label: "Аюулгүй байдал", text: "Mэдээлэл үүлэн технологид (Cloud) шифрлэгдэн найдвартай хадгалагдана." },
  { label: "Хүргэлт", text: "Онлайнаар хийгдсэн борлуулалтын бүртгэлээ аппликэйшнээсээ удирдаарай." },
];

export function Hero() {
  return (
    <section className="cloth stitch relative overflow-hidden pt-[4.25rem]">
      <Container className="grid grid-cols-1 items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.02fr] lg:gap-12 lg:py-24">
        <div className="flex flex-col items-start gap-7">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Цаасан дэвтрийг мартаж.
            <br />
            <span className="pen-underline-light">Цахим дэвтэр рүү шилжие.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex max-w-xl flex-col gap-4 text-base leading-relaxed text-cloth-ink sm:text-lg"
          >

            <p>
              Цаасан дэвтрийг мартаж, бизнесээ гар утаснаасаа удирдаарай! Цахим дэвтэр нь жижиг, дунд бизнес эрхлэгчид, дэлгүүр эзэмшигч, борлуулагчдад зориулсан борлуулалт болон санхүүгийн иж бүрэн тооцооллын функцуудыг шингээсэн гар утасны аппликейшн юм.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#download" variant="paper" size="lg">
              Аппликейшн татах{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="#how-it-works"
              variant="ghost"
              size="lg"
              className="border-white/70 text-white hover:border-white hover:bg-white/10"
            >
              <PlayCircle className="h-4 w-4" /> Демо үзэх
            </Button>
          </motion.div>
        </div>

        {/* The page: an open ledger sheet lying on the cloth */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 1.4 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[540px] pb-28 sm:pb-20"
        >
          <div className="sheet margin-rule relative rounded-sm pb-56 pl-[4.6rem] pr-6 pt-[36px] sm:pr-8">
            <span className="spiral" aria-hidden="true" />
            <h2 className="hand h-9 text-[1.9rem] leading-9 text-cloth">Үндсэн боломжууд:</h2>
            <div className="h-9" />
            <ul className="text-[15px] leading-9 text-text">
              {entries.map((e) => (
                <li key={e.label}>
                  <span className="font-bold">{e.label}:</span>{" "}
                  <span className="text-text-secondary">{e.text}</span>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-5 left-[4.6rem]">
              <span className="stamp stamp-animate text-[11px] sm:text-xs">
                Бүртгэлтэй 100+ бизнес эрхлэгчид 
              </span>
            </div>
          </div>

          <span className="tape -top-3 left-1/2 hidden -translate-x-1/2 rotate-2 sm:block" />

          <div className="absolute -bottom-2 right-3 z-10 sm:bottom-[-3.5rem] sm:right-[-1.25rem]">
            <div className="animate-float-slow">
              <AppShot
                src="/images/screenshots/image00001.png"
                alt="Цахим дэвтэр апп: нүүр хуудас, өнөөдрийн нийт борлуулалт"
                className="w-[150px] rotate-[3deg] rounded-[2rem] border-[5px] p-1 sm:w-[168px]"
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-6 right-[7.5rem] z-[5] hidden sm:block sm:bottom-[-2rem] sm:right-[8.5rem]">
            <AppShot
              src="/images/screenshots/image00002.png"
              alt="Цахим дэвтэр апп: үндсэн цэсүүд"
              className="w-[140px] -rotate-[5deg] rounded-[2rem] border-[5px] p-1"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
