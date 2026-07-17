export type MarketCategory = "grain" | "vegetable" | "fruit" | "dairy" | "spice";

export interface MarketItem {
  id: number;
  name: string;
  category: MarketCategory;
  region: string;
  farmer: string;
  pricePerKg: number;
  discountPercent: number;
  stockKg: number;
  organic: boolean;
}

export interface WeatherAlert {
  id: string;
  title: string;
  severity: "low" | "medium" | "high";
  region: string;
}

export interface ChatChannel {
  id: string;
  buyerName: string;
  lastMessage: string;
  unread: number;
}
