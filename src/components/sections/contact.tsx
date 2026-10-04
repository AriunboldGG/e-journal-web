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
    <section id="contact" className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Холбоо барих"
          title="Холбоо барих мэдээлэл"
          description="Асуулт, санал хүсэлт байвал бидэнд бичээрэй, тун удахгүй хариу өгөх болно."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-8">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-background p-8">
              <p className="text-sm font-semibold text-text-secondary">
                {SITE.companyNameMn}
              </p>
              {info.map((it) => (
                <div key={it.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <it.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-xs text-text-secondary">{it.label}</p>
                    <p className="text-sm font-medium text-text">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <form className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-background p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text">
                    Нэр
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Таны нэр"
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text">
                    Утасны дугаар
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="99xxxxxx"
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-text">
                  И-мэйл
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-text">
                  Мессеж
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Бидэнд юу тусалж чадах вэ?"
                  className="flex-1 resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#169b62,#22c55e)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(22,155,98,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(22,155,98,0.7)]"
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
