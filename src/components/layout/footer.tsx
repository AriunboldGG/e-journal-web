import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SITE } from "@/lib/constants";

export const columns = [
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
      { label: "Аппликейшн татах", href: "#download" },
      { label: "Хэнд зориулагдсан", href: "#who" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="cloth border-t-2 border-cloth-deep text-cloth-ink">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link href="#" className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="text-lg font-extrabold tracking-tight text-white">
              Цахим дэвтэр
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-cloth-ink">
            Таны бизнесийн хувийн санхүүч
          </p>
          <div className="flex flex-col gap-2.5 pt-2 text-sm text-cloth-ink">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white" /> {SITE.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white" /> {SITE.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white" /> {SITE.address}
            </span>
            <a
              href={'https://www.facebook.com/profile.php?id=61596598800453'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white hover:underline"
            >
              <Globe className="h-4 w-4 text-white" /> Facebook хуудас
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <p className="hand text-2xl leading-none text-white">{col.title}</p>
            {col.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-cloth-ink transition-colors hover:text-white hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </Container>

      <div className="border-t border-white/20">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-cloth-ink">
            © {new Date().getFullYear()} {SITE.companyNameMn}. Бүх эрх хуулиар
            хамгаалагдсан.
          </p>
          <div className="flex items-center gap-6 text-xs text-cloth-ink">
            <Link href="/privacy" className="hover:text-white hover:underline">
              Нууцлалын бодлого
            </Link>
            <a href="#" className="hover:text-white hover:underline">
              Үйлчилгээний нөхцөл
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
