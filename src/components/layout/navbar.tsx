"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
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
        "border-b-2 border-text/85 bg-surface",
        scrolled && "shadow-[0_10px_18px_-14px_rgba(8,61,38,0.55)]"
      )}
    >
      <div className="container-app flex h-[4.25rem] items-center justify-between gap-6" style={{ maxWidth: "1360px" }}>
        <Link href="#" className="flex shrink-0 items-center gap-2.5">
          <Logo size={36} />
          <span className="whitespace-nowrap text-lg font-extrabold tracking-tight text-text">
            Цахим дэвтэр
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-6 xl:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative whitespace-nowrap text-sm font-semibold text-text-secondary transition-colors hover:text-text"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 border-y border-pen transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Button href="#contact" variant="ghost" size="md">
            Холбоо барих
          </Button>
          <Button href="#download" variant="primary" size="md">
            Аппликейшн татах
          </Button>
        </div>

        <button
          aria-label="Цэс нээх"
          className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-text xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-text/85 bg-surface px-6 py-4 xl:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-dotted border-border pb-3 text-base font-semibold text-text"
              >
                {l.label}
              </a>
            ))}
            <Button href="#download" variant="primary" size="md" className="mt-2 w-full">
              аппликейшн татах
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
