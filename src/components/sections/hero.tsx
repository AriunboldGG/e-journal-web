"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { DashboardScreen } from "@/components/screens/dashboard-screen";
import { POSScreen } from "@/components/screens/pos-screen";
import { ReportsScreen } from "@/components/screens/reports-screen";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(22,155,98,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute -right-40 top-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.14),transparent_65%)] blur-2xl" />
        <div className="absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.12),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Бизнесийн ухаалаг туслах</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]"
          >
            Цаасан дэвтрийг март.
            <br />
            <span className="bg-[linear-gradient(135deg,#169b62,#22c55e)] bg-clip-text text-transparent">
              Бизнесээ гар утсаараа удирд.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-lg text-balance text-lg leading-relaxed text-text-secondary"
          >
            Цахим дэвтэр нь борлуулалт, бараа материал, орлого зарлагаа нэг
            дор удирдах боломжийг олгодог энгийн, найдвартай гар утасны аппликейшн юм. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#download" size="lg">
              Апп татах <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              <PlayCircle className="h-4 w-4" /> Демо үзэх
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex -space-x-2.5">
              {["#169B62", "#27AE60", "#22C55E", "#34D399"].map((c, i) => (
                <span
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-text-secondary">
                500+ бизнес эрхлэгчид итгэдэг
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative flex h-[540px] items-center justify-center lg:h-[620px]">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[linear-gradient(135deg,rgba(22,155,98,0.14),rgba(34,197,94,0.08))] blur-3xl" />
          <div className="absolute h-[300px] w-[300px] rounded-full border border-white/40 bg-white/20 backdrop-blur-2xl" />

          <motion.div
            className="absolute -left-4 top-6 z-10 hidden sm:block lg:-left-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="animate-float-slow">
              <PhoneFrame className="w-[190px] scale-90 opacity-90">
                <ReportsScreen />
              </PhoneFrame>
            </div>
          </motion.div>

          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="animate-float">
              <PhoneFrame className="w-[240px] shadow-[0_40px_80px_-20px_rgba(16,24,40,0.4)]">
                <DashboardScreen />
              </PhoneFrame>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-2 bottom-2 z-10 hidden sm:block lg:right-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <div className="animate-float-slow">
              <PhoneFrame className="w-[190px] scale-90 opacity-90">
                <POSScreen />
              </PhoneFrame>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
