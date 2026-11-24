import { Apple, PlayCircle, Smartphone, QrCode } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const stores = [
  {
    name: "App Store",
    sub: "Татаж авах",
    icon: Apple,
    href: "https://apps.apple.com/us/app/цахим-дэвтэр/id6809811968",
  },
  {
    name: "Google Play",
    sub: "Татаж авах",
    icon: PlayCircle,
    href: "https://play.google.com/store/apps/details?id=com.tsahimdevter",
  },
  { name: "AppGallery", sub: "Huawei-с татах", icon: Smartphone },
];

/** The back cover: book cloth again, with the title on a paper label. */
export function Download() {
  return (
    <section id="download" className="cloth stitch relative overflow-hidden py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-9 text-center">
            <span className="hand -rotate-2 text-4xl leading-none text-cloth-ink">
              Аппликейшн татах
            </span>
            <h2 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="pen-underline-light">Бизнесээ өнөөдрөөс цахимжуулаарай</span>
            </h2>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-cloth-ink">
              Цахим дэвтэр аппликейшн татах холбоосууд
            </p>

            <div className="mt-2 flex flex-col items-center gap-10 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-3 sm:flex-row">
                {stores.map((s) => {
                  const className =
                    "flex items-center gap-3 rounded-md border-2 border-white/80 bg-surface px-5 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_20px_-12px_rgba(0,0,0,0.6)]";
                  const content = (
                    <>
                      <s.icon className="h-6 w-6 text-cloth-deep" />
                      <div>
                        <p className="text-[11px] text-text-secondary">{s.sub}</p>
                        <p className="text-sm font-bold text-text">{s.name}</p>
                      </div>
                    </>
                  );

                  return s.href ? (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.name}-с татах`}
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={s.name} className={className}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="relative flex rotate-3 flex-col items-center gap-2 bg-surface px-4 pb-3 pt-5 shadow-[0_14px_20px_-12px_rgba(0,0,0,0.6)]">
                <span className="tape -top-3 left-1/2 w-16 -translate-x-1/2 -rotate-3" />
                <div className="flex h-24 w-24 items-center justify-center border-2 border-text bg-surface">
                  <QrCode className="h-14 w-14 text-text" strokeWidth={1.25} />
                </div>
                <p className="text-xs font-semibold text-text">QR кодоор татах</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
