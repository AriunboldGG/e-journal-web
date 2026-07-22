"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "Компани" },
  { href: "#features", label: "Боломжууд" },
  { href: "#how-it-works", label: "Хэрхэн ажилладаг" },
  { href: "#who", label: "Хэнд зориулагдсан" },
  { href: "#faq", label: "Асуулт хариулт" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3.5">
        <Link href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#169b62,#22c55e)] text-sm font-bold text-white">
            Ц
          </span>
          <span className="text-base font-bold tracking-tight text-text">
            Цахим дэвтэр
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative text-sm font-medium text-text-secondary transition-colors hover:text-text"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" variant="ghost" size="md">
            Холбоо барих
          </Button>
          <Button href="#download" variant="primary" size="md">
            Апп татах
          </Button>
        </div>

        <button
          aria-label="Цэс нээх"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-surface px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-text-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button href="#download" variant="primary" size="md" className="mt-2 w-full">
              Апп татах
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
