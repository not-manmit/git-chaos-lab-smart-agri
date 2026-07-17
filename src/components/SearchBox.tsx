"use client";

import { useState } from "react";
import { fetchMarketItems } from "@/services/marketApi";
import type { MarketItem } from "@/types/market";

type SearchBoxProps = {
  onResults: (items: MarketItem[]) => void;
};

export default function SearchBox({ onResults }: SearchBoxProps) {
  const [query, setQuery] = useState("");

  function handleChange(value: string) {
    setQuery(value);
    fetchMarketItems(value).then(onResults);
  }

  return (
    <label className="w-full max-w-sm">
      <span className="sr-only">Search crops</span>
      <input
        value={query}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search crop, farmer, region..."
        className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-crop/30 focus:ring-4 dark:border-slate-700 dark:bg-slate-900"
      />
    </label>
  );
}
