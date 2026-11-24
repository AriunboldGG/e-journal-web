import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/constants";

const info = [
  { icon: Mail, label: "И-мэйл", value: SITE.email },
  { icon: Phone, label: "Утас", value: SITE.phone },
  { icon: MapPin, label: "Хаяг", value: SITE.address },
  { icon: Clock, label: "Ажлын цаг", value: SITE.hours },
  { icon: Globe, label: "Facebook", value: "Цахим дэвтэр" },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-t-2 border-text/85 bg-surface py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Холбоо барих"
          tone="green"
          tabTop="6rem"
          title="Бидэнтэй холбоо барих"
          description="Асуулт, санал хүсэлт байвал бидэнд бичээрэй, тун удахгүй хариу өгөх болно."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-8">
          <Reveal className="lg:col-span-2">
            <div className="sheet-plain flex h-full flex-col gap-4 rounded-sm border-2 border-text/85 p-8">
              <p className="hand text-3xl leading-none text-cloth">
                {SITE.companyNameMn}
              </p>
              {info.map((it) => (
                <div key={it.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-2 border-text/80 text-cloth">
                    <it.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-text-secondary">{it.label}</p>
                    <p className="text-sm font-bold text-text">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <form className="sheet relative flex h-full flex-col gap-5 rounded-sm border-2 border-text/85 p-8">
              <span className="tape -top-3 right-10 rotate-3" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-text">
                    Нэр
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Таны нэр"
                    className="rounded-none border-0 border-b-2 border-text/70 bg-transparent px-1 py-2.5 text-[15px] text-text outline-none transition-colors placeholder:text-text-secondary/70 focus:border-pen"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-text">
                    Утасны дугаар
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="99xxxxxx"
                    className="rounded-none border-0 border-b-2 border-text/70 bg-transparent px-1 py-2.5 text-[15px] text-text outline-none transition-colors placeholder:text-text-secondary/70 focus:border-pen"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-text">
                  И-мэйл
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className="rounded-none border-0 border-b-2 border-text/70 bg-transparent px-1 py-2.5 text-[15px] text-text outline-none transition-colors placeholder:text-text-secondary/70 focus:border-pen"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-text">
                  Мессеж
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Бидэнд саналаа илгээгээрэй"
                  className="flex-1 resize-none rounded-none border-0 border-b-2 border-text/70 bg-transparent px-1 py-2.5 text-[15px] text-text outline-none transition-colors placeholder:text-text-secondary/70 focus:border-pen"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md border-2 border-cloth-deep bg-cloth px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_18px_-10px_rgba(8,61,38,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cloth-deep"
              >
                Илгээх
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
