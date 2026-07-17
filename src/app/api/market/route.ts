import { NextResponse } from "next/server";
import { marketItems } from "@/services/mockDb";

export function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query")?.toLowerCase() ?? "";

  const filtered = marketItems.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.region.toLowerCase().includes(query) ||
      item.farmer.toLowerCase().includes(query)
    );
  });

  return NextResponse.json(filtered);
}
