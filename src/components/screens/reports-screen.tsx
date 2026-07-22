export function ReportsScreen() {
  return (
    <div className="flex h-full flex-col gap-3 px-4 pt-9 pb-4 text-text">
      <p className="text-xs font-bold">Тайлан ба ашиг</p>

      <div className="rounded-2xl border border-border bg-surface p-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] text-text-secondary">Сарын ашиг</p>
            <p className="text-lg font-bold text-primary">₮8,420,000</p>
          </div>
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-[8px] font-semibold text-[#0f8a52]">
            +24%
          </span>
        </div>
        <div className="mt-3 flex h-14 items-end gap-1">
          {[30, 50, 40, 70, 55, 85, 60, 95, 75, 100, 80, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-primary/20" style={{ height: `${h}%` }}>
              <div
                className="w-full rounded-t-sm bg-[linear-gradient(180deg,#22c55e,#169b62)]"
                style={{ height: "60%" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-3">
        <p className="mb-2 text-[9px] font-semibold text-text-secondary">Хамгийн их зарагдсан</p>
        <div className="flex flex-col gap-2">
          {[
            { n: "Цагаан цамц", p: 82 },
            { n: "Ноосон малгай", p: 61 },
            { n: "Оймс", p: 44 },
          ].map((row) => (
            <div key={row.n} className="flex items-center gap-2">
              <span className="w-14 shrink-0 text-[8px]">{row.n}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.05]">
                <div className="h-full rounded-full bg-primary" style={{ width: `${row.p}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-black/[0.03] p-3">
          <p className="text-[8px] text-text-secondary">Зарлага</p>
          <p className="text-xs font-bold">₮1,120,000</p>
        </div>
        <div className="rounded-xl bg-black/[0.03] p-3">
          <p className="text-[8px] text-text-secondary">Нөөц бараа</p>
          <p className="text-xs font-bold">312 ширхэг</p>
        </div>
      </div>
    </div>
  );
}
