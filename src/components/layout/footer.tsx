import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SITE } from "@/lib/constants";

const columns = [
  {
    title: "Компани",
    links: [
      { label: "Бидний тухай", href: "#about" },
      { label: "Яагаад бид", href: "#why-us" },
      { label: "Ирээдүйн төлөвлөгөө", href: "#roadmap" },
      { label: "Холбоо барих", href: "#contact" },
    ],
  },
  {
    title: "Бүтээгдэхүүн",
    links: [
      { label: "Боломжууд", href: "#features" },
      { label: "Хэрхэн ажилладаг", href: "#how-it-works" },
      { label: "Тайлан", href: "#reports" },
      { label: "Аюулгүй байдал", href: "#security" },
    ],
  },
  {
    title: "Тусламж",
    links: [
      { label: "Түгээмэл асуулт", href: "#faq" },
      { label: "Апп татах", href: "#download" },
      { label: "Хэнд зориулагдсан", href: "#who" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link href="#" className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="text-base font-bold tracking-tight text-text">
              Цахим дэвтэр
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            {SITE.companyNameMn}-ийн бүтээсэн, жижиг дунд бизнесүүдэд зориулсан
            борлуулалт удирдлагын систем. Цаасан дэвтрээс цахим дэвтэр рүү.
          </p>
          <div className="flex flex-col gap-2.5 pt-2 text-sm text-text-secondary">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> {SITE.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {SITE.address}
            </span>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Globe className="h-4 w-4 text-primary" /> Facebook хуудас
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-text">{col.title}</p>
            {col.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-text-secondary transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} {SITE.companyNameMn}. Бүх эрх хуулиар
            хамгаалагдсан.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-secondary">
            <Link href="/privacy" className="hover:text-primary">
              Нууцлалын бодлого
            </Link>
            <a href="#" className="hover:text-primary">
              Үйлчилгээний нөхцөл
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
