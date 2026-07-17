import type { ChatChannel, MarketItem, WeatherAlert } from "@/types/market";

export const marketItems: MarketItem[] = [
  {
    id: { value: "rice-001" },
    name: "Sona Masoori Rice",
    category: "grain",
    region: "Telangana",
    farmer: "K. Ramesh",
    pricePerKg: 62,
    discountPercent: 8,
    stockKg: 1200,
    organic: false
  },
  {
    id: { value: "tomato-002" },
    name: "Hybrid Tomatoes",
    category: "vegetable",
    region: "Karnataka",
    farmer: "S. Kavitha",
    pricePerKg: 28,
    discountPercent: 5,
    stockKg: 640,
    organic: true
  },
  {
    id: { value: "turmeric-003" },
    name: "Lakadong Turmeric",
    category: "spice",
    region: "Meghalaya",
    farmer: "M. Lyngdoh",
    pricePerKg: 210,
    discountPercent: 12,
    stockKg: 180,
    organic: true
  }
];

export const weatherAlerts: WeatherAlert[] = [
  {
    id: "wx-1",
    title: "Heavy rainfall warning",
    severity: "high",
    region: "Coastal Andhra"
  },
  {
    id: "wx-2",
    title: "Heat stress risk for leafy crops",
    severity: "medium",
    region: "Vidarbha"
  }
];

export const chatChannels: ChatChannel[] = [
  {
    id: "chat-1",
    buyerName: "GreenBasket Wholesale",
    lastMessage: "Can you confirm 500kg delivery by Monday?",
    unread: 3
  },
  {
    id: "chat-2",
    buyerName: "Urban Fresh Stores",
    lastMessage: "Need pesticide residue certificate.",
    unread: 0
  }
];
