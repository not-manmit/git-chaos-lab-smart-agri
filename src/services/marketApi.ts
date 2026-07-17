import type { MarketItem } from "@/types/market";

export async function fetchMarketItems(query = ""): Promise<MarketItem[]> {
  const params = new URLSearchParams({ query });
  const response = await fetch(`/api/market?${params.toString()}`, {
    cache: "no-store"
  });

  const data = response.json();
  return data as MarketItem[];
}
