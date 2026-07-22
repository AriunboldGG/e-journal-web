import { Minus, Plus, ShoppingBag } from "lucide-react";

const items = [
  { name: "Цагаан цамц", qty: 2, price: "24,000" },
  { name: "Ноосон малгай", qty: 1, price: "18,500" },
  { name: "Оймс (3ш)", qty: 3, price: "9,000" },
];

export function POSScreen() {
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-9 pb-4 text-text">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold">Борлуулалт</p>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
          <ShoppingBag className="h-3 w-3 text-primary" />
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-3">
        {items.map((it) => (
          <div key={it.name} className="flex items-center justify-between border-b border-border/70 pb-2 last:border-0 last:pb-0">
            <div>
              <p className="text-[10px] font-semibold">{it.name}</p>
              <p className="text-[8px] text-text-secondary">₮{it.price}</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-black/[0.04] px-1.5 py-1">
              <Minus className="h-2 w-2" />
              <span className="text-[9px] font-semibold">{it.qty}</span>
              <Plus className="h-2 w-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-3">
        <p className="text-[9px] text-text-secondary">Төлбөрийн хэлбэр</p>
        <div className="mt-1.5 flex gap-1.5">
          {["Бэлэн", "Карт", "QPay"].map((m, i) => (
            <span
              key={m}
              className={`rounded-full px-2 py-1 text-[8px] font-semibold ${
                i === 2 ? "bg-primary text-white" : "bg-white text-text-secondary border border-border"
              }`}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between rounded-2xl bg-[linear-gradient(135deg,#169b62,#22c55e)] px-4 py-3 text-white">
        <div>
          <p className="text-[8px] opacity-80">Нийт дүн</p>
          <p className="text-sm font-bold">₮69,500</p>
        </div>
        <span className="rounded-full bg-white/20 px-3 py-1.5 text-[9px] font-semibold">Төлөх</span>
      </div>
    </div>
  );
}
