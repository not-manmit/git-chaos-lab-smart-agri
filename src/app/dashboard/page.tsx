"use client";

import { useEffect, useState } from "react";
import Chart from "@/components/Chart";
import FilterPanel from "@/components/FilterPanel";
import SearchBox from "@/components/SearchBox";
import YieldCalculator from "@/components/YieldCalculator";
import ChatRoom from "@/components/ChatRoom";
import type { MarketItem } from "@/types/market";
import { fetchMarketItems } from "@/services/marketApi";
import { calculateDiscountedTotal, formatCurrency } from "@/utils/price";

export default function DashboardPage() {
  const [items, setItems] = useState<MarketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["grain"]);

  useEffect(() => {
    fetchMarketItems()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marketplace Command Center</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Monitor products, buyer demand, crop intelligence, and weather risk.
          </p>
        </div>
        <SearchBox onResults={setItems} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <FilterPanel selected={selectedCategories} setSelected={setSelectedCategories} />

        <section className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Listed stock</p>
              <p className="mt-2 text-3xl font-bold">{items.reduce((sum, item) => sum + item.stockKg, 0)} kg</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Organic batches</p>
              <p className="mt-2 text-3xl font-bold">{items.filter((item) => item.organic).length}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-slate-500">Avg. order value</p>
              <p className="mt-2 text-3xl font-bold">
                {formatCurrency(
                  items.reduce((sum, item) => sum + calculateDiscountedTotal(item.pricePerKg, 25, item.discountPercent), 0)
                )}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="rounded-lg border border-dashed border-slate-300 p-10 text-center text-slate-500">
              Loading agri market intelligence...
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-sm font-medium text-crop">{item.category}</p>
                  <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{item.farmer} · {item.region}</p>
                  <p className="mt-4 text-2xl font-bold">{formatCurrency(item.pricePerKg)} / kg</p>
                </article>
              ))}
            </div>
          )}

          <div className="grid gap-6 xl:grid-cols-2">
            <Chart items={items} />
            <YieldCalculator />
          </div>
          <ChatRoom />
        </section>
      </div>
    </div>
  );
}
