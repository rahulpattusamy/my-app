import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "mlik", price: 20 },
    { id: 2, name: "vegtable", price: 30 },
    { id: 3, name: "shoes", price: 750 },
  ]);
}
