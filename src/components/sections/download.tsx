import { Apple, PlayCircle, Smartphone, QrCode } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const stores = [
  { name: "App Store", sub: "Татаж авах", icon: Apple },
  { name: "Google Play", sub: "Татаж авах", icon: PlayCircle },
  { name: "AppGallery", sub: "Huawei-с татах", icon: Smartphone },
];

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(22,155,98,0.1),transparent_65%)] blur-2xl" />
      </div>

      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-[2.5rem] border border-border bg-[linear-gradient(160deg,#ffffff,rgba(22,155,98,0.04))] px-6 py-16 text-center shadow-[0_30px_70px_-30px_rgba(16,24,40,0.25)] sm:px-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Одоо татаж эхлээрэй
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
              Бизнесээ өнөөдрөөс цахимжуулаарай
            </h2>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-text-secondary">
              Цахим дэвтэр аппыг чиний утсанд суулгаад, хэдхэн минутын дараа
              борлуулалтаа удирдаж эхлээрэй.
            </p>

            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-3 sm:flex-row">
                {stores.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_24px_-12px_rgba(22,155,98,0.3)]"
                  >
                    <s.icon className="h-6 w-6 text-text" />
                    <div>
                      <p className="text-[10px] text-text-secondary">{s.sub}</p>
                      <p className="text-sm font-bold text-text">{s.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-surface">
                  <QrCode className="h-14 w-14 text-text-secondary" strokeWidth={1.25} />
                </div>
                <p className="text-xs text-text-secondary">QR кодоор татах</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
