import { Search } from "lucide-react";

const products = [
  { name: "Цагаан цамц", stock: 24, color: "#22c55e" },
  { name: "Ноосон малгай", stock: 6, color: "#f59e0b" },
  { name: "Оймс", stock: 58, color: "#22c55e" },
  { name: "Куртка", stock: 2, color: "#ef4444" },
];

export function ProductsScreen() {
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-9 pb-4 text-text">
      <p className="text-xs font-bold">Бараа материал</p>

      <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
        <Search className="h-3 w-3 text-text-secondary" />
        <span className="text-[9px] text-text-secondary">Бараа хайх...</span>
      </div>

      <div className="flex flex-col gap-2">
        {products.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-xl border border-border bg-surface p-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-[linear-gradient(135deg,#e8ecef,#f8faf9)]" />
              <div>
                <p className="text-[10px] font-semibold">{p.name}</p>
                <p className="text-[8px] text-text-secondary">Үлдэгдэл: {p.stock}</p>
              </div>
            </div>
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: p.color }}
            />
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-3 text-center">
        <p className="text-[9px] font-semibold text-primary">+ Бараа нэмэх</p>
      </div>
    </div>
  );
}
