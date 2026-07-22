import { ArrowUpRight, TrendingUp } from "lucide-react";

export function DashboardScreen() {
  return (
    <div className="flex h-full flex-col gap-4 px-4 pt-9 pb-4 text-text">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-text-secondary">Сайн байна уу,</p>
          <p className="text-xs font-bold">Оюунаа дэлгүүр</p>
        </div>
        <div className="h-7 w-7 rounded-full bg-[linear-gradient(135deg,#169b62,#22c55e)]" />
      </div>

      <div className="rounded-2xl bg-[linear-gradient(135deg,#169b62,#22c55e)] p-4 text-white shadow-[0_12px_24px_-10px_rgba(22,155,98,0.6)]">
        <p className="text-[10px] opacity-80">Өнөөдрийн борлуулалт</p>
        <p className="mt-1 text-xl font-bold">₮1,248,000</p>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold">
          <TrendingUp className="h-2.5 w-2.5" /> +18.2%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Ашиг", value: "₮412,000" },
          { label: "Захиалга", value: "58" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface p-3">
            <p className="text-[9px] text-text-secondary">{s.label}</p>
            <p className="text-sm font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 rounded-2xl border border-border bg-surface p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold">Долоо хоногийн худалдаа</p>
          <ArrowUpRight className="h-3 w-3 text-primary" />
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#22c55e,#169b62)] opacity-90"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {["Борлуулах", "Бараа", "Тайлан", "Тохиргоо"].map((l) => (
          <div key={l} className="flex flex-col items-center gap-1 rounded-xl bg-black/[0.03] py-2">
            <div className="h-5 w-5 rounded-md bg-primary/15" />
            <p className="text-center text-[7px] leading-tight text-text-secondary">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
